import { Badge } from "@/components/[ui]/badge";
import { ArrowRightIcon, Calendar } from "lucide-react";
import Link from "next/link";
// import { MDXRemote } from "next-mdx-remote/rsc";p

interface ResourcesSection {
  title: string;
  description: string;
  animationDelay?: string;
  tags: string[];
  date: Date;
  slug: string;
}

export const ResourcesSection = (props: ResourcesSection) => {
  const date = props.date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="group flex flex-row w-full h-fit justify-between">
      <Link href={`/blog/${props.slug}`}>
      <div
        className="animate-in-up my-2 overflow-hidden"
        style={{ animationDelay: props.animationDelay }}
      >
        <article>
          <h1 className="text-lg font-semibold">{props.title}</h1>
          <div className="text-sm text-secondary">
            <p>{props.description}</p>
          </div>
        </article>
        <div className="flex flex-row gap-2 justify-start my-2">
          {props.tags.map((text, index) => (
            <Badge
              key={index}
              className="secondary rounded-lg"
              variant="secondary"
            >
              {text}
            </Badge>
          ))}
        </div>
        <div className="text-xs flex text-secondary gap-1 ml-1">
          <Calendar className="size-4 text-secondary" />
          <p>{date}</p>
        </div>
      </div>
      </Link>
      <div className="flex w-10 text-secondary hover:underline opacity-0 group-hover:opacity-100 justify-center items-center transition-opacity duration-300">
        <Link href={`/blog/${props.slug}`}></Link>
        <ArrowRightIcon className="size-4" />
      </div>
    </div>
  );
};
