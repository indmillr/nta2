"use client";

import React from "react";

// NAV Data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiQuestionMarkCircle /> },
  { name: "schedule", path: "/schedule", icon: <HiCalendar /> },
  {
    name: "forms",
    path: "/forms",
    icon: <HiCube />,
  },
  {
    name: "news",
    path: "/news",
    icon: <HiNewspaper />,
  },
  {
    name: "gallery",
    path: "/gallery",
    icon: <HiPhoto />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

// LINK
import Link from "next/link";

// Router
import { useRouter } from "next/navigation";

// ICONS
import {
  HiHome,
  HiCube,
  HiEnvelope,
  HiCalendar,
  HiQuestionMarkCircle,
  HiNewspaper,
  HiPhoto,
} from "react-icons/hi2";

export default function Header() {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="flex shadow-lg translate-all duration-1000 shadow-gray-500 justify-center max-w-6xl sm:mx-auto items-center pb-3 pt-0 my-0">
      <div className="flex cursor-pointer space-x-6 md:space-x-8 lg:space-x-10 text-3xl md:text-2xl lg:text-3xl">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-blue-600"
              } flex relative items-center group hover:text-blue-600 dark:hover:text-red-600 translate-all duration-500 hover:scale-125 focus:scale-125  focus:text-red-600 dark:focus:text-blue-600`}
              href={link.path}
              key={index}
            >
              {/* icon */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
