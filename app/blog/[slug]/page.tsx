import { BlogContent } from "@/components/blog/BlogContent";
import { Container } from "@/components/common/container";
import { getBlogPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
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
