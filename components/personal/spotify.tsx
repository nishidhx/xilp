import { Music } from "@/icons/music-icon";
import Image from "next/image";
import { useRef, useState } from "react";
import { PlayButton } from "../[ui]/play-button";

export const Spotify = () => {
  const [isHovered, setisHovered] = useState(false);
  const [mute, setMute] = useState(false);
  const musicRef = useRef<HTMLAudioElement>(null);
  const playMusic = async () => {
    if (!musicRef.current) return;

    if (musicRef.current.paused) {
      await musicRef.current.play();
      musicRef.current.muted = false;
      setMute(false);
    } else {
      musicRef.current.pause();
      setMute(true);
    }
  };

  return (
    <button
      onClick={playMusic}
      onMouseOver={() => setisHovered(true)}
      onMouseOut={() => setisHovered(false)}
      className="w-36.25 gap-2 sm:mt-0 border border-slate-500/10 py-1 cursor-pointer rounded-md bg-slate-50/5 hover:bg-slate-50/10 transition-colors duration-100 flex items-center px-1"
    >
      <Image
        src={"/icons/music.png"}
        height={100}
        width={100}
        alt=""
        className="size-4"
      />
      {isHovered ? (
        <PlayButton className="text-xs" iconSize="4" mute={!mute} />
      ) : (
        <p className="text-xs text-secondary">Ganga Ke Kinaare</p>
      )}
      <audio src="/audio/GKK.mp3" itemType="" muted ref={musicRef}></audio>
    </button>
  );
};
