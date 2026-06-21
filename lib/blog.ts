import { BlogFrontmatter, BlogPost } from "@/types/blog";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
const blogDirectory = path.join(process.cwd(), "data/blogs");

/**
 * Get blog post by slug with full content
 */
export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);

    console.log(fullPath);
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
}

export function getBlogs(): Pick<
  BlogFrontmatter,
  "title" | "description" | "date" | "tags" | 'slug'
>[] {
  try {
    const fullPath = path.join(blogDirectory);
    if (!fs.existsSync(fullPath)) {
      return [];
    }

    const files = fs.readdirSync(fullPath);

    const blogs: Pick<
      BlogFrontmatter,
      "title" | "description" | "date" | "tags" | "slug"
    >[] = [];

    for (const file of files) {
      const fileContents = fs.readFileSync(path.join(fullPath, file), "utf-8");
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
        slug: frontmatter.slug
      });
    }

    return blogs;
  } catch (err) {
    console.error(err)
    return [];
  }
}
