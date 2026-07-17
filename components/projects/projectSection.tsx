import { projects } from "@/data/projects/data";
import { Container } from "../common/container";
import { ProjectCard } from "./Card";
import Link from "next/link";

export const ProjectSection = () => {
  const projectArray = projects.slice(0, 3)
  return (
    <Container className="flex flex-col sm:items-start mt-10 mb-10 max-w-2xl space-y-2 undefined">
      <h1
        className="text-lg light:text-black sm:text-xl font-bold animate-in-up"
        style={{ animationDelay: "0s" }}
      >
        Projects I've built
      </h1>

      {projectArray.map((project, index) => {
        return (
          <div
            className="w-full animate-in-up"
            style={{ animationDelay: `${(0.05 + index * 0.1).toFixed(2)}s` }}
            key={index}
          >
            <ProjectCard
              title={project.title}
              descripiton={project.description}
              date={project.date}
              key={index}
              image={project.image}
              building={project.building}
              github={project.github}
            />
          </div>
        );
      })}

      <div
        className="mx-auto mt-4 animate-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        <button
          type="submit"
          className="border light:text-black border-slate-500/10 w-fit py-1 px-2 rounded-lg bg-slate-50/5 hover:bg-slate-50/10"
        >
          <Link href={"/project"}>Show all projects</Link>
        </button>
      </div>
    </Container>
  );
};
