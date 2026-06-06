import { workExperience } from "./Experience-card";

export const Skills = ({ skills }: { skills: string[] }) => {
  return (
    <div className="flex gap-1 mt-2">
      {skills.map((skill, index) => (
        <div
          className="text-sm rounded-md bg-slate-50/5 hover:bg-slate-50/10 transition-colors duration-100 border border-slate-500/10 w-fit p-1"
          key={index}
        >
          {skill}
        </div>
      ))}
    </div>
  );
};

export const WorkDetail = ({ work }: {work: workExperience}) => {
  return (
    <div className="mt-4 py-2 space-y-4 border-t border-[#909092]/20 rounded-sm shadow-md border-border pt-4 outline-ring/50">
      <div>
        <h1 className="text-sm font-bold">Technologies & Tools</h1>
        <Skills skills={work.skills} />
      </div>
      <div className="description text-[#909092] ">
        {work.description.map((desc, index) => (
          <div key={index} className="flex text-sm  gap-1 items-center">
            <div>•</div> <div key={index}>{desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
