"use client";
import { styled } from "@stitches/react";
import { useState } from "react";
import ApplicationForm from "../../components/application-form";
import ImageOptionsPopover from "../../components/listing-form/components/ChooseImages/ImageOptionsPopover";
import ListingFormModal from "../../components/listing-form";
import CompleteYourLogin from "../components/CompleteYourLogin";
import HowToSwitch from "../components/HowToSwitch";
import RatingsForm from "@/app/components/ratings-form";
import AllReviewsModal from "@/app/components/all-reviews-modal";


export default function Page() {
  return (
    <Root className="w-full">
      <div className="w-full min-w-full">
        <div
          className="p-hero w-full flex items-center justify-center"
          style={{
          }}>
          <div className="flex lg:flex-row flex-wrap flex-col gap-5 w-full items-center justify-center px-5">
            <ApplicationForm type="complex" />
            <ApplicationForm type="simple" />
            <ListingFormModal />
            <RatingsForm rated rating="2.5" />
            <RatingsForm />
            <CompleteYourLogin dashboard={false} />
            <HowToSwitch dashboard={false} />
            <AllReviewsModal variant="property"/>
            <AllReviewsModal variant="person"/>

          </div>
        </div>
      </div>{" "}
    </Root>
  );
}

const Root = styled("div", {});
