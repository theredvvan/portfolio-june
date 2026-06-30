import { NextResponse } from "next/server";

/** Max accepted length per field (characters). */
const LIMITS = { name: 100, email: 254, message: 5000 } as const;

/** Rate limit: max requests per IP within the rolling window. */
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 } as const; // 5 / 10 min

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Best-effort in-memory rate limiter (process-local). On serverless platforms
 * each instance keeps its own map, so this throttles per-instance rather than
 * globally — good enough to blunt floods. For hard guarantees, back this with a
 * shared store (e.g. Upstash Redis).
 */
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT.windowMs;
  const recent = (hits.get(ip) ?? []).filter((t) => t > windowStart);
  recent.push(now);
  hits.set(ip, recent);

  // Opportunistic cleanup so the map can't grow unbounded.
  if (hits.size > 5000) {
    for (const [key, ts] of hits) {
      if (ts.every((t) => t <= windowStart)) hits.delete(key);
    }
  }
  return recent.length > RATE_LIMIT.max;
}

function getIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

/**
 * Neutralizes spreadsheet formula injection: a value a spreadsheet could read
 * as a formula (leading = + - @ or tab/CR) is prefixed with a single quote so
 * it's stored as literal text.
 */
function sanitizeForSheets(value: string): string {
  return /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
}

export async function POST(req: Request) {
  // 1. Rate limit per IP.
  if (rateLimited(getIp(req))) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  // 2. Parse body safely — malformed JSON returns 400, never a crash.
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, message, company } = (body ?? {}) as Record<
    string,
    unknown
  >;

  // 3. Honeypot: real users never see/fill `company`. If it's set, silently
  //    accept (so bots think they succeeded) and drop the submission.
  if (typeof company === "string" && company.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  // 4. Validate types, presence, length, and email format.
  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(message)
  ) {
    return NextResponse.json(
      { error: "Missing or invalid fields" },
      { status: 400 },
    );
  }

  const cleanName = name.trim().slice(0, LIMITS.name);
  const cleanEmail = email.trim().slice(0, LIMITS.email);
  const cleanMessage = message.trim().slice(0, LIMITS.message);

  if (!EMAIL_RE.test(cleanEmail)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 },
    );
  }

  // 5. Ensure server is configured before calling out.
  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, GOOGLE_SHEET_URL } = process.env;
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID || !GOOGLE_SHEET_URL) {
    return NextResponse.json({ error: "Server not configured" }, { status: 500 });
  }

  const formatted = new Date().toLocaleString("en-GB", {
    timeZone: "Africa/Casablanca",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  // 6. Telegram as PLAIN TEXT (no parse_mode): user input can never be
  //    interpreted as Markdown, so no injected links, no formatting breakage,
  //    and no malformed-entity 400s that would silently drop messages.
  const telegramText =
    `🔔 New message from portfolio\n\n` +
    `👤 Name: ${cleanName}\n` +
    `📧 Email: ${cleanEmail}\n` +
    `💬 Message:\n${cleanMessage}\n\n` +
    `🕐 Received: ${formatted} (Marrakech)`;

  try {
    const tg = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: telegramText }),
      },
    );
    if (!tg.ok) throw new Error(`Telegram ${tg.status}`);

    const sheet = await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: sanitizeForSheets(cleanName),
        email: sanitizeForSheets(cleanEmail),
        message: sanitizeForSheets(cleanMessage),
      }),
    });
    if (!sheet.ok) throw new Error(`Sheets ${sheet.status}`);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to deliver message" },
      { status: 502 },
    );
  }
}
