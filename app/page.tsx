import Courses from "@/components/home/courses/Courses";
import { Slider } from "@/components/home/hero/Slider";
import Insights from "@/components/home/insights/Insights";
import Members from "@/components/home/members/Members";
import Notice from "@/components/home/notice/Notice";
import Payment from "@/components/home/payment/Payment";
import ScrollNotice from "@/components/home/scrollnotice/ScrollNotice";
import Services from "@/components/home/services/Services";
import Student from "@/components/home/student/Student";
import WhyUs from "@/components/home/whyus/WhyUs";
import WorkPlace from "@/components/home/work-place/WorkPlace";
import Header from "@/components/layout/header";
import StickyHeader from "@/components/layout/header/sticky-header";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <StickyHeader />
      <Header />
      <Slider />
      <ScrollNotice />
      <Notice />
      <Courses />
      <Services />
      <WhyUs />
      <Insights />
      <Members />
      <Student />
      <WorkPlace />
      <Payment />
    </div>
  );
}
