"use client";
import { Container } from "@/components/common/container";
import { useParams } from "next/navigation";

export default function ParticularBlog() {
  const { slug } = useParams();

  return <Container className="mt-30">{slug}</Container>;
}
