"use client";
import Image from "next/image";
import { useState } from "react";
import SavedSearchCard from "./components/SavedSearchCard";

export default function Page() {
  const [savedSearches, setSavedSearches] = useState(true);
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      {!savedSearches && (
        <div className="w-full flex items-center flex-col justify-center mt-24 pt-5">
          <div className="relative w-full aspect-[411/282] max-w-[411px]">
            <Image src={"/svgs/saved-search.svg"} fill alt="No saved search" />
          </div>
          <p className="text-[1.5625rem] font-semibold text-shade-300">
            You have no saved searches
          </p>
        </div>
      )}
      {
        savedSearches && (
            <div className="grid grid-cols-3 gap-x-5 gap-y-5 w-full max-w-[1669px]">
                {
                    Array.from({length: 5})
                    .map((r,index)=>(
                        <SavedSearchCard key={index} data={r}/>
                    ))
                }
            </div>
        )
      }
    </div>
  );
}
