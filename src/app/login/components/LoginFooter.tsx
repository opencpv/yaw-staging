import { montserat } from "@/styles/font";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import Link from "next/link";

export const LoginFooter = () => {
  const { icons } = useAssets();
  return (
    <div className="flex items-center justify-center">
      <div
        className={`${montserat.className} font-semibold gap-x-2 gap-y-4 text-sm flex flex-col fhd:flex-row items-center`}
      >
        <div className="text-[#B0B0B0] flex flex-wrap items-center gap-2 order-2 fhd:order-1">
          <p className={`text-center mx-auto`}>
            Copyright © {new Date().getFullYear()} SBG DIGITAL LLC {new Date().getFullYear()}
          </p>
          <span className="hidden min-[460px]:inline-block">|</span>
          <p className="mx-auto text-center">All rights reserved</p>
        </div>
        <div className="flex flex-wrap items-center order-1 gap-4 fhd:order-2">
          <Link href={`mailto: contact@contact.com`} className="flex items-center gap-2 mx-auto">
            <Image src={icons.MailIcon} alt="email icon" />
            <p className="text-[#fff]">contact@contact.com</p>
          </Link>
          <Link href={`tel:+233 25 898 2889`} target="_blank" className="flex items-center gap-2 mx-auto">
            <Image src={icons.PhoneIcon} alt="email icon" />
            <p className="text-[#fff]">(+233) 25 898 2889</p>
          </Link>
        </div>
      </div>
      {/* <footer
        className={`${montserat.className} px-[14px] font-semibold uppercase lg:hidden flex flex-wrap justify-center gap-[5px] text-[15px]`}
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
      </footer> */}
    </div>
  );
};
