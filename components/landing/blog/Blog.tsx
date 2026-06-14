import { Container } from "@/components/common/container";
import { ResourcesSection } from "./ResourcesSection";
import { blogs } from "@/data/fetch";
import Link from "next/link";

export const Blogs = () => {
  return (
    <Container className="flex flex-col sm:items-start mt-12 max-w-2xl space-y-2 undefined">
      <h1
        className="text-lg sm:text-xl font-bold animate-in-up"
        style={{ animationDelay: "0s" }}
      >
        Articles & Blogs
      </h1>
      {blogs.map((blog, index) => (
        <ResourcesSection key={index} {...blog} />
      ))}

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
