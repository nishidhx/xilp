import { icons } from "@/icons/socials-icon"
import { Tooltip, TooltipContent, TooltipTrigger } from "../[ui]/tooltip"
import Link from "next/link"


export const Socials = () => {
    return (
        <div className="flex flex-row justify-center sm:justify-stretch gap-2 text-[#909092]/50 mt-4 sm:mt-2">
            {icons?.map((icon, idx) => (
                <Tooltip key={idx}>
          <TooltipTrigger asChild>
            <Link href={icon.link} target="blank">
            <button>
          <div key={idx}>{icon.icon}</div>
              
            </button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{icon.title}</p>
          </TooltipContent>
        </Tooltip>
            ))}
        </div>
    )
}