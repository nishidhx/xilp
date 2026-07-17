import { Container } from "@/components/common/container";
import { ProjectCard } from "@/components/projects/Card";
import { projects } from "@/data/projects/data";

export default function Project() {
  return (
    <Container className="mt-20">
      <div className="animate-in-up w-full">
        <h1 className="text-2xl font-bold light:text-black">Projects</h1>
        <p className="text-secondary">
          A few products and experiments I've shipped.
        </p>
      </div>
      <div className="flex flex-col mb-20 gap-2 w-full mt-10">
       {projects.map((project, index) => (
        <div
            className="w-full animate-in-up"
            style={{ animationDelay: `${(0.05 + index * 0.2).toFixed(2)}s` }}
            key={index}
          >
        <ProjectCard title={project.title} descripiton={project.description} date={project.date} key={index} image={project.image} building={project.building} github={project.github}/>
        </div>
       ))}
      </div>
    </Container>
  );
}
