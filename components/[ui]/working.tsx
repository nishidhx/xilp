
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
  return <div className="flex items-center gap-1 rounded-md border border-green-300 bg-green-500/10 px-2 py-1 text-xs dark:border-green-600">
    <Greendot/>
    <div>
        <p className="text-xs">Working</p>
    </div>
  </div>;
};
