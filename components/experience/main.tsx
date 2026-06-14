"use client";
import { WorkType } from "@prisma/client";
import { Status } from "../[ui]/working";
import type { workExperience } from "./Experience-card";
import { useEffect, useState } from "react";
import { ChevronRightIcon, ChevronUpIcon } from "lucide-react";
import { WorkDetail } from "./ToolTip";
import { useLenis } from "lenis/react";
const workTypeLabel: Record<WorkType, string> = {
  [WorkType.ONSITE]: "on-site",
  [WorkType.REMOTE]: "remote",
  [WorkType.HYBRID]: "hybrid",
};

export const Main = ({
  work,
  wrap,
  page = 0,
}: {
  work: workExperience;
  wrap: boolean;
  page: number;
}) => {
  const [clicked, setClicked] = useState(false);
  const lenis = useLenis();

  const toggle = () => {
    setClicked((prev) => !prev);

    requestAnimationFrame(() => {
      lenis?.resize();
    });
  };

  useEffect(() => {
    console.log(clicked);
  }, [clicked]);

  return (
    <div className="animate-in-up">
      <div className="group flex justify-between mt-5">
        <div>
          <div className="flex items-center">
            <div className="flex gap-1"><h1 className="text-lg sm:text-lg font-bold w-fit">{work.companyName}</h1>
            {work.working ? <Status /> : undefined}</div>
            <div className="hover:bg-slate-50/10 rounded-md">
              {wrap ? (
                <button
                  className="block sm:hidden sm:group-hover:block transition-transform text-amber-50/50 duration-200"
                  onClick={() => toggle()}
                >
                  {clicked ? (
                    <ChevronUpIcon className="size-4" />
                  ) : (
                    <ChevronRightIcon className="size-4" />
                  )}
                </button>
              ) : undefined}
            </div>
          </div>
          <div className="text-[#909092] text-sm">{work.role}</div>
        </div>
        <div className="flex w-fit flex-col items-end justify-center text-sm text-[#909092]">
          {new Date(work.joining_date).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}{" "}
          {work.working ? "- Present" : ""}
          <div>
            {work.place} ({workTypeLabel[work.work]}){" "}
          </div>
        </div>
      </div>
      {page === 1 && clicked && (
        <>
          <WorkDetail work={work} />
        </>
      )}
    </div>
  );
};
