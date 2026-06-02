import Link from "next/link";

export const Navigation = ({}) => {
  return (
    <div className="navigation w-full h-20">
      <div className="navigator flex flex-row gap-2 justify-center items-center">
        <Link href={""}>Home</Link>
        <Link href={""}>Work</Link>
        <Link href={""}>Projects</Link>
        <Link href={""}>Resume</Link>
      </div>
      <div className="theme-switcher"></div>
    </div>
  );
};
