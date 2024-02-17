"use client";
import React from "react";
import SearchSwitch from "./components/SearchSwitch";
import { LowerCase } from "@/lib/utils/stringManipulation";
import { useSearchStore } from "@/store/search/useSearchStore";
import FavoritePage from "./components/FavoritePage";
import SavedPAge from "./components/SavedPage";

type Props = {};

export default function SearchPage({}: Props) {
  const activePage = useSearchStore((state) => state.activePage);
  console.log(activePage);

  return (
    <section>
      <div className="text-zinc-800 text-[31px] font-semibold font-['Open Sans'] leading-[43.40px]">
        My Bookmarks
      </div>{" "}
      <SearchSwitch />
      {LowerCase(activePage as string) === "favorites" && <FavoritePage />}
      {LowerCase(activePage as string) === "saved" && <SavedPAge />}
    </section>
  );
}
