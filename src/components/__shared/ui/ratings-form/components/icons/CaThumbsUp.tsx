import React from "react";

type Props = {
  filled: boolean;
};

function CaThumbsUp({ filled }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="53"
      height="53"
      fill="none"
      viewBox="0 0 53 53">
      <g clipPath="url(#clip0_7204_100379)">
        <path
          fill={filled ? "#F2B94E" : "#B0B0B0"}
          d="M32.33 3.842a4.88 4.88 0 013.829 5.738l-.234 1.158A24.214 24.214 0 0133 18.375h14.625a4.874 4.874 0 012.245 9.201 4.875 4.875 0 01-2.133 8.583c.447.741.7 1.604.7 2.529a4.868 4.868 0 01-3.361 4.63 5.1 5.1 0 01.111 1.057 4.876 4.876 0 01-4.874 4.875H30.41a9.77 9.77 0 01-5.413-1.635l-3.91-2.61a9.75 9.75 0 01-4.337-8.115V25.596a9.784 9.784 0 013.656-7.617l.752-.6a14.59 14.59 0 005.2-8.55l.233-1.159a4.88 4.88 0 015.739-3.828zM3.75 20h6.5a3.246 3.246 0 013.25 3.25V46a3.247 3.247 0 01-3.25 3.25h-6.5A3.247 3.247 0 01.5 46V23.25A3.246 3.246 0 013.75 20z"></path>
      </g>
      <defs>
        <clipPath id="clip0_7204_100379">
          <path
            fill={filled ? "#F2B94E" : "#fff"}
            d="M0 0H52V52H0z"
            transform="translate(.5 .5)"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default CaThumbsUp;
