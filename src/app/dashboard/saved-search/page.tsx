"use client";
import Image from "next/image";
import { useState } from "react";
import SavedSearchCard from "./components/SavedSearchCard";
import { useAssets } from "@/lib/custom-hooks/useAssets";

export default function Page() {
  const [savedSearches, setSavedSearches] = useState(true);
  const { images } = useAssets();
  return (
    <div className="flex w-full flex-col items-center justify-center ">
      {!savedSearches && (
        <div className="mt-24 flex w-full flex-col items-center justify-center pt-5">
          <div className="relative aspect-[411/282] w-full max-w-[411px]">
            <Image src={"/svgs/saved-search.svg"} fill alt="No saved search" />
          </div>
          <p className="text-[1.5625rem] font-semibold text-shade-300">
            You have no saved searches
          </p>
        </div>
      )}
      {savedSearches && (
        <div className="grid w-full max-w-[1669px] grid-cols-3 gap-x-5 gap-y-5 md:grid-cols-4 lg:grid-cols-3">
          {Array.from({ length: 5 }).map((r, index) => (
            <div className="col-span-3 md:col-span-2 lg:col-span-1" key={index}>
              <SavedSearchCard data={r} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
