import Courses from "@/components/home/courses/Courses";
import Hero from "@/components/home/hero/hero";
import Insights from "@/components/home/insights/Insights";
import Members from "@/components/home/members/Members";
import Notice from "@/components/home/notice/Notice";
import Payment from "@/components/home/payment/Payment";
import ScrollNotice from "@/components/home/scrollnotice/ScrollNotice";
import Services from "@/components/home/services/Services";
import FeedBack from "@/components/home/student/FeedBack";
import Gallery from "@/components/home/student/Gallery";
import WhyUs from "@/components/home/whyus/WhyUs";
import WorkPlace from "@/components/home/work-place/WorkPlace";
import Header from "@/components/layout/header";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <ScrollNotice />
      <Notice />
      <Courses />
      <Services />
      <WhyUs />
      <Insights />
      <Members />
      <FeedBack />
      <Gallery />
      <WorkPlace />
      <Payment />
    </div>
  );
}
