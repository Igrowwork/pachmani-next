import ClinicallyTested from "@/components/ClinicallyTested/page";
import FAQ from "@/components/FAQ/page";
import HomeSlideCard from "@/components/HomeSliderComp/HomeSlideCard/page";
import Review from "@/components/Review/page";
import YouMayAlsoLike from "@/components/YouMayAlsoLike/page";
import Banner from "@/components/banner/page";
import Benifit from "@/components/benefit/page";
import HairCareDetail from "@/components/hairCardDetail/page";
import InGradient from "@/components/inGradient/page";
import OurCertification from "@/components/ourCertification/page";
import React from "react";

export default function hairCareDetail() {
  return (
    <div>
      <HomeSlideCard />
      <div className="max-w-7xl mx-auto w-full h-full md:p-2 p-6">
        <HairCareDetail />
        <ClinicallyTested />
      </div>
      <Banner />
      <InGradient />
      <div className="md:p-10 p-6 text-center text-4xl">Video Section pending hai</div>
      <Benifit />
      <div className="max-w-7xl mx-auto w-full h-full md:p-0 p-6">
        <OurCertification />
        <YouMayAlsoLike />
        <Review />
        <FAQ />
      </div>

    </div>
  );
}
