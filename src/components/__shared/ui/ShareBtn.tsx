import React from "react";
import { IoIosShareAlt } from "react-icons/io";

type Props = {
  shareData: { title?: string; text?: string; url: string };
  className?: string;
};

const ShareBtn = ({ className, shareData }: Props) => {
  const handleSharing = async () => {
    try {
      if (!navigator.share || !navigator.canShare) {
        return false;
      }

      await navigator.share(shareData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <IoIosShareAlt
      className={`cursor-pointer ${className}`}
      onClick={handleSharing}
    />
  );
};

export default ShareBtn;
