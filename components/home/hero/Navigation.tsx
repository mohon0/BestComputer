"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

type NavItem = {
  label: string;
  id: number;
  path: string;
  isExternal?: boolean;
};

const normalizePath = (path: string) => {
  return path.replace(/\/+$/, "") || "/";
};

const Navigation = () => {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLUListElement>(null);

  const navItems: NavItem[] = [
    { id: 1, label: "হোমপেজ", path: "/" },
    {
      id: 2,
      label: "নোটিশ",
      isExternal: true,
      path: "https://www.it.oylkka.com/best-computer-training-center/notice",
    },
    { id: 3, label: "কোর্স সমূহ", path: "/course" },
    {
      id: 4,
      label: "আবেদন করুন",
      path: "https://www.it.oylkka.com/best-computer-training-center/application",
      isExternal: true,
    },
    {
      id: 5,
      label: "রেজাল্ট",
      path: "https://www.it.oylkka.com/best-computer-training-center/application",
      isExternal: true,
    },
    { id: 6, label: "আমাদের সম্পর্কে", path: "/about" }, // Fixed duplicate ID 5 to 6
    { id: 7, label: "যোগাযোগ", path: "/contact" }, // Fixed ID 6 to 7
  ];

  const getBackgroundStyles = () => {
    if (hoveredIndex === null || !navRef.current) return {};

    // Note: The '+1' assumes the first child is the background <div>
    const item = navRef.current.children[hoveredIndex + 1] as HTMLElement;

    if (!item) return {};

    return {
      width: `${item.offsetWidth}px`,
      left: `${item.offsetLeft}px`,
      height: `${item.offsetHeight}px`,
      transition: "all 0.3s ease-in-out",
    };
  };

  return (
    <nav
      className="relative mx-auto max-w-4xl rounded-lg p-4"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <ul ref={navRef} className="relative flex list-none space-x-1">
        {/* Animated Background Indicator */}
        <div
          className="absolute rounded bg-primary-100 shadow-lg transition-all duration-300 ease-in-out"
          style={{
            ...getBackgroundStyles(),
            opacity: hoveredIndex !== null ? 1 : 0,
          }}
        ></div>

        {navItems.map((item, index) => {
          const isActive = normalizePath(pathname) === normalizePath(item.path);

          return (
            <li
              key={item.id}
              className={`relative z-10 cursor-pointer whitespace-nowrap py-2 font-medium uppercase tracking-tighter text-white transition-colors duration-300 ease-in-out ${
                isActive ? "rounded bg-primary-100" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <Link
                href={item.path}
                target={item.isExternal ? "_blank" : undefined}
                className="inline-block p-4 py-2"
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
