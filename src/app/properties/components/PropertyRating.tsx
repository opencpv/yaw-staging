"use client";
import React from "react";
import style from "../Template.module.css";
import ReviewComment from "./ReviewComment";
import { Button } from "@/components/__shared/ui/button/Button";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import Rate from "@/components/__shared/ui/Rate";
import ReportIssue from "@/components/__shared/ui/links/report-issue";
import dynamic from "next/dynamic";
const FramerWrapper = dynamic(
  () => import("@/components/__shared/hoc/framer-wrapper"),
);
type Props = {};

const PropertyRating = (props: Props) => {
  return (
    <section className={cn(style.detailWrapper, "pt-10")}>
      <h2 className={style.detailHeading}>From Our Renters</h2>
      <FramerWrapper {...fadeUp} className="space-y-6 rounded-2xl border-2 p-6">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <h4 className={cn(style.detailHeading, "font-bold")}>All Reviews</h4>
          <Button>Write a review</Button>
        </div>
        <div className="space-y-1">
          <h5 className="font-medium">Overall Ratings</h5>
          <div className="flex flex-wrap items-center gap-2">
            <small className="font-bold text-shade-500">4.7</small>
            {/* <Rate value={4.5} allowHalf disabled /> */}
            <span className="font-medium">( 3 ) reviews</span>
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
