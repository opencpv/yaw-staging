import React, { Suspense } from "react";
import SideContent from "./SideContent";
import { socialLinks } from "@/enum/links/socials";
import Link from "next/link";
import SliderPaginationOnly from "@/components/__shared/ui/sliders/SliderPaginationOnly";
import SideContentCategories from "./SideContentCategories";
import Loader from "@/components/__shared/ui/loader/Loader";

type Props = {};

const SideContentGroup = (props: Props) => {
  return (
    <>
      {/* Follow us */}
      <SideContent title="Follow Us" className="mb-10">
        <div
          className="grid items-center gap-2"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
          }}
        >
          {socialLinks.coloured.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex flex-col items-center gap-2 rounded-md bg-gray-100 p-2 text-neutral-800"
            >
              <span className="w-[40px]">{link.icon}</span>
              <small>{link.name}</small>
            </Link>
          ))}
        </div>
      </SideContent>
      {/* Sponsors */}
      <SideContent title="Sponsors" className="mb-10">
        <SliderPaginationOnly
          images={[1, 2, 3].map((image) => ({
            src: "/assets/images/niceHome.png",
            name: "",
          }))}
          className="w-full"
        />
      </SideContent>
      {/* Category */}
      <SideContent
        title="Category"
        className="md:mb-10"
        classNames={{ body: "max-h-80 custom-scrollbar overflow-y-scroll" }}
      >
        <Suspense fallback={<Loader position="center" />}>
          <SideContentCategories />
        </Suspense>
      </SideContent>
    </>
  );
};

export default SideContentGroup;
