import React from "react";
import CaNoBookmark from "./icons/CaNoBookmark";


const NoSearchEmptyState = ({page}: {page: string}) => {
  return (
    <div className="col-span-full flex flex-col items-center font-semibold">
      <CaNoBookmark />
      You have no {page === "recommendations" ? "recommendation" : page === "recently-viewed" ? "recent view" : "saved search"}
    </div>
  );
};

export default NoSearchEmptyState;
