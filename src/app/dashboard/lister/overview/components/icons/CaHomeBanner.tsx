import React from "react";

type Props = {
  size?: number;
};

const CaHomeBanner = (props: Props) => {
  return (
    <svg
      width="65"
      height="64"
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="aspect-square"
    >
      <rect
        x="0.375"
        width="64"
        height="64"
        fill="url(#pattern0_15333_129301)"
      />
      <defs>
        <pattern
          id="pattern0_15333_129301"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_15333_129301" transform="scale(0.0078125)" />
        </pattern>
        <image
          id="image0_15333_129301"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default CaHomeBanner;
