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
  const { icons, images } = useAssets();
  return (
    <div
      className={`relative flex min-h-[100vh]  w-full flex-col items-center justify-center gap-20 bg-cover bg-center bg-no-repeat px-5 pt-10 xs:justify-between xs:py-10 sm:h-[120vh] lg:h-[140vh] lg:px-20 2xl:h-screen ${styles.tempImage} ${styles.root}`}
    >
      <div className=" absolute  right-5 top-5 aspect-[72/52] w-full max-w-[72px] xs:top-10 sm:left-5 lg:aspect-[150/110] lg:max-w-[100px] 2xl:max-w-[150px]">
        <div className="relative aspect-[72/52] w-full lg:aspect-[150/110]">
          <Image src={images.Logo} alt="RentRightGH logo" fill />

        </div>
      </div>

      <div className="flex h-full w-full max-w-[731px] flex-col  justify-center gap-2">
        <TLPTags variant="coming-soon" content="Coming soon" />

        <div className="mt-6 flex flex-col">
          <GenuineListingRow />
          <WhatWeDo />
        </div>

        <div className="mt-2 flex  flex-col lg:mt-4 ">
          <GetNotifiedInput />
        </div>
      </div>
      <div className=" w-full pb-3 pt-10 xl:pb-1 2xl:pb-5">
        <TlpFooter />
      </div>
    </div>
  );
}

export default TemporayLandingPage;
