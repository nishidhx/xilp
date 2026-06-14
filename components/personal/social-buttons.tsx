import { icons } from "@/icons/socials-icon"
import { Tooltip, TooltipContent, TooltipTrigger } from "../[ui]/tooltip"
import Link from "next/link"
import cn from "@/utils/clsx"


export const Socials = ({
  className
}: {
  className?: string
}) => {
    return (
        <div className={cn("flex flex-row justify-center sm:justify-stretch gap-2 text-[#909092]/50 mt-4 sm:mt-2", className)}>
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