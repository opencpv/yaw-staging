"use client";
import React from "react";
import style from "../Template.module.css";
import ReviewComment from "./ReviewComment";
import { Button } from "@/components/__shared/ui/button";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import Rate from "@/components/__shared/ui/Rate";
import ReportIssue from "@/components/__shared/ui/links/report-issue";
import dynamic from "next/dynamic";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/__shared/ui/tabs";
const FramerWrapper = dynamic(
  () => import("@/components/__shared/hoc/framer-wrapper"),
);
type Props = {};

const PropertyRating = (props: Props) => {
  return (
    <section className={cn(style.detailWrapper, "pt-10")}>
      <div className="flex flex-wrap items-center justify-between gap-5">
        <h2 className={style.detailHeading}>All Reviews</h2>
        <Button>Write a review</Button>
      </div>
      <FramerWrapper {...fadeUp} className="space-y-6 rounded-2xl border-2 p-6">
        <Tabs defaultValue={"property"}>
          <TabsList className="gap-8">
            <TabsTrigger value="property" className={style.reviewsTabsTrigger}>
              About this Property
            </TabsTrigger>
            <TabsTrigger value="lister" className={style.reviewsTabsTrigger}>
              About this Lister
            </TabsTrigger>
          </TabsList>
            <TabsContent value="property">
              <div>Property rating</div>
            </TabsContent>
            <TabsContent value="lister">
              <div>Lister rating</div>
            </TabsContent>
        </Tabs>

        {/*
<div className="space-y-1">
          <h5 className="font-medium">Overall Ratings</h5>
          <div className="flex flex-wrap items-center gap-2">
            <small className="font-bold text-shade-500">4.7</small>
            <span className="font-medium">( 3 ) reviews</span>
          </div>
        </div>
        <ReviewComment />
        <ReviewComment />
        <ReviewComment />

        */}
      </FramerWrapper>
      <ReportIssue />
    </section>
  );
};

export default PropertyRating;
