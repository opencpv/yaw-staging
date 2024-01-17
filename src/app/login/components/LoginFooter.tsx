import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import Link from "next/link";
import { getCurrentYear } from "@/lib/utils/numberManipulation";
import legal from "@/enum/about/legal";

export const LoginFooter = () => {
  const { icons } = useAssets();
  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`font-semibold gap-x-5 gap-y-4 flex-wrap justify-center text-sm flex flex-col max-lg:flex-row min-[1460px]:flex-row items-center`}
      >
        <div className="text-[#B0B0B0] flex flex-col justify-center flex-wrap items-center gap-2 order-2 md:flex-row min-[1460px]:order-1">
          <div className="text-center mx-auto flex flex-wrap justify-center items-center gap-x-2 gap-y-4 divide-x-1 divide-[#B0B0B0]">
            <span>
              Copyright © {getCurrentYear()} {legal.companyName}{" "}
            </span>
            <span className="inline-block pl-2"> {legal.copyrightNotice}</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 order-1 min-[1460px]:order-2">
          <Link
            href={`mailto: ${legal.email}`}
            className="flex items-center gap-2 mx-auto"
          >
            <Image src={icons.MailIcon} alt="email icon" />
            <p className="text-[#fff]">{legal.email}</p>
          </Link>
          <Link
            href={`tel:${legal.telephoneFormatted}`}
            target="_blank"
            className="flex items-center gap-2 mx-auto"
          >
            <Image src={icons.PhoneIcon} alt="email icon" />
            <p className="text-[#fff]">{legal.telephone}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
