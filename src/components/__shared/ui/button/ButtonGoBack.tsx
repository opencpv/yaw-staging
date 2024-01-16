import Image from "next/image";
import React from "react";
import { poppins400 } from "@/styles/font";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Button from "./Button";

type Props = {
  onClick?: () => void;
  className?: string;
};

const ButtonGoBack = ({ onClick, className }: Props) => {
  const { icons } = useAssets();

  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Button
        variant="ghost"
      onClick={() => {
        if (!onClick) {
          handleGoBack()
        } else {
          onClick()
        }
      }}
      className={cn(
        `flex items-center justify-center gap-4 font-normal ${poppins400}
    text-white w-fit`,
        className
      )}
    >
      <Image src={icons.ArrowIcon} alt="back icon" />
      <p className="text-lg ">Go back</p>
    </Button>
  );
};

export default ButtonGoBack;
