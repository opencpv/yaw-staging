import { montserat } from "@/app/styles/font";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";

export const Footer = () => {
  const { icons } = useAssets();
  return (
    <>
      <footer
        className={`${montserat.className} hidden  font-semibold uppercase lg:flex w-full justify-center flex-wrap gap-[5px] text-[15px]`}
      >
        <p className={` text-[#B0B0B0] text-center`}>
          Copyright © 2023 SBG DIGITAL LLC 2023 | All rights reserved
        </p>
        <div className="flex items-center gap-[5px]">
          <Image src={icons.MailIcon} alt="email icon" />
          <p className="text-[#fff]">contact@contact.com</p>
        </div>
        <div className="flex items-center gap-[5px]">
          <Image src={icons.PhoneIcon} alt="email icon" />
          <p className="text-[#fff]">(+233) 25 898 2889</p>
        </div>
      </footer>
      <footer
        className={`${montserat.className} px-[14px]   font-semibold uppercase lg:hidden flex flex-wrap justify-center gap-[5px] text-[15px]`}
      >
        <div className="flex items-center gap-[5px]">
          <Image src={icons.MailIcon} alt="email icon" />
          <p className="text-[#fff]">contact@contact.com</p>
        </div>
        <div className="flex items-center gap-[5px]">
          <Image src={icons.PhoneIcon} alt="email icon" />
          <p className="text-[#fff]">(+233) 25 898 2889</p>
        </div>
        <p className={` text-[#B0B0B0] text-center col-span-2 font-normal`}>
          Copyright © 2023 SBG DIGITAL LLC 2023 | All rights reserved
        </p>
      </footer>
    </>
  );
};
