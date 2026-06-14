import { Container } from "@/components/common/container";
import { ResourcesSection } from "@/components/landing/blog/ResourcesSection";
import { blogs } from "@/data/fetch";

export default function Project() {
  return (
    <Container className="mt-20">
      <div className="animate-in-up">
        <h1 className="text-2xl font-bold">Articles & Blogs</h1>
        <p className="text-secondary">
          Read this articles that are written to make complex things into chunks
          for better understanding.
        </p>
      </div>
      <div
        className="flex mt-10 flex-col animate-in-up"
        style={{ animationDelay: "0.05s" }}
      >
        {blogs.map((blog, index) => (
          <ResourcesSection key={index} {...blog} />
        ))}
      </div>
    </Container>
  );
}
