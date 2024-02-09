import InputWithSavedSearch from "@/components/__shared/form/InputWithSavedSearch";
import React from "react";

type Props = {};

const SearchCity = (props: Props) => {
  return (
    <div className="relative w-full p-10 sm:bottom-20 sm:max-w-4xl sm:rounded-xl sm:bg-white md:px-20 sm:shadow-2xl">
      <InputWithSavedSearch
        className="block w-full rounded-full border border-primary-100/80 p-5 pl-12 text-neutral-800 shadow-large sm:rounded-[inherit] sm:shadow-xl"
        inputClassName="placeholder:uppercase"
        searchIconColor="#21A19F"
      />
    </div>
  );
};

export default SearchCity;
