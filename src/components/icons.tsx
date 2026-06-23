import type { SVGProps } from "react";

/** Circled ® mark used as the hero overlay (white). */
export function RIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        x="3.741"
        y="3.961"
        width="72.332"
        height="72.332"
        rx="36.166"
        stroke="currentColor"
        strokeWidth="7.483"
      />
      <path
        fill="currentColor"
        d="M24.736 62.196V18.661h15.518q5.06 0 8.397 1.743 3.359 1.743 5.017 4.825 1.658 3.06 1.658 7.08 0 3.995-1.68 7.035-1.657 3.02-5.016 4.698-3.337 1.68-8.397 1.68H28.478v-5.655h11.16q3.189 0 5.187-.914 2.005-.927 2.94-2.65.937-1.724.937-4.27 0-2.55-.943-4.336-.943-1.787-2.954-2.74-2.005-.96-5.23-.96h-8.014v37.999h-6.825Zm22.39-19.78 10.79 19.78h-7.717l-10.577-19.78h7.504Z"
      />
    </svg>
  );
}

/** Diagonal up-right arrow (↗). Color via currentColor. */
export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m7 17.5 10-10m0 0H7m10 0v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Play triangle for the video section. */
export function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M22.188 10.954 2.988.154A1.202 1.202 0 0 0 1.2 1.2v21.6a1.2 1.2 0 0 0 1.788 1.046l19.2-10.8a1.202 1.202 0 0 0 0-2.092"
      />
    </svg>
  );
}

/** Small circled icon used before section labels ("About us", "From the journal"). */
export function PlusCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="24" height="24" rx="12" fill="currentColor" />
      <path
        d="M12 7.5v9M7.5 12h9"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4 8h16M4 16h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
