import clsx from "clsx";
import { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...inputValues: ClassValue[]) {
    return twMerge(clsx(inputValues))
}