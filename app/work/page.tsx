import { Container } from "@/components/common/container";
import { ExperienceCard } from "@/components/experience/Experience-card";

export async function generateMetadata() {
  const siteUrl = new URL("https://www.xnishidh.space/");
  return {
    metadataBase: new URL("/work", siteUrl),
    title: "Nishidh Singh work Experience",
    description:
      "This page containes work and professional experience of an engineer named Nishidh Singh",
    url: new URL("/work", siteUrl).toString(),
    openGraph: {
      title: "Work Experience of xNishidh",
      description:
        "This page containes work and professional experience of an engineer named Nishidh Singh",
      images: [
        {
          url: new URL("/opengraph/experience.png", siteUrl).toString(),
          width: 1200,
          height: 630,
          alt: "Nishidh Singh Work Experience",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Nishidh Singh | Full Stack Engineer",
      description:
        "Hey, I'm Nishidh – Engineer working with React, Next.js, Django, and Node.js.",
      site: "@xnishidh",
      images: [
        {
          url: new URL("/opengraph/experience.png", siteUrl).toString(),
          width: 1200,
          height: 630,
          alt: "Nishidh Singh work experience",
        },
      ],
    },
    type: "webiste",
  };
}

export default function Work() {
  return (
    <Container className="mt-20">
      <div className="animate-in-up">
        <h1 className="text-2xl font-bold light:text-black">Work Experience</h1>
        <p className="text-secondary">
          My contributions and experience across multiple companies and
          positions.
        </p>
      </div>

      <div className="flex mt-10">
        <ExperienceCard />
      </div>
    </Container>
  );
}
