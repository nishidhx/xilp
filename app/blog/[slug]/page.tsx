import { BlogContent } from "@/components/blog/BlogContent";
import { Container } from "@/components/common/container";
import { getBlogPostBySlug } from "@/lib/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import "dotenv/config"

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  //  await params
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post || !post.frontmatter.isPublished) {
    return {
      title: 'Post Not Found',
    };
  }

  const { title, description, image } = post.frontmatter;

  return {
    metadataBase: new URL((process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:3000/blog") + "/blog"),
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  console.log(post);

  if (!post?.content || !post.frontmatter) {
    notFound();
  }

  return (
    <Container className="pt-20">
      <div className="">
        <BlogContent content={post?.content} frontmatter={post.frontmatter}/>
      </div>
    </Container>
  );
}
