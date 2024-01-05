import Image from "next/image";
import React from "react";
import BlockUserPopOver from "./BlockUserPopOver";
import { useRouter } from "next/navigation";
import { useAssets } from "@/lib/custom-hooks/useAssets";

type Props = {
  userName: string;
};

const UsernameDisplayBar = ({ userName }: Props) => {
  const router = useRouter();
  const { icons } = useAssets();
  return (
    <div className="sticky top-0 z-40 gap-x-4 flex items-center justify-between p-4 text-white rounded-xl bg-primary-400">
      <Image
        src={icons.ArrowIcon}
        alt="go back"
        onClick={() => router.back()}
        className="inline-flex text-3xl lg:hidden"
      />
      <h2 className="text-xl">{userName}</h2>
      <BlockUserPopOver />
    </div>
  );
};

export default UsernameDisplayBar;
