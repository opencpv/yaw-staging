function CaAboutStar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="190"
      height="190"
      viewBox="0 0 190 190"
      fill="none"
    >
      <g filter="url(#filter0_d_13302_103171)">
        <path
          d="M81.9688 114.667L86.8125 98.8333L74 89.6667H89.8333L94.8333 73L99.8333 89.6667H115.667L102.854 98.8333L107.698 114.667L94.8333 104.875L81.9688 114.667Z"
          fill="#F2B94E"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_13302_103171"
          x="0"
          y="0"
          width="189.668"
          height="189.668"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="10"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_13302_103171"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="32" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_13302_103171"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_13302_103171"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default CaAboutStar;
