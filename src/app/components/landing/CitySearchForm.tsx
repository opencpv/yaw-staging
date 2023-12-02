"use client";
import React from "react";
import styles from "./Shape.module.css";
import { AutoComplete } from "rsuite";
import { FaSearch } from "react-icons/fa";

const cities = [
  "Boankra",
  "Accra",
  "Kumasi",
  "Tamale",
  "Domaa-Ahenkro",
  "Sekondi",
  "Sunyani",
  "Ashaiman",
  "Obuase",
  "Cape Coast",
  "Tema",
  "Medina Estates",
  "Koforidua",
  "Suhum",
  "Kintampo",
  "Wa",
  "Atebubu",
  "Techiman",
  "Ho",
  "Dome",
  "Gbawe",
  "Bolgatanga",
  "Aflao",
  "Tafo",
  "Winneba",
  "Effia-Kuma",
  "Shama",
  "Nalerigu",
  "Gumani",
  "Kanvile",
  "Agbosome",
  "Damongo",
  "Sefwi Wiawso",
  "Dambai",
  "Goaso",
];

const CitySearchForm = ({className}: {className?: string;}) => {
  return (
    <div
      className={`flex h-32 w-full items-center justify-center bg-primary-500 bg-opacity-80 sm:h-52 md:w-full max-w-5xl 2k:h-64 ${styles.rectangle} ${className}`}
    >
      <form className="flex h-[4.6rem] w-[80%] translate-x-[-6%] sm:translate-x-[-15%] sm:w-[70%]">
        {/* <AutoComplete
          data={cities}
          className="h-full w-full flex-[4] rounded-l-xl rounded-r-none bg-secondary-300 px-4 py-2 text-sm font-[600] text-neutral-900 placeholder:text-neutral-400 focus:outline-none xs:flex-[5] xs:text-2xl"
          placeholder="Madina, Accra"
        /> */}
        <input
          className="h-full w-full flex-[4] rounded-l-xl rounded-r-none bg-secondary-300 px-6 py-3 text-[0.9rem] font-[600] text-neutral-900 placeholder:text-neutral-400 focus:outline-none xs:flex-[5] xs:text-2xl"
          placeholder="Madina, Accra"
        />

        <button
          type="submit"
          className="grid h-full w-16 place-items-center rounded-l-none rounded-r-xl border-y border-r border-secondary-300 bg-accent-50 flex-1"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default CitySearchForm;
