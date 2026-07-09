// components/mdx-remote.js
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "@shikijs/rehype";
import { BlogComponents } from "./BlogComponents";
import { BlogContentResize } from "./BlogContentResize";
import { BlogFrontmatter } from "@/types/blog";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { BackButton } from "@/icons/Back";
import Link from "next/link";
import { cache } from "react";

interface BlogContentProps {
  frontmatter: BlogFrontmatter;
  content: string;
}

const getCompiledBlogContent = cache(async (source: string) => {
  const { content } = await compileMDX({
    source,
    components: BlogComponents,
    options: {
      mdxOptions: {
        rehypePlugins: [
          [
            rehypeHighlight,
            {
              theme: "vitesse-dark",
            },
          ],
        ],
      },
    },
  });

  return content;
});

export async function BlogContent({ frontmatter, content }: BlogContentProps) {
  const { title, image, description, date } = frontmatter;
  const compiledContent = await getCompiledBlogContent(content);

  return (
    <div>
      <div className="mb-10">
        <Link href={"/blog"}>
          <button className="flex gap-2 hover:opacity-80 font-semibold flex-row items-center cursor-pointer">
            <BackButton className=" size-4" />
            <p>Back to Blog</p>
          </button>
        </Link>
      </div>

      <Image
        src={image}
        alt="image"
        className="w-full rounded-md"
        width={100}
        height={100}
        loading="eager"
      />
      <div>
        <h1 className="text-white font-bold text-4xl my-2">{title}</h1>
        <p className="text-secondary">{description}</p>
        <div className="text-xs flex text-secondary gap-1 mt-4">
          <Calendar className="size-4 text-secondary" />
          <p>{date}</p>
        </div>

        <div className="border-b border-[#f8fafc0d] mt-2"></div>
      </div>
      <article>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {compiledContent}
        </div>
      </article>
      <BlogContentResize />
    </div>
  );
}
