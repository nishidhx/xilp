"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Status } from "../[ui]/working";
import { SpinnerCustom } from "../[ui]/spinner";
import { Skills, WorkDetail } from "./ToolTip";
import { WorkType } from "@prisma/client";
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
  const [workExperience, setworkExperience] = useState<workExperience[]>([]);

  useEffect(() => {
    const fetchUserExperience = async () => {
      const work = await axios.get(
        `${process.env.SERVER_URL ?? "https://xilp.vercel.app"}/api/v1/work`,
      );
      const data = await work.data.work;
      setworkExperience(data);
      console.log(data);
    };

    fetchUserExperience();
  }, []);

  if (workExperience.length === 0) {
    return <div className="w-full flex items-center justify-center h-50"><SpinnerCustom /></div>
  }

  return (
    <div className="w-full">
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
