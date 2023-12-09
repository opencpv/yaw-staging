import React from "react";

type Props = {
  filled: boolean;
};

function CaThumbsDown({ filled }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="53"
      height="53"
      fill="none"
      viewBox="0 0 53 53">
      <g clipPath="url(#clip0_7204_100381)">
        <path
          stroke={filled ? "red" : "#B0B0B0"}
          d="M22.59 4.25A9.27 9.27 0 0127.726 5.8s0 0 0 0l3.91 2.61h0a9.25 9.25 0 014.114 7.699v11.294a9.284 9.284 0 01-3.469 7.227h-.001l-.75.598h0a15.09 15.09 0 00-5.378 8.845s0 0 0 0l-.233 1.157h0a4.38 4.38 0 01-5.15 3.437 4.38 4.38 0 01-3.437-5.15l.233-1.157v-.001a23.714 23.714 0 012.865-7.48l.448-.755H5.375a4.374 4.374 0 01-2.014-8.258l.678-.352-.594-.48a4.375 4.375 0 011.912-7.703l.705-.134-.37-.615a4.376 4.376 0 01-.63-2.27 4.368 4.368 0 013.016-4.156l.429-.139-.094-.44a4.6 4.6 0 01-.1-.953 4.376 4.376 0 014.374-4.375h9.903zM49.25 32.5h-6.5A2.746 2.746 0 0140 29.75V7a2.747 2.747 0 012.75-2.75h6.5A2.747 2.747 0 0152 7v22.75a2.746 2.746 0 01-2.75 2.75z"></path>
      </g>
      <defs>
        <clipPath id="clip0_7204_100381">
          <path
            fill={filled ? "red" : "blue"}
            d="M0 0H52V52H0z"
            transform="rotate(180 26.25 26.25)"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default CaThumbsDown;
