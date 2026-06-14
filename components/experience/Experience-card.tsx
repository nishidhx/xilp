"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { SpinnerCustom } from "../[ui]/spinner";
import { WorkDetail } from "./ToolTip";
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
        `${process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:3000"}/api/v1/work`,
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
