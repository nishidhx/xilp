import { WorkType } from "@prisma/client";
import { Status } from "../[ui]/working";
import type { workExperience } from "./Experience-card";
import { ChevroRight } from "@/icons/chevron-icon";
import { useEffect, useState } from "react";
import { ChevronRightIcon, ChevronUp, ChevronUpIcon, Divide } from "lucide-react";
import { WorkDetail } from "./ToolTip";
const workTypeLabel: Record<WorkType, string> = {
  [WorkType.ONSITE]: "on-site",
  [WorkType.REMOTE]: "remote",
  [WorkType.HYBRID]: "hybrid",
};

export const Main = ({
  work,
  wrap,
  page = 0
}: {
  work: workExperience;
  wrap: boolean;
  page: number
}) => {
  const [clicked, setClicked] = useState(false);

    useEffect(() => {
        console.log(clicked)
    }, [clicked])

  return (
    <div>
        <div className="group flex justify-between mt-5">
      <div>
        <div className="flex gap-2 items-center">
          <h1 className="text-lg font-bold">{work.companyName}</h1>
          {work.working ? <Status /> : undefined}
          <div className="hover:bg-slate-50/10 rounded-md">
            {wrap ? (
              <button
                className="hidden group-hover:block transition-transform text-amber-50/50 duration-200"
                onClick={() => setClicked((prev) => !prev)}
              >
                {clicked ? <ChevronUpIcon className="size-4"/> : <ChevronRightIcon className="size-4"/>}
              </button>
            ) : undefined}
          </div>
        </div>
        <div className="text-[#909092] text-sm">{work.role}</div>
      </div>
      <div className="flex flex-col items-end text-sm text-[#909092]">
        {new Date(work.joining_date).toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}{" "}
        {work.working ? "- present" : ""}
        <div>
          {work.place} ({workTypeLabel[work.work]}){" "}
        </div>
      </div>
    </div>
    {page === 1 && clicked && <>
        <WorkDetail work={work}/>
    </>}
    </div>
  );
};
