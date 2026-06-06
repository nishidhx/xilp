import { Hero } from "@/components/common/hero";
import { Experience } from "@/components/landing/work/Experience";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto max-w-2xl px-4 pt-16">
        <Hero />
        <Experience />
    </div>
  );
}
