import cn from "@/utils/clsx";

const Greendot = ({ building }: { building: boolean }) => {
  return (
    <div
      className={cn(
        "h-2 w-2 rounded-full animate-pulse",
        building ? "bg-red-300" : "bg-green-300",
      )}
    ></div>
  );
};

export const Status = ({
  className,
  building = true,
}: {
  className?: string;
  building: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-md border px-2 py-1 text-xs light:border-green-100",
        building
          ? "border-red-300/5 bg-red-500/10"
          : "border-green-300/5 bg-green-500/10",
        className,
      )}
    >
      <Greendot building={building} />
      <div>
        <p className="text-xs light:text-black">Working</p>
      </div>
    </div>
  );
};
