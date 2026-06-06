import { LoaderIcon } from "lucide-react";
import cn from "@/utils/clsx";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    ></LoaderIcon>
  );
}

export const SpinnerCustom = () => {
  return (
    <div className="flex items-center gap-4">
      <Spinner />
    </div>
  );
};
