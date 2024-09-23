"use client";
import InputWithSavedSearch from "@/components/__shared/ui/form/InputWithSavedSearch";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchCity = () => {
  const searchParams = useSearchParams();
  const tag = searchParams?.get("tag") as string;
  const search = searchParams?.get("q") as string;
  const router = useRouter();
  const [value, setValue] = useState<string>(search || "");

  useEffect(() => {
    setValue(search);
  }, [search]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search");

    router.replace(
      `/properties?${new URLSearchParams({
        q: search as string,
        tag,
      })}`,
      {
        scroll: false,
      },
    );
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    //@ts-ignore
    const search = e.target.value;
    setValue(search);

    search === "" &&
      router.replace(
        `/properties?${new URLSearchParams({
          q: search,
          tag,
        })}`,
        { scroll: false },
      );
  };

  return (
    <div className="relative w-full p-10 px-5 sm:bottom-20 sm:max-w-4xl sm:rounded-xl sm:bg-white sm:shadow-2xl md:px-20">
      <InputWithSavedSearch
        className="block w-full rounded-full border border-primary-100/80 p-5 text-neutral-800 shadow-[0px_1px_64px_10px_rgba(0,_0,_0,_0.12)] sm:rounded-[inherit] sm:pl-12 sm:shadow-xl"
        inputClassName="placeholder:uppercase"
        searchIconColor="#21A19F"
        name="search"
        onSubmit={handleSearch}
        onInput={handleInput}
        value={value}
      />
    </div>
  );
};

export default SearchCity;
