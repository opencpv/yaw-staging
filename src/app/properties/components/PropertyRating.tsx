"use client";
import React from "react";
import style from "../Template.module.css";
import ReviewComment from "./ReviewComment";
import Button from "@/components/__shared/ui/button/Button";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import Rate from "@/components/__shared/ui/Rate";
import FramerWrapper from "@/components/__shared/hoc/FramerWrapper";
import ReportIssue from "@/components/__shared/ui/links/ReportIssue";

type Props = {};

const PropertyRating = (props: Props) => {
  return (
    <section className={cn(style.detailWrapper, "pt-10")}>
      <h3 className={style.detailHeading}>From Our Renters</h3>
      <FramerWrapper {...fadeUp} className="space-y-6 rounded-2xl border-2 p-6">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <h4 className={cn(style.detailHeading, "font-bold")}>All Reviews</h4>
          <Button color="primary">Write a review</Button>
        </div>
        <div className="space-y-1">
          <h5 className="font-normal">Overall Ratings</h5>
          <div className="flex flex-wrap items-center gap-2">
            <small className="font-bold text-shade-500">4.7</small>
            <Rate value={4.5} allowHalf disabled />
            <span>( 3 ) reviews</span>
          </div>
        </div>
        <ReviewComment />
        <ReviewComment />
        <ReviewComment />
      </FramerWrapper>
      <ReportIssue />
    </section>
  );
};

export default PropertyRating;
