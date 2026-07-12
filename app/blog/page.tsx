import { Container } from "@/components/common/container";
import { ResourcesSection } from "@/components/landing/blog/ResourcesSection";
import { getBlogs, getBlogPostBySlug } from "@/lib/blog";
import { Metadata } from "next";

const fetchBlogs = () => {
  const blogs = getBlogs();
  return blogs
}

export async function generateMetadata(): Promise<Metadata> {
  const blogs = getBlogs();

  const title = "Articles & Blogs";
  const description =
    "Read articles that break down complex topics into approachable chunks for better understanding.";

  const baseOrigin = process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:3000";
  const canonical = `${baseOrigin.replace(/\/$/, "")}/blog`;

  // collect unique keywords from all blog tags
  const allTags = blogs.flatMap((b) => b.tags ?? []);
  const keywords = Array.from(new Set(allTags)).slice(0, 40);

  // try to pick an image from the first blog post's frontmatter (if available)
  let ogImage = "/opengraph/article.png";
  if (blogs.length > 0 && blogs[0].slug) {
    const post = getBlogPostBySlug(blogs[0].slug);
    if (post?.frontmatter?.image) ogImage = post.frontmatter.image;
  }

  const imageUrl = new URL(ogImage, baseOrigin).toString();

  return {
    metadataBase: new URL(baseOrigin),
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Articles & Blogs",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}


export default function Project() {
  const blogs = fetchBlogs()
  return (
    <Container className="mt-20">
      <div className="animate-in-up">
        <h1 className="text-2xl font-bold light:text-black">Articles & Blogs</h1>
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
          <ResourcesSection key={index} {...blog} slug={blog.slug ?? ""} date={new Date(blog.date)} />
        ))}
      </div>
    </Container>
  );
}
