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
        className={`flex justify-center items-center text-red-500 text-center h-52 ${className}`}
      >
        Error: Something went wrong while getting {specificData}.
      </p>
    );
  else
    return (
      <p
        className={`flex justify-center items-center text-center h-52 ${className}`}
      >
        It looks like you are offline, please check your internet.
      </p>
    );
};

export default FetchErrorMessage;
