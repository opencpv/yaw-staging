import InputWithSavedSearch from "@/components/__shared/form/InputWithSavedSearch";
import { cn } from "@/lib/utils";
import React from "react";

const Search = ({ className }: { className?: string }) => {
  return (
    <InputWithSavedSearch
      className={cn(
        "h-[52px] max-h-[52px] max-w-lg rounded-[4px] bg-[#F9F9F9] md:h-[42px] xl:min-w-[420px] 2xl:aspect-[620/52] 2xl:h-[52px]",
        className,
      )}
      inputClassName="rounded-[4px] border-0 px-4 py-1"
      separatorClassName="h-[60%]"
    />
  );
};

export default Search;
