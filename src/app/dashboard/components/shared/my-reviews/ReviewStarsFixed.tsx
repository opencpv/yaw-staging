import { useEffect, useState } from "react";
import CaREviewStarFull from "./icons/CaReviewStarFull";
import CaReviewStarHalf from "./icons/CaReviewStarHalf";
import CaReviewStarEmpty from "./icons/CaReviewStarEmpty";

type Props = {
  rating: number;
};

const starOptions = [
  { 0.5: [0.5, 0, 0, 0, 0] },
  {
    1: [1, 0, 0, 0, 0],
  },
  {
    1.5: [1, 0.5, 0, 0, 0],
  },
  {
    2: [1, 1, 0, 0, 0],
  },
  {
    2.5: [1, 1, 0.5, 0, 0],
  },
  {
    3: [1, 1, 1, 0, 0],
  },
  {
    3.5: [1, 1, 1, 0.5, 0],
  },
  {
    4: [1, 1, 1, 1, 0],
  },
  {
    4.5: [1, 1, 1, 1, 0.5],
  },
  {
    5: [1, 1, 1, 1, 1],
  },
];

export default function ReviewStarsFixed({ rating }: Props) {
  const [stars, setStars] = useState<any>([]);

  useEffect(() => {
    const roundedRating = Math.round(rating * 2) / 2;
    // alert(roundedRating)

    const selectedStars: any = starOptions.find(
      (option: any) => option[roundedRating]
    );
    if (selectedStars) {
      setStars(selectedStars[roundedRating]);
    } else {
      setStars(selectedStars[3.5])
    }
  }, [rating]);

  return (
    <div className="flex gap-1">
      {stars?.map((r: number, index: number) => {
        if (r == 1) {
          return <CaREviewStarFull key={index} />;
        }
        if (r == 0.5) {
          return <CaReviewStarHalf key={index} />;
        }
        if (r == 0) {
          return <CaReviewStarEmpty key={index} />;
        }
      })}
    </div>
  );
}
