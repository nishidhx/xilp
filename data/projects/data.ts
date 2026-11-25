import { OSSContainerProps } from "@/components/oss/showcase-section";

export const projects = [
  {
    id: 32,
    title: "XIM",
    description:
      "Edge-first video analytics for remote forests and border areas. Analyzes CCTV, ESP32-CAM, and webcam feeds locally, records risk-scored events offline, and syncs them to a central server when connectivity returns.",
    date: "2026-11",
    image: "https://raw.githubusercontent.com/nishidhx/xilp/refs/heads/master/public/images/xim.png",
    github: "https://github.com/nishidhx",
    demo: "",
    building: true,
  },
  {
    id: 31,
    title: "SAFE_HER",
    description:
      "AI-powered safety app for women with AI risk scoring, SOS, heatmaps, community reporting, and real-time protection.",
    date: "2025-09",
    image: "https://raw.githubusercontent.com/nishidhx/xilp/refs/heads/master/public/images/safe_her.jpg",
    github: "https://github.com/nishidhx/HackIndia_safe_her",
    demo: "",
    building: false,
  },
  {
    id: 30,
    title: "Navium",
    description:
      "A modern social platform where Ships represent connections, Voyages represent conversations, and Harbors represent communities.",
    date: "2026-07",
    image: "https://raw.githubusercontent.com/nishidhx/xilp/refs/heads/master/public/images/navium.jpg",
    github: "https://github.com/nishidhx/navium_clt",
    demo: "",
    building: true,
  },
  {
    id: 29,
    title: "Aurenith EMS",
    description:
      "Desktop employee monitoring system built with Electron, Next.js, and Node.js featuring screenshots, productivity tracking, and licensing.",
    date: "2026-03",
    image: "https://raw.githubusercontent.com/nishidhx/xilp/refs/heads/master/public/images/ems.png",
    github: "https://github.com/nishidhx",
    demo: "",
    building: true,
  },
  {
    id: 9,
    title: "Jenji",
    description:
      "Real-time YOLOv11 object detection system for space station safety using Python, Flask, OpenCV, and React.",
    date: "2025-12",
    image: "https://raw.githubusercontent.com/nishidhx/xilp/refs/heads/master/public/images/image.png",
    github: "https://github.com/nishidhx/Jenji",
    demo: "",
    building: false,
  },
  {
    id: 6,
    title: "Devrel Lab Certification",
    description:
      "Certificate verification platform for open-source contributors with secure credential verification and Next.js.",
    date: "2025-08",
    image: "https://raw.githubusercontent.com/nishidhx/xilp/refs/heads/master/public/images/labCert.png",
    github: "https://github.com/orgs/devrel-labs",
    demo: "https://devrel-labs.github.io/devrel-labs/",
    building: false,
  },
  {
    id: 2,
    title: "Nitify",
    description:
      "A second-brain note-taking application for saving tweets, videos, and web resources.",
    date: "2025-05",
    image: "https://raw.githubusercontent.com/nishidhx/xilp/refs/heads/master/public/images/Nitify.png",
    github: "https://github.com/nishidhx",
    demo: "",
    building: false,
  },
  {
    id: 3,
    title: "TypeZ",
    description:
      "Modern typing practice game featuring multiple modes to improve typing speed and accuracy.",
    date: "2025-06",
    image: "https://raw.githubusercontent.com/nishidhx/xilp/refs/heads/master/public/images/TypeZ.png",
    github: "https://github.com/nishidhx/TypeZ",
    demo: "https://type-z-liart.vercel.app/infinite-typing",
    building: false,
  },
  {
    id: 5,
    title: "GUI Terminal",
    description:
      "A graphical terminal application built with C++ and GTK allowing shell command execution.",
    date: "2024-12",
    image: "https://raw.githubusercontent.com/nishidhx/xilp/refs/heads/master/public/images/terminal.png",
    github:
      "https://github.com/nishidhx/Termianl-Clang/blob/main/main/gui_terminal.cpp",
    demo: "",
    building: false,
  },
];


export const ossContributions: OSSContainerProps[] = [
  {
    pullRequestLink: "https://github.com/numpy/numpy/pull/31626",
    IssueId: "#31625",
    domain: ["unfunc", "numpy", "Data Science"],
    organization: "NumPy",
    date: "2026-06-13",
    Issue: "Arrow ligatures incorrectly render generalized universal function signatures in documentation.",
    solution: "Disabled font ligatures for inline code elements to ensure signatures such as ()->() render correctly. Status: MERGED."
  },
  {
    pullRequestLink: "https://github.com/mozilla/limelight/pull/117",
    IssueId: "#94",
    domain: ["Frontend", "UI", "Web Development"],
    organization: "Mozilla",
    date: "2025-07-29",
    Issue: "Infobar button needed support for a link attribute.",
    solution: "Submitted an implementation adding a link attribute to the Infobar button. Status: CLOSED, NOT MERGED."
  },
  {
    pullRequestLink: "https://github.com/PolyPixels/Holes_Client/pull/43",
    IssueId: "#40",
    domain: ["JavaScript", "Game Development", "Multiplayer"],
    organization: "PolyPixels",
    date: "2025-06-26",
    Issue: "Small dirt nodes were not automatically cleared when players walked over them.",
    solution: "Implemented clearDirtAroundPlayer() in diggingFunctions.js and integrated player movement with the existing socket system for multiplayer synchronization. Status: OPEN."
  },
  {
    pullRequestLink: "https://github.com/feathericons/feathericons.com/pull/825",
    IssueId: "#824",
    domain: ["JavaScript", "Frontend", "UI"],
    organization: "Feather Icons",
    date: "2024-12-20",
    Issue: "Unnecessary caret movement occurred in the interface.",
    solution: "Submitted a fix targeting unnecessary caret movement in the interface. Detailed implementation could not be verified from the available PR description. Status: OPEN."
  },
];