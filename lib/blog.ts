import { BlogFrontmatter, BlogPost } from "@/types/blog";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { cache } from "react";

const blogDirectory = path.join(process.cwd(), "data/blogs");

function getBlogFilePath(slug: string) {
  return path.join(blogDirectory, `${slug}.mdx`);
}

export const getBlogSlugs = cache((): string[] => {
  try {
    if (!fs.existsSync(blogDirectory)) {
      return [];
    }

    return fs
      .readdirSync(blogDirectory)
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => path.basename(file, ".mdx"));
  } catch (error) {
    console.error("Error listing blog slugs:", error);
    return [];
  }
});

/**
 * Get blog post by slug with full content
 */
export const getBlogPostBySlug = cache((slug: string): BlogPost | null => {
  try {
    const fullPath = getBlogFilePath(slug);
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Validate frontmatter
    const frontmatter = data as BlogFrontmatter;
    if (!frontmatter.title || !frontmatter.description) {
      throw new Error(`Invalid frontmatter in ${slug}.mdx`);
    }

    return {
      slug,
      frontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
});

export const getBlogs = cache((): Pick<
  BlogFrontmatter,
  "title" | "description" | "date" | "tags" | "slug"
>[] => {
  try {
    if (!fs.existsSync(blogDirectory)) {
      return [];
    }

    const files = fs.readdirSync(blogDirectory);

    const blogs: Pick<
      BlogFrontmatter,
      "title" | "description" | "date" | "tags" | "slug"
    >[] = [];

    for (const file of files) {
      if (!file.endsWith(".mdx")) {
        continue;
      }

      const filePath = path.join(blogDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContents);
      const frontmatter = data as BlogFrontmatter;
      if (!frontmatter.title || !frontmatter.description) {
        continue;
      }

      blogs.push({
        title: frontmatter.title,
        description: frontmatter.description,
        date: frontmatter.date,
        tags: frontmatter.tags,
        slug: frontmatter.slug ?? path.basename(file, ".mdx"),
      });
    }

    blogs.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
    return blogs;
  } catch (err) {
    console.error(err);
    return [];
  }
});
