import InputWithSavedSearch from "@/components/__shared/form/InputWithSavedSearch";
import React from "react";

const Search = () => {
  return (
    <InputWithSavedSearch
      className="h-[52px] max-h-[52px] max-w-lg rounded-[4px] bg-[#F9F9F9] md:h-[42px] xl:min-w-[420px] 2xl:aspect-[620/52] 2xl:h-[52px]"
      inputClassName="rounded-[4px] border-0 px-4 py-1"
      // separatorClassName="right-[20.5%] top-3 xs:right-[19%] md:right-[18%] md:top-2"
    />
  );
};

export default Search;
