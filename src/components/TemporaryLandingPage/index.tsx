"use client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import TLPTags from "./components/TLPTags";
import styles from "./index.module.css";
import GenuineListingRow from "./components/GenuineListingRow";
import WhatWeDo from "./components/WhatWeDo";
import GetNotifiedInput from "./components/GetNotifiedInput";
import TlpFooter from "./components/TLPFooter";

function TemporayLandingPage() {
  const { icons } = useAssets();
  return (
    <div
      className={`flex flex-col gap-8 bg-[url('/assets/images/temporary-landing/house.png')] w-full h-full min-h-[100vh] px-5 lg:px-20 py-10 bg-cover bg-no-repeat items-center justify-between xs:justify-center relative ${styles.tempImage}`}>
      <div className=" absolute  right-5 top-10 sm:left-5 w-full max-w-[72px] lg:max-w-[100px] 2xl:max-w-[150px] aspect-[72/52] lg:aspect-[150/110]">
        <div className="relative w-full aspect-[72/52] lg:aspect-[150/110]">
          <Image  src={icons.Logo} alt="RentRightGH logo" fill />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full max-w-[731px]">
        <TLPTags variant="coming-soon" content="Coming soon" />

        <div className="flex flex-col ">
          <GenuineListingRow />
          <WhatWeDo />
        </div>

        <div className="mt-7 lg:mt-14  flex flex-col ">
          <GetNotifiedInput />
        </div>
      </div>
      <div className="sm:absolute bottom-0 w-full pt-10 xl:pb-2 2xl:pb-10">
        <TlpFooter />
      </div>
    </div>
  );
}

export default TemporayLandingPage;
