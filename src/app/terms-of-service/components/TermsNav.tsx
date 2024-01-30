"use client";
import fetchFaqData from "@/app/faq/lib/fetchFaqData";
import groupByCategory from "@/app/faq/lib/groupFAQ";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import { useEffect, useState } from "react";
import fetchTermsData from "../lib/fetchTermsData";
import Link from "next/link";
import { openSans } from "@/styles/font";
import { usePathname } from "next/navigation";
import Logo from "@/components/__shared/Logo";

const TermsNav = ({
  data,
  primary = true,
}: {
  data: any;
  primary?: boolean;
}) => {
  const { icons } = useAssets();
  const [categories, setCategories] = useState<any[]>();
  const path = usePathname();

  useEffect(() => {
    setCategories(data.termCategories);
  }, [data, path]);

  return (
    <nav
      className={` flex w-full items-center justify-between px-4 md:px-[30px] h-[80px] 2xl:h-[90px] ${
        primary ? "" : "bg-[#333333]"
      }`}
    >
     
      <Link href="/" className="w-full h-full flex items-center">
       <div className="relative w-full max-w-[56px] lg:max-w-[72px] aspect-[56/46] md:aspect-[72/58]">
          <Image
            src={icons.Logo}
            alt="RentRightGH logo"
            fill
            quality={100}
            
          />
       </div>
      </Link>{" "}
      <div className=" hidden md:flex md:gap-[50px]">
        <Link
          href={`/terms-of-service`}
          className={`${openSans.className} ${
            path == "/terms-of-service" ? " " : "opacity-50"
          } lg:text-4 font-semibold text-[#fff] `}
        >
          Home
        </Link>
        {categories &&
          categories.map((category: any, index) => (
            <Link
              key={index}
              href={`/terms-of-service/${category.slug}`}
              className={`${openSans.className} ${
                path == `/terms-of-service/${category.slug}`
                  ? " "
                  : "opacity-50"
              } lg:text-4 font-semibold text-[#fff] transition-all duration-100 hover:opacity-100  whitespace-nowrap`}
            >
              {category.title}
            </Link>
          ))}
      </div>
      <Image src={icons.Hamburger} alt="hamburger" className="md:hidden" />
    </nav>
  );
};

export default TermsNav;
