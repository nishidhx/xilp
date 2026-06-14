import { Separator } from "@/components/[ui]/Separator";
import { Container } from "@/components/common/container";

export default function ResumePage() {
  return (
    <Container className="mt-20">
      <div>
        <h1 className="text-2xl font-bold">Resume</h1> <p className="text-secondary">View and download my professional resume.</p>
      </div>
      <div className="space-y-8">
        <Separator />
        <div className="mx-auto max-w-2xl rounded-lg p-2 border border-slate-500/10 bg-slate-50/5">
          <iframe
            src={
              "https://drive.google.com/file/d/1eDnClA9C8Dln1nwl5oWeqYsIBeoCIUip/preview"
            }
            className="min-h-screen w-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
