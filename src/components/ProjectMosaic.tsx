import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/data/projects";

/** The site's signature asymmetric 4-up project grid. */
export function ProjectMosaic() {
  const [first, second, third, fourth] = PROJECTS;

  return (
    <div className="mt-16 flex flex-col gap-5 overflow-hidden rounded-[20px]">
      {/* Top row: 1.4 / 1, height 320px */}
      <div className="flex gap-5">
        <ProjectCard
          project={first}
          index={0}
          className="h-[320px] flex-[1.4]"
        />
        <ProjectCard project={second} index={1} className="h-[320px] flex-[1]" />
      </div>
      {/* Bottom row: 1 / 1.8, height 400px */}
      <div className="flex gap-5">
        <ProjectCard project={third} index={2} className="h-[400px] flex-[1]" />
        <ProjectCard
          project={fourth}
          index={3}
          className="h-[400px] flex-[1.8]"
        />
      </div>
    </div>
  );
}
