import Link from "next/link";
import type { JSX } from "react";
import {
  FaDribbble,
  FaFacebookSquare,
  FaPinterestSquare,
  FaRss,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";

// --- Newsletter Strip ---
function NewsletterStrip() {
  return (
    <div className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                নিউজলেটার
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
              আপডেট থাকুন{" "}
              <span className="italic font-light text-muted-foreground">
                সবসময়
              </span>
              <span className="text-primary">.</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              আমাদের নিউজলেটার সাবস্ক্রাইব করুন এবং নতুন কোর্স ও অফার সম্পর্কে সবার আগে জানুন।
            </p>
          </div>

          {/* Right: form */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="আপনার ইমেইল লিখুন"
              className="flex-1 h-11 rounded-xl border border-border bg-background px-4 text-sm
                focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50
                transition-colors duration-200"
            />
            <button
              type="submit"
              className="h-11 px-6 gap-2 whitespace-nowrap self-start
                inline-flex items-center justify-center
                rounded-xl bg-primary text-primary-foreground text-sm font-semibold
                hover:bg-primary/90 transition-colors duration-200"
            >
              সাবস্ক্রাইব
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Main Footer ---
export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear();

  const socials = [
    {
      icon: <FaFacebookSquare className="w-4 h-4" />,
      label: "Facebook",
      href: "#",
    },
    { icon: <FaDribbble className="w-4 h-4" />, label: "Dribbble", href: "#" },
    {
      icon: <FaPinterestSquare className="w-4 h-4" />,
      label: "Pinterest",
      href: "#",
    },
    { icon: <FaRss className="w-4 h-4" />, label: "RSS", href: "#" },
  ];

  const companyLinks = [
    { label: "আমাদের সম্পর্কে", href: "/about" },
    { label: "কোর্সসমূহ", href: "/courses" },
    { label: "প্রশিক্ষক দল", href: "/team" },
    { label: "গ্যালারি", href: "/gallery" },
    { label: "ব্লগ", href: "/blog" },
  ];

  const supportLinks = [
    { label: "যোগাযোগ করুন", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "ভর্তি প্রক্রিয়া", href: "/admission" },
    { label: "সার্টিফিকেট যাচাই", href: "/verify" },
  ];

  const policyLinks = [
    { label: "গোপনীয়তা নীতি", href: "/privacy" },
    { label: "ব্যবহারের শর্ত", href: "/terms" },
    { label: "রিফান্ড নীতি", href: "/refund" },
  ];

  return (
    <footer className="w-full">
      <NewsletterStrip />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Brand column — col-span-2 */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shrink-0">
                {/* Replace with your actual logo icon */}
                {/** biome-ignore lint/a11y/noSvgWithoutTitle: this is fine */}
                <svg
                  className="w-5 h-5 text-primary-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l6.16-3.422A12.083 12.083 0 0121 13.5c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5a12.08 12.08 0 012.84-2.922L12 14z"
                  />
                </svg>
              </div>
              <span className="font-bold text-lg tracking-tight">
                ওয়েল্কা ট্রেনিং সেন্টার
              </span>
            </div>

            {/* Tagline */}
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              আপনার ক্যারিয়ারের সেরা সঙ্গী। দক্ষ প্রশিক্ষকদের তত্ত্বাবধানে হাতে-কলমে প্রশিক্ষণের
              মাধ্যমে আপনার স্বপ্নের ক্যারিয়ার গড়ুন।
            </p>

            {/* Contact list */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <FaLocationDot className="w-3.5 h-3.5 text-primary shrink-0" />
                রফি টাওয়ার (৫ম তলা), পায়রা চত্ত্বর, ঝিনাইদহ
              </div>
              <a
                href="tel:01989491248"
                className="flex items-center gap-2.5 text-sm text-muted-foreground
                  hover:text-primary transition-colors duration-200 group"
              >
                <MdCall className="w-3.5 h-3.5 text-primary shrink-0" />
                01989491248 / 01799-574570
              </a>
              <a
                href="mailto:contact@oylkka.com"
                className="flex items-center gap-2.5 text-sm text-muted-foreground
                  hover:text-primary transition-colors duration-200 group"
              >
                <MdEmail className="w-3.5 h-3.5 text-primary shrink-0" />
                contact@oylkka.com
              </a>
            </div>

            {/* Social icon row */}
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl border border-border flex items-center justify-center
                    text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5
                    transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav column: Company */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-px w-5 bg-primary" />
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary">
                প্রতিষ্ঠান
              </span>
            </div>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav column: Support */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-px w-5 bg-primary" />
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary">
                সাপোর্ট
              </span>
            </div>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav column: Legal */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-px w-5 bg-primary" />
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary">
                নীতিমালা
              </span>
            </div>
            <ul className="space-y-3">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              কপিরাইট © 2014 - {currentYear} সর্বসত্ত্ব সংরক্ষিত |{" "}
              <span className="font-semibold text-foreground">
                ওয়েল্কা ট্রেনিং সেন্টার
              </span>
            </p>

            {/* Trust badges */}
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="w-1 h-1 rounded-full bg-primary/50" />
              <span>নিরাপদ পেমেন্ট</span>
              <span className="w-1 h-1 rounded-full bg-primary/50 ml-1" />
              <span>যাচাইকৃত কোর্স</span>
              <span className="w-1 h-1 rounded-full bg-primary/50 ml-1" />
              <span>অভিজ্ঞ প্রশিক্ষক</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
