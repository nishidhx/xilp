import Image from "next/image";

export const Hero = () => {
  return (
    <div className="pt-10 mx-5 md:mx-0 w-full md:w-5xl">
      <div className="relative w-fit">
        <Image
          className="rounded-full border-2 border-slate-100/10 size-24 hover:-translate-y-2 transition-transform duration-300"
          src="/nishidh.png"
          alt="nishidh"
          width={100}
          height={100}
        />

        {/* Ground Shadow */}
        <div
          className="
            absolute
            top-full
            left-1/2
            -translate-x-1/2
            mt-2
            w-20
            h-2
            bg-white/30
            blur-md
            rounded-full
          "
        />
      </div>
    </div>
  );
};
