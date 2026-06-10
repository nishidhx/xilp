"use client";
import { Clip } from "@/icons/copy-icon";
import { Tick } from "@/icons/tick-icon";
import Image from "next/image";
import { useState } from "react";
import { Notification } from "./notification";
import { Spotify } from "../personal/spotify";
import { Tooltip, TooltipContent, TooltipTrigger } from "../[ui]/tooltip";
import { Play } from "@/icons/play-icon";
import { Socials } from "../personal/social-buttons";
import { Container } from "./container";


export const Hero = () => {
  const [clicked, setClicked] = useState(false);

  const handleClipBoard = () => {
    navigator.clipboard.writeText("xnishidh@gmail.com");
    setTimeout(() => {
      setClicked(false);
    }, 4000);
  };

  return (
    <Container className="mx-auto  w-full pt-10 md:max-w-2xl px-4 animate-in-up">
      <section className="flex flex-col sm:flex-row items-center sm:items-stretch gap-6 ">
        <div className="relative shrink-0">
          <Image
            className="rounded-full border-2 border-slate-100/10 size-25 hover:-translate-y-2 transition-transform duration-300"
            src="/nishidh.png"
            alt="nishidh"
            loading="eager"
            width={100}
            height={100}
          />

          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-20 h-1 bg-white/30 blur-md rounded-full" />
        </div>

        <div className="text-center flex flex-col justify-center  sm:text-left">
          <h1 className="text-xl sm:text-2xl font-semibold">
            Nishidh Singh <span className="text-secondary">( xnishidh )</span>
          </h1>

          <div className="mt-2 flex flex-wrap justify-center sm:justify-start items-center gap-2 text-secondary">
            <span>Engineer</span>
            <span>•</span>
            <span>Tensors</span>
            <span>•</span>

            <div
              className="group cursor-pointer"
              onClick={() => {
                handleClipBoard();
                setClicked(true);
              }}
            >
              <button className="flex items-center gap-1 break-all group-hover:text-slate-200 transition-colors duration-100">
                xnishidh@gmail.com
                {!clicked ? (
                  <Clip className="size-4 rotate-y-180" />
                ) : (
                  <Tick className="size-4 text-green-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-2 sm:mt-3 flex flex-row items-center justify-center sm:justify-start gap-3">
        <p className="text-secondary">I like building cool stuffs</p>

        <Tooltip>
          <TooltipTrigger asChild>
            <button>
              <Spotify />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>click to play music</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div>
        <Socials />
      </div>

      <div className="absolute">
        {clicked && (
          <Notification
            title="Copied"
            visible
            icon={<Tick className="text-green-400" />}
          />
        )}
      </div>
    </Container>
  );
};
