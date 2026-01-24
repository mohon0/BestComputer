import Courses from "@/components/home/courses/Courses";
import MainHeader from "@/components/layout/header/main-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "আমাদের কোর্সসমূহ - ওয়েল্কা ট্রেনিং সেন্টার | আইটি কোর্স ও প্রশিক্ষণ",
  description:
    "ওয়েল্কা ট্রেনিং সেন্টারে আমাদের বিস্তৃত আইটি কোর্সসমূহ দেখুন। ওয়েব ডেভেলপমেন্ট, গ্রাফিক্স ডিজাইন, ডিজিটাল মার্কেটিং এবং আরও অনেক কিছুতে পেশাদার প্রশিক্ষণ গ্রহণ করুন।",
  keywords: [
    "আইটি কোর্স",
    "কম্পিউটার প্রশিক্ষণ",
    "ওয়েব ডেভেলপমেন্ট কোর্স",
    "গ্রাফিক্স ডিজাইন কোর্স",
    "ডিজিটাল মার্কেটিং কোর্স বাংলাদেশ",
    "Oylkka IT courses",
    "IT training programs",
  ],
};

export default function CoursesPage() {
  return (
    <div>
      <MainHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Web Development Course", // Example, replace with actual course name
            description:
              "Learn full-stack web development with HTML, CSS, JavaScript, and modern frameworks.", // Example
            provider: {
              "@type": "Organization",
              name: "Oylkka IT & Training Center",
              sameAs: "https://www.training.oylkka.com",
            },
          }),
        }}
      />
      <Courses />
    </div>
  );
}
