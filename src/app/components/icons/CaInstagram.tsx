import React from 'react';

type Props = {
  width: string | number;
  height: string | number;
};

function CaInstagram(props: any) {
  return (
    <svg
      viewBox="0 0 103 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="51.48"
        cy="51.5191"
        r="51.48"
        fill="url(#paint0_radial_3536_15752)"
      />
      <g clip-path="url(#clip0_3536_15752)">
        <rect
          width="58.3442"
          height="58.3442"
          transform="translate(22.6506 22.1914)"
          fill="url(#paint1_radial_3536_15752)"
        />
        <path
          d="M67.3204 22.25H36.3251C28.7729 22.25 22.6506 28.3723 22.6506 35.9244V66.9198C22.6506 74.472 28.7729 80.5942 36.3251 80.5942H67.3204C74.8726 80.5942 80.9949 74.472 80.9949 66.9198V35.9244C80.9949 28.3723 74.8726 22.25 67.3204 22.25Z"
          fill="url(#paint2_radial_3536_15752)"
        />
        <path
          d="M67.3204 22.25H36.3251C28.7729 22.25 22.6506 28.3723 22.6506 35.9244V66.9198C22.6506 74.472 28.7729 80.5942 36.3251 80.5942H67.3204C74.8726 80.5942 80.9949 74.472 80.9949 66.9198V35.9244C80.9949 28.3723 74.8726 22.25 67.3204 22.25Z"
          fill="url(#paint3_radial_3536_15752)"
        />
        <path
          d="M51.8243 28.6328C45.6348 28.6328 44.8578 28.6599 42.427 28.7705C40.0007 28.8817 38.3445 29.2657 36.8954 29.8293C35.3963 30.4114 34.1248 31.1902 32.8581 32.4573C31.5902 33.7243 30.8114 34.9958 30.2276 36.4942C29.6623 37.9437 29.2779 39.6006 29.1687 42.0258C29.06 44.4569 29.0315 45.234 29.0315 51.4238C29.0315 57.6135 29.0588 58.3879 29.1692 60.8188C29.2808 63.2451 29.6648 64.9013 30.228 66.3503C30.8105 67.8495 31.5893 69.121 32.8565 70.3877C34.1229 71.6555 35.3944 72.4361 36.8925 73.0182C38.3426 73.5818 39.9991 73.9658 42.4249 74.077C44.856 74.1876 45.6323 74.2147 51.8215 74.2147C58.0117 74.2147 58.7861 74.1876 61.217 74.077C63.6433 73.9658 65.3013 73.5818 66.7515 73.0182C68.25 72.4361 69.5197 71.6555 70.7859 70.3877C72.0538 69.121 72.8323 67.8495 73.4164 66.351C73.9766 64.9013 74.3613 63.2446 74.4753 60.8192C74.5844 58.3884 74.6129 57.6135 74.6129 51.4238C74.6129 45.234 74.5844 44.4573 74.4753 42.0262C74.3613 39.5999 73.9766 37.944 73.4164 36.4949C72.8323 34.9958 72.0538 33.7243 70.7859 32.4573C69.5183 31.1897 68.2504 30.4109 66.7501 29.8296C65.2972 29.2657 63.6401 28.8815 61.2138 28.7705C58.7827 28.6599 58.0088 28.6328 51.8172 28.6328H51.8243ZM49.7797 32.7399C50.3866 32.739 51.0637 32.7399 51.8243 32.7399C57.9096 32.7399 58.6307 32.7618 61.0338 32.871C63.2559 32.9726 64.4619 33.3439 65.2653 33.6559C66.329 34.0689 67.0872 34.5627 67.8844 35.3606C68.6821 36.1583 69.1757 36.9179 69.5899 37.9816C69.9019 38.7838 70.2736 39.9899 70.3748 42.212C70.4839 44.6146 70.5076 45.3361 70.5076 51.4185C70.5076 57.5009 70.4839 58.2227 70.3748 60.625C70.2731 62.8471 69.9019 64.0532 69.5899 64.8557C69.1769 65.9193 68.6821 66.6767 67.8844 67.4739C67.0868 68.2716 66.3294 68.7652 65.2653 69.1784C64.4629 69.4918 63.2559 69.8621 61.0338 69.9638C58.6312 70.0729 57.9096 70.0966 51.8243 70.0966C45.7387 70.0966 45.0174 70.0729 42.615 69.9638C40.3929 69.8612 39.1868 69.49 38.3828 69.1779C37.3193 68.7648 36.5595 68.2711 35.7618 67.4734C34.9641 66.6758 34.4705 65.918 34.0564 64.8539C33.7444 64.0514 33.3727 62.8453 33.2715 60.6232C33.1623 58.2206 33.1404 57.4991 33.1404 51.4128C33.1404 45.3268 33.1623 44.6089 33.2715 42.2063C33.3731 39.9842 33.7444 38.7781 34.0564 37.9747C34.4696 36.9111 34.9641 36.1515 35.762 35.3538C36.5597 34.5561 37.3193 34.0622 38.383 33.6484C39.1864 33.335 40.3929 32.9646 42.615 32.8625C44.7174 32.7675 45.5322 32.739 49.7797 32.7342V32.7399ZM63.9899 36.5241C62.4801 36.5241 61.2551 37.748 61.2551 39.2581C61.2551 40.768 62.4801 41.993 63.9899 41.993C65.4998 41.993 66.7248 40.768 66.7248 39.2581C66.7248 37.7482 65.4998 36.5232 63.9899 36.5232V36.5241ZM51.8243 39.7196C45.3608 39.7196 40.1203 44.9601 40.1203 51.4238C40.1203 57.8874 45.3608 63.1254 51.8243 63.1254C58.2879 63.1254 63.5266 57.8874 63.5266 51.4238C63.5266 44.9603 58.2875 39.7196 51.8238 39.7196H51.8243ZM51.8243 43.8267C56.0198 43.8267 59.4213 47.2278 59.4213 51.4238C59.4213 55.6193 56.0198 59.0208 51.8243 59.0208C47.6285 59.0208 44.2274 55.6193 44.2274 51.4238C44.2274 47.2278 47.6285 43.8267 51.8243 43.8267Z"
          fill="white"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_3536_15752"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(27.3487 110.929) rotate(-90) scale(102.041 94.9062)"
        >
          <stop stop-color="#FFDD55" />
          <stop offset="0.1" stopColor="#FFDD55" />
          <stop offset="0.5" stopColor="#FF543E" />
          <stop offset="0.921875" stopColor="#C837AB" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_3536_15752"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(15.4977 62.8379) rotate(-90) scale(57.8235 53.7804)"
        >
          <stop stopColor="#FFDD55" />
          <stop offset="0.1" stopColor="#FFDD55" />
          <stop offset="0.5" stopColor="#FF543E" />
          <stop offset="0.921875" stopColor="#C837AB" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_3536_15752"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(38.1483 85.0879) rotate(-90) scale(57.8235 53.7804)"
        >
          <stop stopColor="#FFDD55" />
          <stop offset="0.1" stopColor="#FFDD55" />
          <stop offset="0.5" stopColor="#FF543E" />
          <stop offset="0.921875" stopColor="#C837AB" />
        </radialGradient>
        <radialGradient
          id="paint3_radial_3536_15752"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12.8777 26.4528) rotate(78.681) scale(25.8474 106.544)"
        >
          <stop stopColor="#3771C8" />
          <stop offset="0.128" stopColor="#3771C8" />
          <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
        </radialGradient>
        <clipPath id="clip0_3536_15752">
          <rect
            width="58.3442"
            height="58.3442"
            fill="white"
            transform="translate(22.6506 22.1914)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default CaInstagram;
