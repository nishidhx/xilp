import cn from "@/utils/clsx";
import React from "react";

export const Container = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn("animate-fade-in-blur container mx-auto max-w-2xl px-4", className)} {...props}>
    {children}

  </div>;
};
