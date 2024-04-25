//@ts-nocheck
"use client";
import { styled } from "@stitches/react";
import { useState } from "react";
import ApplicationForm from "../../../components/__shared/ui/application-form";
import ImageOptionsPopover from "../../../components/__shared/ui/listing-form/components/ChooseImages/ImageOptionsPopover";
import ListingFormModal from "../../../components/__shared/ui/listing-form";
import CompleteYourLogin from "../components/CompleteYourLogin";
import HowToSwitch from "../components/HowToSwitch";
import RatingsForm from "@/components/__shared/ui/ratings-form";
import AllReviewsModal from "@/components/__shared/ui/modals/all-reviews-modal";
import { ClientOnly } from "@/components/__shared/hoc/ClientOnly";

export default function Page() {
  const [ratingsModal, setRatingsModal] = useState();
  const [allREviewsModal, setAllReviewsModal] = useState();

  return (
    <Root className="w-full">
      <div className="w-full min-w-full">
        <div
          className="p-hero flex w-full items-center justify-center"
          style={{}}
        >
          <div className="flex w-full flex-col flex-wrap items-center justify-center gap-5 px-5 lg:flex-row">
            <ApplicationForm type="complex" />
            <ApplicationForm type="simple" />
            <ClientOnly>
              <ListingFormModal />
            </ClientOnly>
            <RatingsForm
              rated
              rating="2.5"
              variant="property"
              setOpen1={setRatingsModal}
              setOpen2={setAllReviewsModal}
              open1={ratingsModal}
            />
            {/* <RatingsForm
              setOpen1={setRatingsModal}
              setOpen2={setAllReviewsModal}
              open1={ratingsModal}
            /> */}
            <ClientOnly>
              <CompleteYourLogin />
            </ClientOnly>
            <ClientOnly>
              <HowToSwitch />
            </ClientOnly>
            <AllReviewsModal
              variant="property"
              open1={allREviewsModal}
              setOpen1={setAllReviewsModal}
              setOpen2={setRatingsModal}
            />
            {/* <AllReviewsModal
              variant="person"
              open={AllReviewsModal}
              setOpen={setAllReviewsModal}
              setOpen2={setRatingsModal}
            /> */}
          </div>
        </div>
      </div>{" "}
    </Root>
  );
}

const Root = styled("div", {});
