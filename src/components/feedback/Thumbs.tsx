"use client";
import { useField } from "formik";
import React, { useState } from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

type Props = {
  name: string;
  thumbsUpChecked: boolean;
  thumbsDownChecked: boolean;
  handleThumbsUpChecked: () => void;
  handleThumbsDownChecked: () => void;
};

const Thumbs = ({
  name,
  thumbsUpChecked,
  thumbsDownChecked,
  handleThumbsUpChecked,
  handleThumbsDownChecked,
}: Props) => {
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;

  return (
    <div className="flex items-center gap-10">
      <FaThumbsUp
        className={`cursor-pointer text-6xl transition-all sm:hover:text-green-300 ${
          thumbsUpChecked ? "-translate-y-2 text-green-400" : "text-neutral-300"
        } `}
        onClick={() => {
          setValue(true);
          handleThumbsUpChecked();
        }}
      />
      <FaThumbsDown
        className={`cursor-pointer text-6xl transition-all sm:hover:text-red-300 ${
          thumbsDownChecked ? "-translate-y-2 text-red-400" : "text-neutral-300"
        }`}
        onClick={() => {
          setValue(false);
          handleThumbsDownChecked();
        }}
      />
    </div>
  );
};

export default Thumbs;
