import React from "react";

type Props = {
  width: string | number;
  height: string | number;
};

function CaTwitter(props: Props) {
  return (
    <svg
      viewBox="0 0 104 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="51.5737" cy="51.5191" r="51.48" fill="white" />
      <g clipPath="url(#clip0_7349_53311)">
        <path
          d="M68.6546 78H77.506L58.1727 55.9289L81 26H63.0643L49.0884 44.1422L33.0161 26H24.1647L44.8956 49.5733L23 78H41.4016L54.0964 61.36L68.6546 78ZM65.51 31.3156H70.4016L38.7229 73.0311H33.3655L65.51 31.3156Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_7349_53311">
          <rect
            width="58"
            height="52"
            fill="white"
            transform="matrix(1 0 0 -1 23 78)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default CaTwitter;
