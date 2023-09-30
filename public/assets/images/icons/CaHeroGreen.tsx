type Props = {
  width?: string;
  height?: string;
};

const CaHeroGreen = ({ width, height }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 854 351"
      fill="none"
    >
      <path
        d="M0 0H633.087L854 351H0V0Z"
        fill="url(#paint0_linear_1573_4805)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1573_4805"
          x1="427"
          y1="0"
          x2="427"
          y2="351"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#073B3A" />
          <stop offset="1" stopColor="#092929" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CaHeroGreen;
