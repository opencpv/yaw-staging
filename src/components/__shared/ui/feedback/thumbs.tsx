"use client";
import { FieldHelperProps, useField, useFormikContext } from "formik";
import React, { useState } from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

type Props = {
  /**
   * Required when used in a Formik context
   */
  name: string;
  thumbsUpChecked: boolean;
  thumbsDownChecked: boolean;
  handleThumbsUpChecked: () => void;
  handleThumbsDownChecked: () => void;
};

/**
 * Radio states with thumbs. <br />
 * Either used in a <strong>Formik</strong> context or standalone
 */
const Thumbs = ({
  name,
  thumbsUpChecked,
  thumbsDownChecked,
  handleThumbsUpChecked,
  handleThumbsDownChecked,
}: Props) => {
  const formikContext = useFormikContext();
  let helpers: FieldHelperProps<any> | undefined;

  if (formikContext) {
    helpers = formikContext.getFieldHelpers(name as string);
  }

  return (
    <div className="flex items-center gap-10">
      <button
        type="button"
        onClick={() => {
          helpers?.setValue(false);
          handleThumbsDownChecked();
        }}
      >
        <FaThumbsDown
          className={`cursor-pointer text-6xl transition-all sm:hover:text-red-300 ${
            thumbsDownChecked
              ? "-translate-y-2 text-red-400"
              : "text-neutral-300"
          }`}
        />
      </button>
      <button
        type="button"
        onClick={() => {
          helpers?.setValue(true);
          handleThumbsUpChecked();
        }}
      >
        <FaThumbsUp
          className={`scale-x-[-1] cursor-pointer text-6xl transition-all sm:hover:text-green-300 ${
            thumbsUpChecked
              ? "-translate-y-2 text-green-400"
              : "text-neutral-300"
          } `}
        />
      </button>
    </div>
  );
};

export default Thumbs;
