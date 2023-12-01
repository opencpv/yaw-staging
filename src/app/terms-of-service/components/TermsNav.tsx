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
    console.log(data);
    setCategories(data.termCategories);
    console.log(path);
  }, [data, path]);

  return (
    <nav
      className={`w-full flex justify-between items-center w-max-[1728px] mx-auto md:px-[30px] px-4 py-4 ${
        primary ? "" : "bg-[#333333]"
      }`}
    >
      <Image src={icons.Logo} alt="logo" />
      <div className=" md:gap-[50px] hidden md:flex">
        <Link
          href={`/terms-of-service`}
          className={`${openSans.className} ${
            path == "/terms-of-service" ? " " : "opacity-50"
          } text-[#fff] lg:text-4 font-semibold `}
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
              } text-[#fff] lg:text-4 font-semibold hover:opacity-100 transition-all duration-100 `}
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
