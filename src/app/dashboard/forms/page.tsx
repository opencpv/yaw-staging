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
import { ClientOnly } from "@/components/ui/ClientOnly";

export default function Page() {
  const [ratingsModal, setRatingsModal] = useState();
  const [allREviewsModal, setAllReviewsModal] = useState();

  return (
    <Root className="w-full">
      <div className="w-full min-w-full">
        <div
          className="p-hero w-full flex items-center justify-center"
          style={{}}
        >
          <div className="flex lg:flex-row flex-wrap flex-col gap-5 w-full items-center justify-center px-5">
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
              <CompleteYourLogin dashboard={false} />
            </ClientOnly>
            <ClientOnly>
              <HowToSwitch dashboard={false} />
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
