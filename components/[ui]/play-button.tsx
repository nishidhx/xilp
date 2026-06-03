import { Play } from "@/icons/play-icon";
import cn from "@/utils/clsx";
import { useRef, useState } from "react";

export const PlayButton = ({
  className,
  iconSize,
  onClick,
  mute = false,
}: {
  className?: string;
  iconSize?: string;
  onClick?: () => void;
  mute: boolean;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn("flex items-center justify-center gap-2", className)}
    >
      <Play className={cn(`size-${iconSize}`)} />
      <p>{mute ? "Stop" : "Play music."}</p>
    </div>
  );
};
