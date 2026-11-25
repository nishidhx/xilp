import NextLink from "next/link";
import { ArrowRightIcon, Calendar, } from "lucide-react";
import { Badge } from "../[ui]/badge";
import Link from "next/link";


export interface OSSContainerProps {
    pullRequestLink: string;
    IssueId: string;
    domain: string[];
    organization: string;
    date: string,
    Issue: string;
    solution: string;
}

export const OSSContainer = ({
    contribution,
    animationDelay,
}: {
    contribution: OSSContainerProps,
    animationDelay: string
}) => {
    return <div className="group flex flex-row w-full h-fit my-2 justify-between">
    <NextLink href={contribution.pullRequestLink}>
            <div
            className="animate-in-up my-2 overflow-hidden"
            style={{ animationDelay: animationDelay }}
            >
            <article>
                <h1 className="text-lg light:text-black font-semibold">{contribution.Issue}</h1>
                <div className="text-sm text-secondary">
                <p>{contribution.solution}</p>
                </div>
            </article>
            <div className="flex flex-row gap-2 justify-start my-2">
                {contribution.domain.map((dom, index) => (
                <Badge
                    key={index}
                    className="secondary light:text-black light:border-slate-200 rounded-lg"
                    variant="secondary"
                >
                    {dom}
                </Badge>
                ))}
            </div>
            <div className="text-xs flex text-secondary gap-1 ml-1">
                <Calendar className="size-4 text-secondary" />
                <p>{contribution.date}</p>
            </div>
            </div>
        </NextLink>
        <div className="flex w-10 text-secondary hover:underline opacity-0 group-hover:opacity-100 justify-center items-center transition-opacity duration-300">
        <Link href={contribution.pullRequestLink}></Link>
        <ArrowRightIcon className="size-4" />
      </div>
    </div>
}