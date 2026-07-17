"use client"
import { Search } from "@/icons/search-icon"
import { SearchBox } from "../search/searchBox"
import { useState } from "react"

export const SerachBar = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <button
        type="button"
        aria-label="Open search"
        className="search-bar flex gap-2 md:w-30 md:border justify-around items-center px-2 md:border-slate-50/10 md:light:border-slate-200 shadow-[0px_0.2px_1px_-2px] rounded-3xl md:bg-slate-50/5 h-10"
        onClick={() => setOpen(true)}
      >
        <Search className="size-5 md:size-4 font-bold light:text-[#b5b5b5]" />
        <div className="group gap-1 px-2 hidden md:flex light:text-[#b5b5b5]">
          <kbd className="bg-slate-100/10 px-1 light:bg-[#bebebf68]/40 rounded-md group-hover:bg-slate-100/15 group-hover:light:bg-slate-100 transition-color duration-300">Ctrl</kbd>
          <kbd className="bg-slate-100/10 px-1 rounded-md light:bg-[#bebebf68]/40 group-hover:bg-slate-100/15 group-hover:light:bg-slate-100 transition-color duration-300">K</kbd>
        </div>
      </button>

      {open && <SearchBox onClose={() => setOpen(false)} />}
    </>
  )
}