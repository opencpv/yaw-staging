import { JSX, SVGProps } from "react";

const CaBlueLoader = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_15527_83373)">
        <path
          d="M4 1.33203L4.00667 5.33203L6.66667 7.9987L4.00667 10.672L4 14.6654H12V10.6654L9.33333 7.9987L12 5.3387V1.33203H4ZM10.6667 10.9987V13.332H5.33333V10.9987L8 8.33203L10.6667 10.9987Z"
          fill="#2E5AAC"
        />
      </g>
      <defs>
        <clipPath id="clip0_15527_83373">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CaBlueLoader;
