//@ts-nocheck
"use client";
import InputWithSavedSearch from "@/components/__shared/form/InputWithSavedSearch";
import { propertyFilterStore } from "@/store/properties/usePropertiesStore";
import React from "react";

type Props = {};

const SearchCity = (props: Props) => {
  const { setSearchString } = propertyFilterStore();

  return (
    <div className="relative w-full p-10 px-5 sm:bottom-20 sm:max-w-4xl sm:rounded-xl sm:bg-white sm:shadow-2xl md:px-20">
      <InputWithSavedSearch
        className="block w-full rounded-full border border-primary-100/80 p-5 text-neutral-800 shadow-[0px_1px_64px_10px_rgba(0,_0,_0,_0.12)] sm:rounded-[inherit] sm:pl-12 sm:shadow-xl"
        inputClassName="placeholder:uppercase"
        searchIconColor="#21A19F"
        onSubmit={(e) => setSearchString(e.target[0].value)}
        onInput={(e) =>
          e.target.value === "" && setSearchString(e.target.value)
        }
      />
    </div>
  );
};

export default SearchCity;
