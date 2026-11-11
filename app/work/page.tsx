import { Container } from "@/components/common/container";
import { ExperienceCard } from "@/components/experience/Experience-card";
import { siteUrl } from "@/config/site";

export async function generateMetadata() {
  const canonical = new URL("work", siteUrl).toString();
  return {
    metadataBase: siteUrl,
    alternates: {
      canonical,
    },
    title: "Nishidh Singh work Experience",
    description:
      "This page containes work and professional experience of an engineer named Nishidh Singh",
    openGraph: {
      title: "Work Experience of xNishidh",
      description:
        "This page containes work and professional experience of an engineer named Nishidh Singh",
      url: canonical,
      images: [
        {
          url: "https://raw.githubusercontent.com/nishidhx/xilp/refs/heads/master/public/opengraph/experience.png",
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
          url: "https://raw.githubusercontent.com/nishidhx/xilp/refs/heads/master/public/opengraph/experience.png",
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
