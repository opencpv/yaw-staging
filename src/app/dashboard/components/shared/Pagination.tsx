import React, { useState } from "react";
import { Pagination as NextUIPagination } from "@nextui-org/react";

type Props = {
    currentPage: number;
    onChange: any;
    // total: number
};

const Pagination = ({currentPage, onChange}: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-small text-default-500">
        Selected Page: {currentPage}
      </p>
      <NextUIPagination
        disableAnimation
        classNames={{cursor: "bg-primary-500 text-white"}}
        total={10}
        color="secondary"
        page={currentPage}
        onChange={onChange}
      />
    </div>
  );
};

export default Pagination;
