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
import VideoSection from "@/components/videoSection/page";
import WhyChoose from "@/components/whyChoose/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HomeSliderComp />
        <TopRanker />
      <div className="grid md:gap-20 w-full max-w-7xl mx-auto p-6 xl:p-0 gap-5">
        <OurBestSeller />
        <VideoSection />
      </div>
      <Banner />
      <div className="grid md:gap-20 w-full max-w-7xl mx-auto my-10 p-6 xl:p-0 gap-5">
        <ExploreMore />
        <OurRecentArch />
        <OurIngradient />
        <WhyChoose />
      </div>
      <Banner />
      <div className="grid w-full max-w-7xl mx-auto pt-10 p-6 xl:p-0">
        <CheckTopBlog />
        <OurCertification />
      </div>
    </main>
  );
}
