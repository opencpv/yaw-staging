import CANoReviews from "./icons/CaNoReviews";

export default function NoReviews() {
  return (
    <div className="flex flex-col gap-[34px] items-center justify-center w-full h-full min-h-[50vh] max-h-[495px] bg-[#F7F7F7]">
      <CANoReviews />
      <p className="text-[1.25rem] font-semibold text-shade-200">
        You have no reviews
      </p>
    </div>
  );
}
