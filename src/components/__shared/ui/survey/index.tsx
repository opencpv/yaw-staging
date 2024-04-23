"use client";
import React from "react";
import Button from "../button/Button";

type Props = {};

const Survey = (props: Props) => {
  return (
    <Button
      href="https://surveyplanet.com/"
      target="_blank"
      color="accent"
      className="fixed -right-10 top-96 z-10 rotate-90 rounded-sm rounded-bl-2xl text-xl"
    >
      Survey
    </Button>
  );
};

export default Survey;
