import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import * as React from "react";
import SavedSearchGrid from "./SavedSearchGrid";

interface ISavedPAgeProps {}

const SavedPAge: React.FunctionComponent<ISavedPAgeProps> = (props) => {
  const { images } = useAssets();
  const data = [1];
  const NoSavedImages = () => {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="relative lg:h-[282px] w-[411px]">
          <Image src={images.SavedSearches} alt="" />
        </div>
        <p className="mt-16 text-[15px] text-[#545454] font-semibold">
          You have no saved searches
        </p>
      </div>
    );
  };
  return (
    <section>
      <h2 className="text-zinc-800 text-xl font-semibold  leading-7 ">
        Saved Searches
      </h2>
      <p className="mb-8 mt-4">
        Showing {data.length} Result{data.length > 1 ? "s" : ""}
      </p>
      {data.length > 0 ? <SavedSearchGrid /> : <NoSavedImages />}
    </section>
  );
};

export default SavedPAge;
