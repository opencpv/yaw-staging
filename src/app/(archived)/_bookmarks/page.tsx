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

  return (
    <section>
      <div className="font-['Open Sans'] text-[31px] font-semibold leading-[43.40px] text-zinc-800">
        My Bookmarks
      </div>{" "}
      <SearchSwitch />
      {LowerCase(activePage as string) === "favorites" && <FavoritePage />}
      {LowerCase(activePage as string) === "saved" && <SavedPAge />}
    </section>
  );
}
