"use client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import { useTermsMenuStore } from "./NavMenu.tsx/components/useTermsMenuStore";

const TermsNav = ({
  data,
  primary = true,
}: {
  data: any;
  primary?: boolean;
}) => {
  const { icons, images } = useAssets();
  const [categories, setCategories] = useState<any[]>();
  const path = usePathname();
  const { setTermsMenuToggle } = useTermsMenuStore();
  const { setToggle } = useMenuStore();

  useEffect(() => {
    setCategories(data.termCategories);
  }, [data, path]);

  return (
    <nav
      className={`sticky top-0 flex h-[80px] w-full items-center justify-between px-4 md:px-[30px] 2xl:h-[90px]  ${
        primary ? "" : "bg-[#333333] "
      }`}
    >
      <Link href="/" className="flex h-full w-fit items-center ">
        <div className="relative aspect-[56/46] w-[56px] max-w-[56px] md:aspect-[72/58] lg:max-w-[72px]">
          <Image src={images.Logo} alt="RentRightGH logo" fill quality={100} />
        </div>
      </Link>{" "}
      <div className=" hidden w-full justify-center md:flex md:gap-[50px]">
        <Link
          href={`/terms-of-service`}
          className={`${
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
              className={`${
                path == `/terms-of-service/${category.slug}`
                  ? " "
                  : "opacity-50"
              } lg:text-4 whitespace-nowrap font-semibold text-[#fff] transition-all duration-100  hover:opacity-100 `}
            >
              {category.title}
            </Link>
          ))}
      </div>
      <div className="hidden md:flex">
        <button
          onClick={() => {
            setToggle(true);
          }}
        >
          <Image src={icons.Hamburger} alt="menu" />
        </button>
      </div>
      
      <div className="md:hidden ">
        <button
          onClick={() => {
            setTermsMenuToggle(true);
          }}
        >
          <Image src={icons.Hamburger} alt="menu" />
        </button>
      </div>
    </nav>
  );
};

export default TermsNav;
