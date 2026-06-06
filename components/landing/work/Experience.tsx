"use client";
import { Container } from "@/components/common/container";
import { Main } from "@/components/experience/main";
import { WorkType } from "@prisma/client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const fetchUserExperience = async () => {
      const work = await axios.get(
        `${process.env.SERVER_URL ?? "https://xilp.vercel.app/"}/api/v1/work`,
      );
      const data = await work.data.work;
      setworkExperience(data);
      console.log(data);
    };

    fetchUserExperience();
  }, []);
  return (
    <Container className="flex flex-col sm:items-start mt-12 max-w-2xl space-y-2 undefined">
      <h1 className="text-lg sm:text-xl font-bold">Experience</h1>

      {workExperience &&
        Array.isArray(workExperience) &&
        workExperience.map((work, index) => <div className="w-full" key={index}>
            <Main work={work} wrap={true} page={1}/>
        </div>)}


        <div className="mx-auto mt-4"><button type="submit" className="border border-slate-500/10 w-fit py-1 px-2 rounded-lg bg-slate-50/5 hover:bg-slate-50/10"><Link href={"/work"}>Show all work experiences</Link></button></div>
    </Container>
  );
};
