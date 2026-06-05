"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Status } from "../[ui]/working";
interface workExperience {
  id: string;
  role: string;
  companyName: string;
  skills: string[];
  description: string[];
  place: string;
  joining_date: string;
  working: boolean;
}

export const ExperienceCard = () => {
  const [workExperience, setworkExperience] = useState<workExperience[]>([]);

  useEffect(() => {
    const fetchUserExperience = async () => {
      const work = await axios.get(
        `${process.env.SERVER_URL ?? "http://localhost:3000"}/api/v1/work`,
      );
      const data = await work.data.work;
      setworkExperience(data);
      console.log(data);
    };

    fetchUserExperience();
  }, []);

  return (
    <div className="w-full">
      {workExperience &&
        Array.isArray(workExperience) &&
        workExperience.map((work, index) => (
          <>
            <div className="flex justify-between mt-5">
              <div>
                <div className="flex gap-2 items-center">
                  <h1 className="text-lg font-bold">{work.companyName}</h1>
                  {work.working ? <Status /> : undefined}
                </div>
                <div className="text-[#909092] text-sm">{work.role}</div>
              </div>
              <div className="flex flex-col items-end text-sm text-[#909092]">
                {new Date(work.joining_date).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}{" "}
                {work.working ? "- present" : ""}
                <div>{work.place}</div>
              </div>
            </div>
            <div className="mt-4 py-2 space-y-4 border-t border-[#909092]/20 rounded-sm shadow-md border-border pt-4 outline-ring/50">
              <div>
                <h1 className="text-sm font-bold">Technologies & Tools</h1>
              </div>
              <div className="description text-[#909092] ">
                {work.description.map((desc, index) => (
                  <>
                    <div className="flex text-sm  gap-1 items-center">
                      <div>•</div> <div key={index}>{desc}</div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </>
        ))}
    </div>
  );
};
