import ProfileLottie from "@/components/__shared/lotties/profile-lottie";
import React from "react";
import { PiUserLight } from "react-icons/pi";

type Props = {};

const NoProfileUpload = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-3 text-shade-200">
      {/* <PiUserLight size={32} /> */}
      <ProfileLottie />
      <p>Upload your photo</p>
    </div>
  );
};

export default NoProfileUpload;
