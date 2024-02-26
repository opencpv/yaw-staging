import { useAssets } from "@/lib/custom-hooks/useAssets";
import { openSans } from "@/lib/utils/fonts";
import Image from "next/image";

const BreadCrumb = ({ link }: { link: string }) => {
  const { icons } = useAssets();
  return (
    <div
      className={`mb-[63px] flex items-center px-[39px] text-[20px] text-[#9E9E9E] md:mb-[81px] md:px-[47px] lg:mb-[100px] lg:px-[51px]`}
    >
      Home
      <Image src={icons.Seperator} alt="seperator icon" />
      <span className="text-[25px] text-[#000]">{link}</span>
    </div>
  );
};

export default BreadCrumb;
