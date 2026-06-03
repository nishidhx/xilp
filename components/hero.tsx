"use client";
import { Clip } from "@/icons/copy-icon";
import { Tick } from "@/icons/tick-icon";
import Image from "next/image";
import { useState } from "react";
import { Notification } from "./notification";

export const Hero = () => {
  const [clicked, setClicked] = useState(false);

  const handleClipBoard = () => {
    navigator.clipboard.writeText("xnishidh@gmail.com");
    setTimeout(() => {
      setClicked(false)
    }, 4000)
  };

  return (
    <div className="mx-auto w-full pt-16 md:max-w-3xl">
      <section className="flex">
        <div className="relative w-fit">
          {/* nishidhx profile image */}
          <Image
            className="rounded-full border-2 border-slate-100/10 size-24 hover:-translate-y-2 transition-transform duration-300"
            src="/nishidh.png"
            alt="nishidh"
            loading="eager"
            width={100}
            height={100}
          />
          {/* Ground Shadow for the nishidhx profile picture */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-20 h-1 bg-white/30 blur-md rounded-full" />
        </div>

        <div className="flex col items-center pl-10">
          <div>
            <h1 className="text-lg sm:text-2xl font-semibold">
              <span>
                Nishidh Singh{" "}
                <span className="text-secondary">( xnishidh )</span>
              </span>
            </h1>
            <div className="text-secondary pt-2 flex items-center gap-1">
              <div>
                <span>
                  Engineer <span>&#128900;</span>
                </span>
              </div>
              <div>
                <span>
                  Tensors <span>&#128900;</span>
                </span>
              </div>
              <div
                className="group cursor-pointer"
                onClick={() => {
                  handleClipBoard()
                  setClicked(true)
                }}
              >
                <span className="flex items-center gap-1 group-hover:text-slate-200 duration-100 transition-colors">
                  xnishidh@gmail.com
                  <div>
                    {!clicked ? (
                      <Clip className="size-4 rotate-y-180 group-hover:text-slate-200 transition-colors duration-100" />
                    ) : (
                      <Tick className="size-4 text-green-500 transition-colors duration-100" />
                    )}
                    {
                      clicked ? <Notification title="copied" visible={true} icon= {<Tick className="text-green-400"/>}/>: undefined
                    }
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
