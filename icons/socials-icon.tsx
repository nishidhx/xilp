import { SiLeetcode } from "react-icons/si";
import { PiGithubLogoDuotone } from "react-icons/pi";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { AiOutlineLinkedin, AiTwotoneMail } from "react-icons/ai";
import React from "react";

export interface SocialIcon {
  title: string;
  icon: React.ReactElement;
  link: string;
}

export const icons: SocialIcon[] = [
  {
    title: "GitHub",
    icon: <PiGithubLogoDuotone className="size-5" />,
    link: "https://github.com/nishidhx",
  },
  {
    title: "X",
    icon: <FaXTwitter className="size-5" />,
    link: "https://x.com/xnishidh",
  },
  {
    title: "Medium",
    icon: <FaMedium className="size-5" />,
    link: "https://medium.com/@xnishidh.codes",
  },
  {
    title: "LinkedIn",
    icon: <AiOutlineLinkedin className="size-5" />,
    link: "https://www.linkedin.com/in/nishidh0singh04/?skipRedirect=true",
  },
  {
    title: "Email",
    icon: <AiTwotoneMail className="size-5" />,
    link: "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRnXVQcfvVRFBHJhrPlvSDXKhCqKZXXKNMjqDSWNQksWZPfSDFTqMxgCjZlpNTSZCxhHXSb",
  },
  {
    title: "LeetCode",
    icon: <SiLeetcode className="size-5" />,
    link: "https://leetcode.com/u/xnishidh-codes/",
  },
];

export {
  SiLeetcode,
  PiGithubLogoDuotone,
  FaXTwitter,
  AiOutlineLinkedin,
  AiTwotoneMail,
  FaMedium,
};
