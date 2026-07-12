import cn from "@/utils/clsx";

const Greendot = () => {
  return (
    <div className="h-2 w-2 rounded-full animate-pulse bg-green-300"></div>
  )
}


export const Status = ({
  className,
}: {
  className?: string;
}) => {
  return <div className={cn("flex items-center gap-1 rounded-md border border-green-300/5 bg-green-500/10 px-2 py-1 text-xs light:border-green-100", className)}>
    <Greendot />
    <div>
      <p className="text-xs light:text-black">Working</p>
    </div>
  </div>;
};
