"use client"
import { useEffect } from "react"
import { Search } from "@/icons/search-icon"

export const SearchBox = ({ onClose }: { onClose: () => void }) => {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }
        document.addEventListener("keydown", onKey)
        return () => document.removeEventListener("keydown", onKey)
    }, [onClose])

    return (
        <div className="fixed inset-0 z-50 mt-[50%] flex justify-center min-h-20 mx-4 md:mx-0 px-4" onClick={onClose}>
            <div className="w-full max-w-2xl rounded-2xl border border-slate-500/10 bg-[#100f0f]/80 p-4" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-2 rounded-xl border light:border-slate-200 light:bg-slate-50 px-3 py-2 border-slate-700 bg-[#100f0f]">
                    <Search className="size-4 text-slate-500" />
                    <input type="text" placeholder="Search blog posts" className="w-full bg-transparent text-sm outline-none" autoFocus />
                </div>
            </div>
        </div>
    )
}