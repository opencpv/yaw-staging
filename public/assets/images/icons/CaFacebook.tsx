import React from 'react';

type Props = {
  width: string | number;
  height: string | number;
};

function CaFacebook(props: Props) {
  return (
    <svg
      viewBox="0 0 104 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="52.3999" cy="51.5191" r="51.48" fill="#3B429F" />
      <path
        d="M57.0939 55.053H63.1712L65.6021 45.3294H57.0939V40.4676C57.0939 37.9638 57.0939 35.6058 61.9557 35.6058H65.6021V27.438C64.8096 27.3335 61.8172 27.0977 58.657 27.0977C52.0571 27.0977 47.3703 31.1257 47.3703 38.5229V45.3294H40.0776V55.053H47.3703V75.7157H57.0939V55.053Z"
        fill="#ECECED"
      />
    </svg>
  );
}

export default CaFacebook;
