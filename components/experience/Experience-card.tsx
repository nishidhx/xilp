"use client";
import experienceData from "@/data/work/exp.json";
import { WorkDetail } from "./ToolTip";
import type { WorkType } from "@prisma/client";
import { Main } from "./main";
export type workExperience = {
  id: string;
  role: string;
  companyName: string;
  skills: string[];
  description: string[];
  place: string;
  joining_date: string;
  working: boolean;
  work: WorkType
}

export const ExperienceCard = () => {
  const workExperience = experienceData as workExperience[];

  return (
    <div className="w-full animate-in-up" style={{animationDelay: "0.1s"}}>
      {workExperience &&
        Array.isArray(workExperience) &&
        workExperience.map((work, index) => (
          <div key={index} className="overflow">
            <Main work={work} wrap={false} page={0}/>
            <WorkDetail work={work}/>
          </div>
        ))}
    </div>
  );
};
