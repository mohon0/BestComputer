"use client";
import img from "@/assets/green.jpg";
import Link from "next/link";
import { useEffect, useState } from "react";
import Menu from "./menu";
import Navigation from "./navigation";

export default function StickyHeader() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Logic: Visible if scrolled down > 250px AND scrolling UP
      const isVisible =
        currentScrollPos > 250 && prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transform border-b-2 border-dashed border-white/20 px-2 py-3 shadow-custom transition-all duration-500 ease-in-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundRepeat: "repeat",
      }}
    >
      <div className=" px-2 md:px-20 w-full">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-love-ya text-xl font-bold text-white md:text-3xl"
          >
            ওয়েল্কা ট্রেনিং সেন্টার
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            <Navigation />
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
}
