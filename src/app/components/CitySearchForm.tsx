"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

const CitySearchForm = ({
  placeholder = "Madina, Accra",
}: {
  className?: string;
  placeholder?: string;
}) => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") || placeholder;
    router.push(
      `/properties?${new URLSearchParams({
        search: search as string,
        sk: String(true),
      })}`,
    );
  };

  return (
    <form className="flex h-[4.6rem] max-w-lg" onSubmit={handleSearch}>
      <input
        className="h-full w-full rounded-l-xl rounded-r-none bg-secondary-300 px-6 py-3 text-lg font-semibold text-neutral-900 placeholder:text-neutral-400 focus:outline-accent xs:text-2xl"
        name="search"
        placeholder={placeholder}
      />

      <button
        type="submit"
        className="grid h-full w-24 place-items-center rounded-l-none rounded-r-xl border-y border-r border-secondary-300 bg-accent-50 text-white"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default CitySearchForm;
