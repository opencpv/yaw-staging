"use client";
import React from "react";
import AOSWrapper from "@/components/__shared/AOSWrapper";
import Survey from "@/components/survey/Survey";

type Props = {};

const SurveyToast = (props: Props) => {
  return (
    <AOSWrapper animation="fade-right" duration="1000">
      <Survey />
    </AOSWrapper>
  );
};

export default SurveyToast;
