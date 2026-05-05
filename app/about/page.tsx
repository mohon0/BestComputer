import type { Metadata } from "next";
import Link from "next/link";
import {
  FaAward,
  FaChartLine,
  FaFileWord,
  FaLaptop,
  FaPalette,
  FaUsers,
} from "react-icons/fa";
import MainHeader from "@/components/layout/header/main-header";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে - ওয়েল্কা ট্রেনিং সেন্টার | আপনার ক্যারিয়ার গড়ার বিশ্বস্ত প্রতিষ্ঠান",
  description:
    "ওয়েল্কা ট্রেনিং সেন্টার বাংলাদেশের শীর্ষস্থানীয় আইটি প্রশিক্ষণ কেন্দ্র। আমাদের লক্ষ্য আধুনিক প্রযুক্তি এবং ডিজিটাল দক্ষতা প্রদান করে শিক্ষার্থীদের ক্যারিয়ার গড়তে সহায়তা করা।",
  keywords: [
    "ওয়েল্কা ট্রেনিং সেন্টার সম্পর্কে",
    "আমাদের আইটি প্রতিষ্ঠান",
    "ওয়েল্কা মিশন ভিশন",
    "সেরা আইটি ট্রেনিং",
    "About Oylkka IT Training Center",
    "IT training in Bangladesh",
  ],
};

// --- Data ---

const stats = [
  { icon: FaUsers, value: "৫০০+", label: "সফল শিক্ষার্থী" },
  { icon: FaAward, value: "১০+", label: "কোর্স উপলব্ধ" },
  { icon: FaChartLine, value: "৯০%", label: "চাকরি হার" },
  { icon: FaLaptop, value: "১০+", label: "বছরের অভিজ্ঞতা" },
];

const courses = [
  {
    icon: FaLaptop,
    title: "ওয়েব ডেভেলপমেন্ট",
    description:
      "HTML, CSS, JavaScript এবং আধুনিক ফ্রেমওয়ার্ক শিখুন। প্রকল্প-ভিত্তিক শিক্ষা পদ্ধতি।",
    tag: "ডেভেলপমেন্ট",
    index: "০১",
  },
  {
    icon: FaPalette,
    title: "গ্রাফিক্স ডিজাইন",
    description:
      "Adobe Creative Suite এবং ডিজাইন নীতিমালা শিখুন। পোর্টফোলিও তৈরির সুযোগ।",
    tag: "ডিজাইন",
    index: "০২",
  },
  {
    icon: FaFileWord,
    title: "অফিস অ্যাপ্লিকেশন",
    description:
      "MS Word, Excel, PowerPoint এবং আরও অনেক কিছু। ব্যবসায়িক দক্ষতা বৃদ্ধি করুন।",
    tag: "প্রোডাক্টিভিটি",
    index: "০৩",
  },
  {
    icon: FaChartLine,
    title: "ডিজিটাল মার্কেটিং",
    description:
      "SEO, সোশ্যাল মিডিয়া এবং কন্টেন্ট মার্কেটিং শিখুন। ব্র্যান্ড তৈরিতে দক্ষ হন।",
    tag: "মার্কেটিং",
    index: "০৪",
  },
  {
    icon: FaLaptop,
    title: "ডাটাবেস ম্যানেজমেন্ট",
    description: "SQL এবং ডাটাবেস ডিজাইন শিখুন। ডেটা ম্যানেজমেন্টে বিশেষজ্ঞ হন।",
    tag: "ডেটা",
    index: "০৫",
  },
  {
    icon: FaLaptop,
    title: "মোবাইল অ্যাপ ডেভেলপমেন্ট",
    description: "iOS এবং Android অ্যাপ তৈরি শিখুন। বাজারে নিজের অ্যাপ লঞ্চ করুন।",
    tag: "মোবাইল",
    index: "০৬",
  },
];

const reasons = [
  {
    title: "অভিজ্ঞ প্রশিক্ষক",
    description:
      "আমাদের প্রশিক্ষকরা ইন্ডাস্ট্রির অভিজ্ঞ পেশাদার যারা বাস্তব অভিজ্ঞতা শেয়ার করেন।",
  },
  {
    title: "আধুনিক পাঠ্যক্রম",
    description: "আমরা সর্বদা সর্বশেষ প্রযুক্তি এবং ট্রেন্ড অনুযায়ী আমাদের কোর্স আপডেট করি।",
  },
  {
    title: "ব্যবহারিক প্রশিক্ষণ",
    description: "প্রতিটি কোর্সে রিয়েল-ওয়ার্ল্ড প্রজেক্ট এবং হ্যান্ডস-অন অভিজ্ঞতা পাবেন।",
  },
  {
    title: "চাকরির সহায়তা",
    description: "কোর্স শেষে আমরা আপনাকে চাকরির সুযোগ এবং ক্যারিয়ার গাইডেন্স প্রদান করি।",
  },
  {
    title: "সার্টিফিকেশন",
    description: "কোর্স সম্পন্ন করে আপনি পাবেন আন্তর্জাতিকভাবে স্বীকৃত সার্টিফিকেট।",
  },
  {
    title: "সাশ্রয়ী মূল্য",
    description: "আমরা সকলের জন্য সাশ্রয়ী মূল্যে মানসম্পন্ন প্রশিক্ষণ প্রদান করি।",
  },
];

// --- Page ---

export default function AboutPage() {
  return (
    <>
      <MainHeader />

      <main>
        {/* ── Hero Section ───────────────────────────────────────── */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden border-b border-border">
          {/* Background tint */}
          <div className="absolute inset-0 z-0 bg-primary/5" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-primary" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                আমাদের সম্পর্কে
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight max-w-3xl">
              ওয়েল্কা{" "}
              <span className="italic font-bold text-primary">ট্রেনিং</span>{" "}
              সেন্টার<span className="text-primary">.</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              আমরা বাংলাদেশের শীর্ষস্থানীয় আইটি প্রশিক্ষণ কেন্দ্র যেখানে আপনার দক্ষতা উন্নয়ন
              এবং ক্যারিয়ার গঠনের জন্য সর্বোত্তম শিক্ষা প্রদান করি।
            </p>

            <div className="flex flex-row gap-3 mt-8">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center h-12 px-8
                  rounded-xl bg-primary text-primary-foreground text-sm font-semibold
                  hover:bg-primary/90 transition-colors duration-200"
              >
                কোর্স দেখুন
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-8
                  rounded-xl border border-border text-sm font-semibold
                  hover:bg-primary/5 hover:border-primary/30 transition-colors duration-200"
              >
                যোগাযোগ করুন
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats Strip ────────────────────────────────────────── */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="py-10 px-6 flex flex-col items-center justify-center gap-2"
                >
                  <p className="text-4xl md:text-5xl font-bold text-primary tabular-nums">
                    {stat.value}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <stat.icon className="w-3.5 h-3.5 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground tracking-wide uppercase font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About Section ──────────────────────────────────────── */}
        <section className="border-b border-border py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-10 bg-primary" />
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                    আমাদের গল্প
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                  দক্ষতা অর্জনের{" "}
                  <span className="italic font-bold text-primary">বিশ্বস্ত</span>{" "}
                  সঙ্গী<span className="text-primary">.</span>
                </h2>
                <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                  ওয়েল্কা ট্রেনিং সেন্টার প্রতিষ্ঠিত হয়েছে শিক্ষার্থীদের আধুনিক প্রযুক্তি এবং
                  ডিজিটাল দক্ষতা প্রদান করার লক্ষ্যে। আমরা বিশ্বাস করি যে প্রতিটি শিক্ষার্থীর
                  সফলতার সম্ভাবনা রয়েছে এবং সঠিক নির্দেশনা ও প্রশিক্ষণের মাধ্যমে তা বাস্তবায়ন
                  সম্ভব।
                </p>
                <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  আমাদের অভিজ্ঞ প্রশিক্ষক দল এবং আধুনিক শিক্ষা পদ্ধতি শিক্ষার্থীদের ব্যবহারিক
                  দক্ষতা অর্জনে সহায়তা করে। আমরা শুধুমাত্র তত্ত্ব নয়, বরং বাস্তব জগতের অভিজ্ঞতা
                  প্রদান করি।
                </p>
              </div>

              {/* Right — feature tiles */}
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: FaUsers, label: "কমিউনিটি-চালিত" },
                  { icon: FaAward, label: "স্বীকৃত সার্টিফিকেট" },
                  { icon: FaChartLine, label: "ক্যারিয়ার সাপোর্ট" },
                  { icon: FaLaptop, label: "হাতে-কলমে শিক্ষা" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="group rounded-2xl border border-border p-6
                      hover:border-primary/30 hover:bg-primary/[0.02]
                      transition-colors duration-300 flex flex-col gap-4"
                  >
                    <div
                      className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center
                        group-hover:bg-primary/15 transition-colors duration-300"
                    >
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm font-bold leading-snug">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Courses Section ────────────────────────────────────── */}
        <section className="border-b border-border py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-primary" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                  কোর্স সমূহ
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                  আমাদের{" "}
                  <span className="italic font-bold text-primary">
                    বিশেষায়িত
                  </span>{" "}
                  কোর্সসমূহ<span className="text-primary">.</span>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                  আপনার ক্যারিয়ারকে নতুন উচ্চতায় নিয়ে যেতে আমাদের কোর্সগুলো বিশেষভাবে তৈরি।
                </p>
              </div>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {courses.map((course) => (
                <div
                  key={course.index}
                  className="group rounded-2xl border border-border p-6
                    hover:border-primary/30 hover:bg-primary/[0.02]
                    transition-colors duration-300 flex flex-col gap-4"
                >
                  {/* Header row */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center
                        group-hover:bg-primary/15 transition-colors duration-300"
                    >
                      <course.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span
                      className="text-[10px] font-semibold tracking-[0.18em] uppercase
                        border border-border rounded-full px-2.5 py-1 text-muted-foreground
                        group-hover:border-primary/30 transition-colors duration-300"
                    >
                      {course.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {course.description}
                  </p>

                  {/* Animated rule */}
                  <div className="flex items-center gap-2">
                    <div className="h-px w-5 bg-primary/40 group-hover:w-8 transition-all duration-300" />
                    <span className="text-[10px] text-primary/60 font-semibold tracking-wide uppercase">
                      {course.index}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ──────────────────────────────────────── */}
        <section className="border-b border-border py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-primary" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                  কেন আমরা
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                কেন আমাদের{" "}
                <span className="italic font-bold text-primary">বেছে</span>{" "}
                নিবেন<span className="text-primary">?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {reasons.map((reason, i) => (
                <div
                  key={reason.title}
                  className="group rounded-2xl border border-border p-6
                    hover:border-primary/30 hover:bg-primary/[0.02]
                    transition-colors duration-300 flex gap-5 items-start"
                >
                  {/* Number badge */}
                  <div
                    className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center
                      group-hover:bg-primary/15 transition-colors duration-300"
                  >
                    <span className="text-sm font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-base font-bold leading-snug">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Section ────────────────────────────────────────── */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-border bg-primary/5 px-8 py-14 md:py-20 text-center">
              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-10 bg-primary" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                  শুরু করুন
                </span>
                <div className="h-px w-10 bg-primary" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight max-w-2xl mx-auto">
                আজই আপনার ক্যারিয়ারের{" "}
                <span className="italic font-bold text-primary">পরিবর্তন</span>{" "}
                শুরু করুন<span className="text-primary">.</span>
              </h2>

              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
                আমাদের সাথে যোগ দিন এবং আপনার স্বপ্নের দক্ষতা অর্জন করুন।
              </p>

              <div className="flex flex-row gap-3 mt-8 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-12 px-8
                    rounded-xl bg-primary text-primary-foreground text-sm font-semibold
                    hover:bg-primary/90 transition-colors duration-200"
                >
                  আজই যোগ দিন
                </Link>
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center h-12 px-8
                    rounded-xl border border-border text-sm font-semibold
                    hover:bg-primary/5 hover:border-primary/30 transition-colors duration-200"
                >
                  কোর্স দেখুন
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
