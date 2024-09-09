import AllReviewCard from "./AllReviewsCard";
import SlideEnter from "@/app/dashboard/components/shared/SlideEnter";
import { mockReviewData } from "@/app/dashboard/renter/my-reviews/components/content";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useRatingsModalStore } from "@/store/modal/useRatingsModalStore";
import ReviewSummary from "@/app/dashboard/renter/my-reviews/components/ReviewSummary";
import { CustomScroll } from "@/app/dashboard/components/shared/ui/CustomScroll";

function AllReviewsData() {
  const {
    openRatingsForm, // EC: Please remove unused constants/variables. Address similar instances
    setOpenRatingsForm,
    openAllRatings,
    setOpenAllRatings,
    currentProperty,
    setCurrentProperty,
    variant,
  } = useRatingsModalStore();

  return (
    <div className="px-0 pt-10 md:px-5 2xl:px-6">
      <SlideEnter>
        <div className="flex w-full flex-col items-start justify-center gap-8">
          <div className="flex w-full items-center gap-4 rounded-2xl bg-[#E9ECEF] px-5 py-4 md:px-8">
            <div className="relative aspect-[120/100] w-full max-w-[120px] overflow-hidden rounded-lg">
              <Image
                src={currentProperty?.images?.[0] ?? ""}
                fill
                alt="Image"
              />
            </div>

            <div className="flex w-full flex-col items-start justify-center gap-1">
              {" "}
              {/* EC: Please address responsiveness from 280px up
               * Address similar instances
               */}
              {/* Please i think the responsiveness i okay or? */}
              {/* Sorry I should have been specific
               * On the "Read Reviews" section, right from 280px,
               * I thought the image and property name should displayed a column direction
               * But never mind, it's perfect overall.
               */}
              <h5 className="text-base font-semibold 2xl:text-2xl">
                {variant == "person"
                  ? "Jane Doe"
                  : currentProperty?.bedrooms +
                    " Bedroom " +
                    currentProperty?.propertyType}
              </h5>
              <div className="flex items-center justify-start gap-1 rounded-xl bg-secondary-50 px-2 py-1 text-[1rem] font-semibold lg:text-[1.5625rem]">
                <FaStar color="#FFB800" size="24" />

                <p className="text-[#363C91] underline">
                  {currentProperty?.rating}
                </p>
                <p className="text-shade-200">|</p>

                <button
                  onClick={() => {
                    setOpenAllRatings(false);
                    setOpenRatingsForm(true);
                  }}
                  className="appearance-none whitespace-nowrap text-lg text-primary 2xl:text-2xl"
                >
                  Rate
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-xl font-semibold">
              ( {currentProperty?.ratingCount} ) Reviews
            </p>

            <ReviewSummary className="border-secondary-50" />

            <CustomScroll className="flex flex-col gap-14">
              {mockReviewData.map((r, index) => (
                <AllReviewCard key={index} data={r} index={index} />
              ))}
            </CustomScroll>
          </div>
        </div>
      </SlideEnter>
    </div>
  );
}

export default AllReviewsData;
