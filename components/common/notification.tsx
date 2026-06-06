"use client"
import cn from "@/utils/clsx";
import { useEffect, useState } from "react";

export const Notification = ({
  className,
  title,
  description,
  icon,
  visible = false
}: {
  className?: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  visible: Boolean
}) => {
    const [isVisible, setisVisible] = useState(visible);

    useEffect(() => {

        if (visible) {
            const hideNotification = setTimeout(() => {
                setisVisible(false)
            }, 3000)
            
            return () => clearTimeout(hideNotification)
        }

    }, [isVisible])

  return (
   <div
  className={cn(
    "fixed top-4 right-4 sm:flex",
    "h-10 w-fit px-5 rounded-md border border-[#909092]/10 bg-slate-500/5",
    "transition-transform duration-300 ease-out",
    isVisible
      ? "translate-x-0 opacity-100 animate-slideIn"
      : "translate-x-24 opacity-0 pointer-events-none animate-slideOut"
  )}
>
      <div className={cn("flex gap-2 items-center justify-center h-full", className)}>
        {icon ? <div>{icon}</div> : undefined}
        <h1 className="text-md">{title}</h1>
        {description ? (
          <div>
            <span>:</span>
            <p className="text-secondary">Hello this side nishidh</p>
          </div>
        ) : undefined}
      </div>
    </div>
  );
};
