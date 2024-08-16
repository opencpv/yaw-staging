import React from "react";
import CaNoBookmark from "./icons/CaNoBookmark";


const NoSearchEmptyState = ({page}: {page: string}) => {
  return (
    <div className="col-span-full flex flex-col items-center font-semibold">
      <CaNoBookmark />
      <p className="text-shade-300 ">
      You have no {page === "recommendations" ? "recommendation" : page === "recently-viewed" ? "recent view" : "saved search"}
      </p>
    </div>
  );
};

export default NoSearchEmptyState;
