import type { Metadata } from "next";
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

export default function AboutPage() {
  return (
    <>
      <MainHeader />

      <main>
        {/* Hero Section */}
        <section className="bg-linear-to-r from-purple-50 to-cyan-50 px-4 py-20 md:py-32">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-balance text-5xl font-bold text-gray-900 md:text-6xl">
              ওয়েল্কা ট্রেনিং সেন্টার
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              আমরা বাংলাদেশের শীর্ষস্থানীয় আইটি প্রশিক্ষণ কেন্দ্র যেখানে আপনার দক্ষতা উন্নয়ন
              এবং ক্যারিয়ার গঠনের জন্য সর্বোত্তম শিক্ষা প্রদান করি।
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="px-4 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                  আমাদের সম্পর্কে
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  ওয়েল্কা ট্রেনিং সেন্টার প্রতিষ্ঠিত হয়েছে শিক্ষার্থীদের আধুনিক প্রযুক্তি এবং
                  ডিজিটাল দক্ষতা প্রদান করার লক্ষ্যে। আমরা বিশ্বাস করি যে প্রতিটি শিক্ষার্থীর
                  সফলতার সম্ভাবনা রয়েছে এবং সঠিক নির্দেশনা ও প্রশিক্ষণের মাধ্যমে তা বাস্তবায়ন
                  সম্ভব।
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  আমাদের অভিজ্ঞ প্রশিক্ষক দল এবং আধুনিক শিক্ষা পদ্ধতি শিক্ষার্থীদের ব্যবহারিক
                  দক্ষতা অর্জনে সহায়তা করে। আমরা শুধুমাত্র তত্ত্ব নয়, বরং বাস্তব জগতের অভিজ্ঞতা
                  প্রদান করি।
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-purple-50 p-6">
                  <div className="mb-4 inline-flex rounded-full bg-purple-100 p-3">
                    <FaUsers className="text-2xl text-purple-600" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">৫০০+</p>
                  <p className="mt-2 text-gray-600">সফল শিক্ষার্থী</p>
                </div>
                <div className="rounded-2xl bg-cyan-50 p-6">
                  <div className="mb-4 inline-flex rounded-full bg-cyan-100 p-3">
                    <FaAward className="text-2xl text-cyan-600" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">১০+</p>
                  <p className="mt-2 text-gray-600">কোর্স উপলব্ধ</p>
                </div>
                <div className="rounded-2xl bg-purple-50 p-6">
                  <div className="mb-4 inline-flex rounded-full bg-purple-100 p-3">
                    <FaChartLine className="text-2xl text-purple-600" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">৯০%</p>
                  <p className="mt-2 text-gray-600">চাকরি হার</p>
                </div>
                <div className="rounded-2xl bg-cyan-50 p-6">
                  <div className="mb-4 inline-flex rounded-full bg-cyan-100 p-3">
                    <FaLaptop className="text-2xl text-cyan-600" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">১০ বছর+</p>
                  <p className="mt-2 text-gray-600">অভিজ্ঞতা</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Courses Section */}
        <section className="bg-gray-50 px-4 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                আমাদের কোর্স সমূহ
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                আমরা অফার করি বিভিন্ন ক্ষেত্রে বিশেষায়িত কোর্স যা আপনার ক্যারিয়ারকে নতুন
                উচ্চতায় নিয়ে যেতে পারে।
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Web Development */}
              <div className="rounded-2xl border border-purple-200 bg-white p-8 transition-all duration-300 hover:shadow-lg hover:shadow-purple-200">
                <div className="mb-4 inline-flex rounded-full bg-purple-100 p-4">
                  <FaLaptop className="text-3xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  ওয়েব ডেভেলপমেন্ট
                </h3>
                <p className="mt-3 text-gray-600">
                  HTML, CSS, JavaScript এবং আধুনিক ফ্রেমওয়ার্ক শিখুন। প্রকল্প-ভিত্তিক
                  শিক্ষা পদ্ধতি।
                </p>
              </div>

              {/* Graphics Design */}
              <div className="rounded-2xl border border-cyan-200 bg-white p-8 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-200">
                <div className="mb-4 inline-flex rounded-full bg-cyan-100 p-4">
                  <FaPalette className="text-3xl text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  গ্রাফিক্স ডিজাইন
                </h3>
                <p className="mt-3 text-gray-600">
                  Adobe Creative Suite এবং ডিজাইন নীতিমালা শিখুন। পোর্টফোলিও তৈরির
                  সুযোগ।
                </p>
              </div>

              {/* Office Applications */}
              <div className="rounded-2xl border border-purple-200 bg-white p-8 transition-all duration-300 hover:shadow-lg hover:shadow-purple-200">
                <div className="mb-4 inline-flex rounded-full bg-purple-100 p-4">
                  <FaFileWord className="text-3xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  অফিস অ্যাপ্লিকেশন
                </h3>
                <p className="mt-3 text-gray-600">
                  MS Word, Excel, PowerPoint এবং আরও অনেক কিছু। ব্যবসায়িক দক্ষতা বৃদ্ধি
                  করুন।
                </p>
              </div>

              {/* Digital Marketing */}
              <div className="rounded-2xl border border-cyan-200 bg-white p-8 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-200">
                <div className="mb-4 inline-flex rounded-full bg-cyan-100 p-4">
                  <FaChartLine className="text-3xl text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  ডিজিটাল মার্কেটিং
                </h3>
                <p className="mt-3 text-gray-600">
                  SEO, সোশ্যাল মিডিয়া এবং কন্টেন্ট মার্কেটিং শিখুন। ব্র্যান্ড তৈরিতে দক্ষ হন।
                </p>
              </div>

              {/* Database Management */}
              <div className="rounded-2xl border border-purple-200 bg-white p-8 transition-all duration-300 hover:shadow-lg hover:shadow-purple-200">
                <div className="mb-4 inline-flex rounded-full bg-purple-100 p-4">
                  <FaLaptop className="text-3xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  ডাটাবেস ম্যানেজমেন্ট
                </h3>
                <p className="mt-3 text-gray-600">
                  SQL এবং ডাটাবেস ডিজাইন শিখুন। ডেটা ম্যানেজমেন্টে বিশেষজ্ঞ হন।
                </p>
              </div>

              {/* Mobile Development */}
              <div className="rounded-2xl border border-cyan-200 bg-white p-8 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-200">
                <div className="mb-4 inline-flex rounded-full bg-cyan-100 p-4">
                  <FaLaptop className="text-3xl text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  মোবাইল অ্যাপ ডেভেলপমেন্ট
                </h3>
                <p className="mt-3 text-gray-600">
                  iOS এবং Android অ্যাপ তৈরি শিখুন। বাজারে নিজের অ্যাপ লঞ্চ করুন।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="px-4 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
              কেন আমাদের বেছে নিবেন?
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <span className="text-xl font-bold text-purple-600">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    অভিজ্ঞ প্রশিক্ষক
                  </h3>
                  <p className="mt-2 text-gray-600">
                    আমাদের প্রশিক্ষকরা ইন্ডাস্ট্রির অভিজ্ঞ পেশাদার যারা বাস্তব অভিজ্ঞতা শেয়ার
                    করেন।
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                    <span className="text-xl font-bold text-cyan-600">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    আধুনিক পাঠ্যক্রম
                  </h3>
                  <p className="mt-2 text-gray-600">
                    আমরা সর্বদা সর্বশেষ প্রযুক্তি এবং ট্রেন্ড অনুযায়ী আমাদের কোর্স আপডেট করি।
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <span className="text-xl font-bold text-purple-600">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    ব্যবহারিক প্রশিক্ষণ
                  </h3>
                  <p className="mt-2 text-gray-600">
                    প্রতিটি কোর্সে রিয়েল-ওয়ার্ল্ড প্রজেক্ট এবং হ্যান্ডস-অন অভিজ্ঞতা পাবেন।
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                    <span className="text-xl font-bold text-cyan-600">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    চাকরির সহায়তা
                  </h3>
                  <p className="mt-2 text-gray-600">
                    কোর্স শেষে আমরা আপনাকে চাকরির সুযোগ এবং ক্যারিয়ার গাইডেন্স প্রদান করি।
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <span className="text-xl font-bold text-purple-600">5</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    সার্টিফিকেশন
                  </h3>
                  <p className="mt-2 text-gray-600">
                    কোর্স সম্পন্ন করে আপনি পাবেন আন্তর্জাতিকভাবে স্বীকৃত সার্টিফিকেট।
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                    <span className="text-xl font-bold text-cyan-600">6</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">সাশ্রয়ী মূল্য</h3>
                  <p className="mt-2 text-gray-600">
                    আমরা সকলের জন্য সাশ্রয়ী মূল্যে মানসম্পন্ন প্রশিক্ষণ প্রদান করি।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-linear-to-r from-purple-600 to-cyan-600 px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="text-balance text-3xl font-bold md:text-4xl">
              আপনার ক্যারিয়ারের পরিবর্তন শুরু করুন আজই
            </h2>
            <p className="mt-4 text-lg text-white/80">
              আমাদের সাথে যোগ দিন এবং আপনার স্বপ্নের দক্ষতা অর্জন করুন।
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-purple-600 transition-all duration-300 hover:shadow-lg"
            >
              আজই যোগ দিন
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
