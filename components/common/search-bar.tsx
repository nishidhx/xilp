import { Search } from "@/icons/search-icon"


export const SerachBar = () => {
    return (
        <div className="search-bar flex gap-2">
          <div className="md:w-30 md:border flex justify-around items-center px-2 md:border-slate-50/10 shadow-[0px_0.2px_1px_-2px] rounded-3xl md:bg-slate-50/5 h-10">
            <Search className="size-5 md:size-4 font-bold" />
            <div className="group gap-1 px-2 hidden md:flex">
              <kbd className="bg-slate-100/10 px-1 rounded-md group-hover:bg-slate-100/15 transition-color duration-300">Ctrl</kbd>
              <kbd className="bg-slate-100/10 px-1 rounded-md group-hover:bg-slate-100/15 transition-color duration-300">K</kbd>
            </div>
          </div>
        </div>
    )
}