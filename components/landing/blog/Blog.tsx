import { Container } from "@/components/common/container";
import { ResourcesSection } from "./ResourcesSection";
import Link from "next/link";
import { getBlogs } from "@/lib/blog";


const fetchBlogs = () => {
  const blogs = getBlogs();
  return blogs
}

export const Blogs = () => {
  const blogs = fetchBlogs().splice(0, 3);

  return (
    <Container className="flex flex-col sm:items-start mt-10 max-w-2xl space-y-2 undefined">
      <h1
        className="text-lg sm:text-xl font-bold animate-in-up"
        style={{ animationDelay: "0s" }}
      >
        Articles & Blogs
      </h1>
      {blogs.map((blog, index) => {
        return (
          <ResourcesSection
            key={index}
            title={blog.title}
            description={blog.description}
            date={new Date(blog.date)}
            tags={blog.tags}
            slug={blog.slug ?? ""}
            animationDelay={`${(0.05 + index * 0.1).toFixed(2)}s`}
          />
        );
      })}

      <div
        className="mx-auto mt-4 animate-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        <button
          type="submit"
          className="border border-slate-500/10 w-fit py-1 px-2 rounded-lg bg-slate-50/5 hover:bg-slate-50/10"
        >
          <Link href={"/blog"}>Show all articles & blogs</Link>
        </button>
      </div>
    </Container>
  );
};
