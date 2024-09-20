import CaREviewsReply2 from "@/app/dashboard/renter/my-reviews/components/icons/CaReviewsReply2";
import ReviewStarsFixed from "@/app/dashboard/renter/my-reviews/components/ReviewStarsFixed";
import Image from "next/image";
import ReviewBanner from "./review-banner";
import { useRatingsModalStore } from "@/store/modal/useRatingsModalStore";

type Props = {
  data: any;
  index: number;
  withBanner?: boolean;
};

export default function ReviewCard({ withBanner, data }: Props) {
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
    <div className="flex w-full max-w-[1103px] flex-col items-start gap-6 pb-8 border-b-[1px]">
      {withBanner && (
        <ReviewBanner
          onRateClick={() => {
            setCurrentProperty(data)
          }}
          image={data?.image}
          name={data?.name}
          rating={data?.rating}
          variant_="person"
   
        />
      )}
      <div className={` ${withBanner && "ml-5 lg:ml-10"} flex flex-col gap-6`}>
        <div
          className={`flex w-full flex-col items-start gap-4 border-l-4 border-l-[#00974A] pl-4`}
        >
          <div className="flex w-full items-center justify-start gap-4">
            <div
              className={`relative aspect-square h-full w-full max-w-[100px] overflow-hidden rounded-full`}
            >
              <Image
                fill
                alt="Person image"
                src={data?.image}
                objectFit="cover"
              />
            </div>
            <div className="flex w-full flex-col gap-1 2xl:gap-2">
              <h3 className="">{data?.name}</h3>
              <p className="text-sm 2xl:text-base">{data?.date}</p>
              {<ReviewStarsFixed rating={data?.ratings} />}
            </div>
          </div>

          <div className="flex w-full gap-1">
            <p className="!max-w-full text-base text-[#333]">{data?.review}</p>
          </div>
        </div>

        {data?.replies && (
          <div className="flex flex-col items-start justify-center gap-[1.3125rem]  pl-2">
            {data?.replies && (
              <div className="flex items-center gap-1">
                <p className="text-base font-semibold text-primary">
                  Response from John Doe
                </p>
                <CaREviewsReply2 />
              </div>
            )}
            {data?.replies?.map((r: any, index: number) => (
              <div
                className="flex w-full items-center justify-start gap-2"
                key={index}
              >
                <div className="relative aspect-square h-full w-full max-w-[50px] overflow-hidden rounded-full">
                  <Image
                    fill
                    alt="Person image"
                    src={r?.image}
                    objectFit="cover"
                  />
                </div>
                <div>
                  <p className="!max-w-full text-base">{r?.reply}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
