import Feedback from "@/components/feedback/Feedback";
import { LowerCase } from "@/lib/utils/stringManipulation";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import Link from "next/link";
import React, { LegacyRef, forwardRef } from "react";
import ReportLink from "@/components/__shared/ReportLink";
import HowToLink from "@/components/__shared/HowToLink";

type Props = {
  links: any[];
};

const MenuBottomLinks = (props: Props, ref: LegacyRef<HTMLDivElement>) => {
  const { setToggle } = useMenuStore();

  return (
    <div
      className="mt-10 hidden h-fit items-center justify-center gap-10 bg-[#305A61] py-10 lg:flex"
      ref={ref}
    >
      {props.links.map((r, index) => (
        <>
          {LowerCase(r?.name) === "how to" ? (
            <HowToLink
              key={index}
              className="bottomLink text-2xl transition-all"
              onClick={() => {
                setToggle(false);
              }}
            />
          ) : LowerCase(r?.name) === "report fraud" ? (
            <ReportLink
              key={index}
              className="bottomLink text-2xl transition-all"
              onClick={() => {
                setToggle(false);
              }}
            />
          ) : LowerCase(r?.label) === "feedback" ? (
            <Feedback key={index}>
              <h2 className="font-[400]">Feedback</h2>
            </Feedback>
          ) : (
            <Link
              key={index}
              href={r?.url}
              className="bottomLink text-2xl transition-all"
              onClick={() => setToggle(false)}
            >
              {r?.name}
            </Link>
          )}
        </>
      ))}
      <Feedback>
        <div className="bottomLink text-2xl transition-all">Feedback</div>
      </Feedback>
    </div>
  );
};

export default forwardRef(MenuBottomLinks);
