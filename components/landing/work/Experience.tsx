"use client";
import { SpinnerCustom } from "@/components/[ui]/spinner";
import { Container } from "@/components/common/container";
import { Main } from "@/components/experience/main";
import { WorkType } from "@prisma/client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import "dotenv/config"

interface workExperience {
  id: string;
  role: string;
  companyName: string;
  skills: string[];
  description: string[];
  place: string;
  joining_date: string;
  working: boolean;
  work: WorkType;
}

export const Experience = () => {
  const [workExperience, setworkExperience] = useState<workExperience[]>([]);

  console.log(process.env.NEXT_PUBLIC_SERVER_URL)

  useEffect(() => {
    const fetchUserExperience = async () => {
      const work = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:3000"}/api/v1/work?view=1`,
      );
      const data = await work.data.work;
      setworkExperience(data);
      console.log(data);
    };

    fetchUserExperience();
  }, []);

  if (workExperience.length === 0) {
    return (
      <div className="w-full flex items-center justify-center h-50">
        <SpinnerCustom />
      </div>
    );
  }

  return (
    <Container className="flex flex-col sm:items-start mt-12 max-w-2xl space-y-2 undefined">
      <h1
        className="text-lg sm:text-xl font-bold animate-in-up"
        style={{ animationDelay: "0s" }}
      >
        Experience
      </h1>

      {workExperience &&
        Array.isArray(workExperience) &&
        workExperience.map((work, index) => (
          <div
            className="w-full animate-in-up"
            style={{ animationDelay: `${(0.05 + index * 0.1).toFixed(2)}s` }}
            key={index}
          >
            <Main work={work} wrap={true} page={1}/>
          </div>
        ))}

      <div className="mx-auto mt-4 animate-in-up" style={{animationDelay:"0.1s"}}>
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
