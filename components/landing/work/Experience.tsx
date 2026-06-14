import { Container } from "@/components/common/container";
import { Main } from "@/components/experience/main";
import Link from "next/link";
import "dotenv/config";
import { works } from "@/data/fetch";


export const Experience = () => {
  return (
    <Container className="flex flex-col sm:items-start mt-10 max-w-2xl space-y-2 undefined">
      <h1
        className="text-lg sm:text-xl font-bold animate-in-up"
        style={{ animationDelay: "0s" }}
      >
        Professional Experience
      </h1>

      {works &&
        Array.isArray(works) &&
        works.map((work, index) => (
          <div
            className="w-full animate-in-up"
            style={{ animationDelay: `${(0.05 + index * 0.1).toFixed(2)}s` }}
            key={index}
          >
            <Main work={work} wrap={true} page={1} />
          </div>
        ))}

      <div
        className="mx-auto mt-4 animate-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        <button
          type="submit"
          className="border border-slate-500/10 w-fit py-1 px-2 rounded-lg bg-slate-50/5 hover:bg-slate-50/10"
        >
          <Link href={"/work"}>Show all work experiences</Link>
        </button>
      </div>
    </Container>
  );
};
