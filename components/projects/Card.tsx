import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Status } from "../[ui]/status";

export const ProjectCard = ({
  title,
  descripiton,
  date,
  image,
  github,
  building,
}: {
  title: string;
  descripiton: string;
  date: string;
  github: string;
  image: string;
  building: boolean
}) => {
  return (
    <div className="card-container w-full h-auto flex flex-col border p-5 border-slate-50/5 bg-slate-50/2 light:bg-white rounded-lg">
      <div className="w-full rounded-lg overflow-hidden">
        <Image
          src={image}
          alt="banner"
          width={100}
          height={100}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="mt-2 flex flex-col flex-1">
        <h1 className="text-xl font-bold flex flex-row gap-1 light:text-black">
          {title} <Status building={building ?? false} />
        </h1>

        <p className="text-secondary text-sm">{descripiton}</p>

        <div className=" flex justify-between mt-10">
          <div className="flex flex-row gap-1">
            <Calendar className="size-4 text-secondary" />
            <p className="text-xs text-secondary">{date}</p>
          </div>
          <div className="flex flex-row gap-1 text-xs text-secondary">
            <div>
              <Link href={github ?? "https://www.github.com/nishidhx"}>Github</Link>
            </div>
            <div>
              <Link href={""}>Demo</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
