import { Hero } from "@/components/common/hero";
import { Blogs } from "@/components/landing/blog/Blog";
import { Experience } from "@/components/landing/work/Experience";
import { OSS_Section } from "@/components/oss/OSS-Section";
import { ProjectSection } from "@/components/projects/projectSection";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto max-w-2xl pt-10 scroll-smooth">
        <Hero />
        <Experience />
        <OSS_Section />
        <Blogs/>
        <ProjectSection/>
    </div>
  );
}
