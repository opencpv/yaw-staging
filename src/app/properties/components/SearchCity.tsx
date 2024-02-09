import InputWithSavedSearch from "@/components/__shared/form/InputWithSavedSearch";
import React from "react";

type Props = {};

const SearchCity = (props: Props) => {
  return (
    <div className="relative w-full p-10 px-5 sm:bottom-20 sm:max-w-4xl sm:rounded-xl sm:bg-white sm:shadow-2xl md:px-20">
      <InputWithSavedSearch
        className="block w-full rounded-full border border-primary-100/80 p-5 text-neutral-800 shadow-large sm:rounded-[inherit] sm:pl-12 sm:shadow-xl"
        inputClassName="placeholder:uppercase"
        searchIconColor="#21A19F"
      />
    </div>
  );
};

export default SearchCity;
