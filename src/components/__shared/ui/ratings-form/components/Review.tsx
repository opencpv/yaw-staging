import dynamic from "next/dynamic";
const FramerWrapper = dynamic(
  () => import("@/components/__shared/hoc/FramerWrapper"),
);

function Review() {
  return (
    <FramerWrapper className="flex w-full flex-col items-center gap-4">
      <div className="flex w-full flex-col items-start gap-1">
        <p className="text-shade-900">Your Review</p>

        <textarea
          name="review"
          placeholder="What did you like or dislike ? What did you use this product for?"
          id=""
          className="border-1 h-[14.75rem] w-full resize-none appearance-none rounded-md border-shade-50 p-5 focus:border-2 focus:border-primary focus:outline-none focus-visible:!border-primary"
        ></textarea>
      </div>
    </FramerWrapper>
  );
}

export default Review;
