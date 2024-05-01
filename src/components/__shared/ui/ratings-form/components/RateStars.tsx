import { useState } from "react";
import CaReviewStar from "./icons/CaReviewStar";

type Props = {
  label: string;
};

function RateStars({ label }: Props) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div>
      <p className="text-[#545454] flex flex-col gap-2.5 text-[1.25rem] font-semibold text-center">
        {label}
      </p>{" "}
      <div className="flex ">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className="pr-6"
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}>
              <CaReviewStar fill={hover >= index} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default RateStars;
