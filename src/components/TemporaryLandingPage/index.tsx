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
      className={`flex flex-col gap-20  bg-center w-full min-h-[100vh] sm:h-[120vh] lg:h-[140vh] 2xl:h-screen px-5 lg:px-20 pt-10 xs:py-10 bg-cover bg-no-repeat items-center justify-center xs:justify-between relative ${styles.tempImage}`}>

      <div className=" absolute  right-5 top-5 xs:top-10 sm:left-5 w-full max-w-[72px] lg:max-w-[100px] 2xl:max-w-[150px] aspect-[72/52] lg:aspect-[150/110]">
        <div className="relative w-full aspect-[72/52] lg:aspect-[150/110]">
          <Image  src={icons.Logo} alt="RentRightGH logo" fill />
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full max-w-[731px]  h-full justify-center">
        <TLPTags variant="coming-soon" content="Coming soon" />

        <div className="flex flex-col mt-6">
          <GenuineListingRow />
          <WhatWeDo />
        </div>

        <div className="mt-2 lg:mt-4  flex flex-col ">
          <GetNotifiedInput />
        </div>
      </div>
      <div className=" w-full pt-10 pb-5 xl:pb-2 2xl:pb-10">
        <TlpFooter />
      </div>
    </div>
  );
}

export default TemporayLandingPage;
