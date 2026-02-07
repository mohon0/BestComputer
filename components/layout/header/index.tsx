import Link from "next/link";
import Menu from "./menu";
import Navigation from "./navigation";

export default function Header() {
  return (
    <div className="absolute top-0 z-50 w-full space-y-0 px-2 py-2 md:px-12 shadow">
      <div className="item-center flex justify-center text-xs text-gray-200 md:justify-start">
        যোগাযোগ +8801989-491248
      </div>
      <div className="flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-white md:text-3xl">
          ওয়েল্কা ট্রেনিং সেন্টার
        </Link>
        <div className="hidden items-center gap-2 md:flex">
          <Navigation />
        </div>
        <Menu />
      </div>
    </div>
  );
}
