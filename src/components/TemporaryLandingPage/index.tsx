import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import TLPTags from "./components/TLPTags";
import styles from "./index.module.css";
import GenuineListingRow from "./components/GenuineListingRow";
import WhatWeDo from "./components/WhatWeDo";

function TemporayLandingPage() {
  const { icons } = useAssets();
  return (
    <div className="flex flex-col gap-4 bg-[url('/assets/images/temporary-landing/gradient.svg')] w-full h-full min-h-[100vh] px-16 py-10 bg-cover bg-no-repeat">
      <div className="relative w-full max-w-[158px] aspect-[158/116]">
        <Image src={icons.Logo} alt="RentRightGH logo" fill />
      </div>
      <TLPTags variant="coming-soon" content="Coming soon" />
      <GenuineListingRow />
      <div className="w-full h-[14rem]  lg:h-[28.5rem] mt-14">
        <div className="relative w-full h-full rounded-2xl overflow-hidden ">
          <Image
            src={"/assets/images/temporary-landing/house.png"}
            alt="RentRightGH logo"
            fill
            objectFit="cover"
          />
        </div>
      </div>
      <div className="mt-4">
        <WhatWeDo />
      </div>{" "}
    </div>
  );
}

export default TemporayLandingPage;
