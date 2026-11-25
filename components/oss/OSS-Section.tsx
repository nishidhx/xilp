import Link from "next/link"
import { Container } from "../common/container"
import { OSSContainer } from "./showcase-section"
import { ossContributions } from "@/data/projects/data";

const opensourcecontri = ossContributions;
  
export const OSS_Section = () => {
    return <Container className="OSS_Section flex flex-col sm:items-start my-10 max-w-2xl space-y-2 undefined">
        <h1
        className="text-lg light:text-black sm:text-xl font-bold animate-in-up"
        style={{ animationDelay: "0s" }}
      >
        Open Source Contributions
      </h1>

      {
        opensourcecontri.map((contribution, index) => (
            <OSSContainer key={index} contribution={contribution} animationDelay={`${(0.05 + index * 0.1).toFixed(2)}s`}/>
        ))
      }

      <div
        className="mx-auto mt-4 animate-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        <button
          type="submit"
          className="border light:text-black border-slate-500/10 w-fit py-1 px-2 rounded-lg bg-slate-50/5 hover:bg-slate-50/10"
        >
          <Link href={"https://www.github.com/nishidhx"}>Show all OSS Contributions</Link>
        </button>
      </div>
    </Container>
}