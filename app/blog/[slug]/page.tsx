"use client";
import { CustomMDX } from "@/components/blog/BlogContent";
import { Container } from "@/components/common/container";
import { useParams } from "next/navigation";

export default function ParticularBlog() {
  const { slug } = useParams();

  return <Container className="mt-30">
     <CustomMDX
      // h1 now renders with `large-text` className
      source={`# Hello World
      This is from Server Components!
    `}
    />
  </Container>;
}
