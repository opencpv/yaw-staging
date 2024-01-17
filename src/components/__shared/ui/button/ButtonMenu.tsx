import Image from "next/image";
import React from "react";
import { poppins400 } from "@/styles/font";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Button from "./Button";
import { useMenuStore } from "@/store/navmenu/useMenuStore";

type Props = {
  className?: string;
};

const ButtonMenu = ({ className }: Props) => {
  const { icons } = useAssets();
  const setToggle = useMenuStore((state) => state.setToggle);

  const router = useRouter();

  return (
    <Button
      variant="ghost"
      onClick={() => {
        setToggle(true);
        router.back()
      }}
      className={cn(
        `flex items-center justify-center gap-4 font-normal ${poppins400}`,
        className
      )}
    >
      <Image
        src={icons.ArrowIcon}
        alt="back icon"
        className="hidden min-[150px]:inline-block"
      />
      <p className="text-lg">Menu</p>
    </Button>
  );
};

export default ButtonMenu;
