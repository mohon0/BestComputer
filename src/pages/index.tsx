import * as React from "react";
import Header from "../components/common/Headers/Header";
import StickyHeader from "../components/common/Headers/StickyHeader";
import Footer from "../components/common/footer/Footer";
import Courses from "../components/route/home/courses/Courses";
import { Slider } from "../components/route/home/hero/Slider";
import Insights from "../components/route/home/insights/Insights";
import Members from "../components/route/home/members/Members";
import Notice from "../components/route/home/notice/Notice";
import Payment from "../components/route/home/payment/Payment";
import ScrollNotice from "../components/route/home/scrollnotice/ScrollNotice";
import Services from "../components/route/home/services/Services";
import Student from "../components/route/home/student/Student";
import WhyUs from "../components/route/home/whyus/WhyUs";
import WorkPlace from "../components/route/home/work-place/WorkPlace";

const IndexPage = () => {
  return (
    <main className="overflow-x-hidden">
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
      <Footer />
    </main>
  );
};

export const Head = () => (
  <>
    {/* Standard Meta Tags */}
    <title>Oylkka IT & Training Center</title>
    <meta
      name="description"
      content="Oylkka IT & Training Center offers comprehensive IT training courses to help you advance your career."
    />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.it.oylkka.com/" />
    <meta property="og:title" content="Oylkka IT & Training Center" />
    <meta property="og:description" content="Oylkka IT & Training Center offers comprehensive IT training courses." />
    <meta property="og:image" content="https://www.it.oylkka.com/og-image.jpg" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Oylkka IT & Training Center" />
    <meta name="twitter:description" content="Comprehensive IT training courses." />
    <meta name="twitter:image" content="https://www.it.oylkka.com/og-image.jpg" />

    {/* Verification */}
    <meta
      name="google-site-verification"
      content="fDSST-ZzkW8Udw4reRVW01CHTQKgtQGCq8goCUm0Vug"
    />
  </>
);

export default IndexPage;
