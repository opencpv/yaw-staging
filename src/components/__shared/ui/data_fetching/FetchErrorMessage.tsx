"use client";
import React from "react";

type Props = {
  className?: string;
  specificData?: string;
};

const FetchErrorMessage = ({ className, specificData }: Props) => {
  const hasInternet = navigator.onLine;

  if (hasInternet)
    return (
      <p
        className={`col-span-full flex h-52 items-center justify-center text-center text-red-500 ${className}`}
      >
        Error: Something went wrong while getting {specificData || "data"}.
      </p>
    );
  else
    return (
      <p
        className={`col-span-full flex h-52 items-center justify-center text-center ${className}`}
      >
        It looks like you are offline, please check your internet.
      </p>
    );
};

export default FetchErrorMessage;
