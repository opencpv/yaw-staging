import { useRatingsModalStore } from "@/store/modal/useRatingsModalStore";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

type Props = {
  variant_: "property" | "person";
  lister?: boolean;
  name: string;
  rating: number;
  image: string;
  onRateClick?: () => void;
};
function ReviewBanner({
  variant_,
  lister,
  name,
  rating,
  image,
  onRateClick,
}: Props) {
  const {
    openRatingsForm,
    setOpenRatingsForm,
    openAllRatings,
    setOpenAllRatings,
    currentProperty,
    setCurrentProperty,
    variant,
  } = useRatingsModalStore();
  return (
    <div className="flex w-full items-center gap-4 rounded-2xl bg-[#E9ECEF] px-8 py-4">
      <div
        className={`relative aspect-[120/100] w-full max-w-[120px] overflow-hidden rounded-lg`}
      >
        <Image
          objectFit="cover"
          src={(currentProperty?.images?.[0] || image) ?? ""}
          fill
          alt="Image"
        />
      </div>

      <div className="flex w-full flex-col items-start justify-center gap-1">
        <div className="flex items-center justify-center gap-2.5">
          <h3 className=" font-semibold ">
            {currentProperty?.name || name}
          </h3>

          {(variant_ == "person" || variant == "person") && lister && (
            <div className="flex items-center justify-center rounded-2xl bg-primary px-4 py-1 text-base">
              Lister
            </div>
          )}
        </div>
        <div className="flex items-center justify-start gap-1 rounded-xl bg-secondary-50 px-2 py-1 text-[1rem] font-semibold lg:text-[1.5625rem]">
          <FaStar color="#FFB800" size="24" />

          <p className="text-[#363C91] underline">
            {currentProperty?.rating || rating}
          </p>
          <p className="text-shade-200">|</p>

          <button
            onClick={() => {
              setOpenAllRatings(false);
              setOpenRatingsForm(true);
              // onRateClick();
            }}
            className="appearance-none whitespace-nowrap text-lg text-primary 2xl:text-xl"
          >
            Rate
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewBanner;
