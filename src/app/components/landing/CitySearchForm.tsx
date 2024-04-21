"use client";
import React from "react";
import styles from "./Shape.module.css";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

const CitySearchForm = ({
  className,
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
    <div
      className={`flex h-40 w-full max-w-5xl items-center justify-center bg-primary-500 bg-opacity-80 sm:h-52 md:w-full 2k:h-64 ${styles.rectangle} ${className}`}
    >
      <form
        className="flex h-[4.6rem] w-[80%] translate-x-[-6%] sm:w-[70%] sm:translate-x-[-15%]"
        onSubmit={handleSearch}
      >
        <input
          className="h-full w-full rounded-l-xl rounded-r-none bg-secondary-300 px-6 py-3 text-lg font-[600] text-neutral-900 placeholder:text-neutral-400 focus:outline-none xs:text-2xl"
          name="search"
          placeholder={placeholder}
        />

        <button
          type="submit"
          className="grid h-full w-24 place-items-center rounded-l-none rounded-r-xl border-y border-r border-secondary-300 bg-accent-50"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default CitySearchForm;
