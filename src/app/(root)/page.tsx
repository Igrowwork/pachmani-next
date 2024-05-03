import HomeSliderComp from "@/components/HomeSliderComp/page";
import Navbar from "@/components/Navbar/page";
import Offer from "@/components/Offer/page";
import OurRecentArch from "@/components/OurRecentArch/page";
import Banner from "@/components/banner/page";
import CheckTopBlog from "@/components/checkTopBlog/page";
import ExploreMore from "@/components/exploreMore/page";
import Navbar2 from "@/components/navbar2/page";
import OurBestSeller from "@/components/ourBestSeller/page";
import OurCertification from "@/components/ourCertification/page";
import OurIngradient from "@/components/ourIngradient/page";
import TopRanker from "@/components/topRanker/page";
import WhyChoose from "@/components/whyChoose/page";
import Image from "next/image";
import CustomerReview from "@/components/customer-review/page";

export default function Home() {
  return (
    <main className="">
      <HomeSliderComp />
        <TopRanker />
      <div className="w-full h-full max-w-7xl mx-auto">
        <OurBestSeller />
        <CustomerReview />
      </div>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <ExploreMore />
        <OurRecentArch />
        <OurIngradient />
        <WhyChoose />
      </div>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <CheckTopBlog />
        <OurCertification />
      </div>
    </main>
  );
}
