import Image from "next/image";
import React from "react";
import BlockUserPopOver from "./BlockUserPopOver";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Button from "@/components/__shared/ui/button/Button";

type Props = {
  userName: string;
};

const UsernameDisplayBar = ({ userName }: Props) => {
  const { icons } = useAssets();
  return (
    <div className="sticky top-0 z-40 flex items-center justify-between gap-x-4 rounded-xl bg-primary-400 p-4 text-white">
      <Button variant="ghost" href="/dashboard/messages">
        <Image
          src={icons.ArrowIcon}
          alt="back"
          className="inline-flex text-3xl lg:hidden"
        />
      </Button>
      <h2 className="text-xl">{userName}</h2>
      <BlockUserPopOver />
    </div>
  );
};

export default UsernameDisplayBar;
