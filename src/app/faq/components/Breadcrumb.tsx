import { useAssets } from "@/lib/custom-hooks/useAssets";
import { openSans } from "@/lib/utils/fonts";
import Image from "next/image";

const BreadCrumb = ({ link }: { link: string }) => {
  const { icons } = useAssets();
  return (
    <div
      className={`flex items-center px-[39px] md:px-[47px] lg:px-[51px] mb-[63px] md:mb-[81px] lg:mb-[100px] text-[20px] text-[#9E9E9E] ${openSans.className}`}
    >
      Home
      <Image src={icons.Seperator} alt="seperator icon" />
      <span className="text-[#000] text-[25px]">{link}</span>
    </div>
  );
};

export default BreadCrumb;
