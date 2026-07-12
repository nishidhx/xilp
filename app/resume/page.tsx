import { Separator } from "@/components/[ui]/Separator";
import { Container } from "@/components/common/container";


export async function generateMetadata() {
  const siteUrl = new URL("https://www.xnishidh.space/");
  return {
    metadataBase: new URL("/work", siteUrl),
    title: "Nishidh Singh work Experience",
    description:
      "This page containes resume of an engineer named Nishidh Singh",
    url: new URL("/work", siteUrl).toString(),
    openGraph: {
      title: "Work Experience of xNishidh",
      description:
        "This page containes resume of an engineer named Nishidh Singh",
      images: [
        {
          url: new URL("/opengraph/resume.png", siteUrl).toString(),
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
          url: new URL("/opengraph/resume.png", siteUrl).toString(),
          width: 1200,
          height: 630,
          alt: "Nishidh Singh resume",
        },
      ],
    },
    type: "webiste",
  };
}

export default function ResumePage() {
  return (
    <Container className="mt-20">
      <div>
        <h1 className="text-2xl light:text-black font-bold">Resume</h1> <p className="text-secondary">View and download my professional resume.</p>
      </div>
      <div className="space-y-8">
        <Separator />
        <div className="mx-auto max-w-2xl rounded-lg p-2 border border-slate-500/10 bg-slate-50/5">
          <iframe
            src={
              "https://drive.google.com/file/d/1UYaMN5APCKqjla6sAQyFG3uJyB70ZYNm/preview"
            }
            className="min-h-screen w-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
