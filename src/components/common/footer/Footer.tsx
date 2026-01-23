import React, { ReactNode } from "react";
import {
  FaDribbble,
  FaFacebookSquare,
  FaPinterestSquare,
  FaRss,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";
import Map from "./Map";

// --- Types ---
interface SocialLinkProps {
  icon: ReactNode;
  label: string;
  href?: string;
}

interface ContactItemProps {
  icon: ReactNode;
  title: string;
  details: string[];
}




const ContactItem: React.FC<ContactItemProps> = ({ icon, title, details }) => (
  <div className="flex items-start gap-4 group">
    <div className="flex-shrink-0 rounded-full bg-white/10 p-3 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
      {icon}
    </div>
    <div>
      <p className="font-bold text-white mb-2">{title}</p>
      <div className="space-y-1 text-sm text-white/80">
        {details.map((line, index) => (
          <p key={index} className="hover:text-white transition-colors">{line}</p>
        ))}
      </div>
    </div>
  </div>
);

// --- Main Footer Component ---

export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear();

  const socials: SocialLinkProps[] = [
    { icon: <FaFacebookSquare />, label: "Facebook" },
    { icon: <FaDribbble />, label: "Dribbble" },
    { icon: <FaPinterestSquare />, label: "Pinterest" },
    { icon: <FaRss />, label: "RSS" },
  ];

  return (
    <footer className="relative w-full">
      {/* Map Section */}
      <Map />

      {/* Footer Content Area */}
      <div
        className="relative bg-cover bg-center text-white"
        style={{
          backgroundImage: 'url(/green.jpg)',
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="bg-gradient-to-b from-black/80 via-black/85 to-black/95 backdrop-blur-[2px]">
          
          <div className="mx-auto max-w-6xl px-4 py-16">
            
            {/* Branding Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-white mb-4">
                ওয়েল্কা ট্রেনিং সেন্টার
              </h2>
              <div className="flex justify-center mb-4">
                <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></div>
              </div>
              <p className="text-lg text-white/90 font-medium">
                আপনার ক্যারিয়ারের সেরা সঙ্গী
              </p>
            </div>

            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <ContactItem
                icon={<FaLocationDot className="text-2xl text-purple-400" />}
                title="ঠিকানা"
                details={["রফি টাওয়ার (৫ম তলা)", "পায়রা চত্ত্বর, ঝিনাইদহ"]}
              />
              <ContactItem
                icon={<MdCall className="text-2xl text-cyan-400" />}
                title="মোবাইল"
                details={["01989491248", "01799-574570"]}
              />
              <ContactItem
                icon={<MdEmail className="text-2xl text-purple-400" />}
                title="ই-মেইল"
                details={["contact@oylkka.com", "freelancermohon01@gmail.com"]}
              />
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-5 pb-8">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href || "#"}
                  aria-label={social.label}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-2xl transition-all duration-300 hover:bg-white hover:text-purple-700 hover:-translate-y-1 hover:shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-white/10 bg-black/40 py-6 text-center">
            <div className="mx-auto max-w-6xl px-4">
              <p className="text-sm md:text-base text-white/60">
                কপিরাইট © 2014 - {currentYear} সর্বসত্ত্ব সংরক্ষিত |{" "}
                <span className="text-white font-semibold">ওয়েল্কা ট্রেনিং সেন্টার</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}