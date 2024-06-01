import Feedback from "@/components/__shared/ui/feedback/Feedback";
import { LowerCase } from "@/lib/utils/stringManipulation";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import Link from "next/link";
import React, { LegacyRef, forwardRef } from "react";
import ReportFraud from "@/components/__shared/ui/links/ReportFraud";
import HowToLink from "@/components/__shared/ui/links/HowToLink";

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
        <React.Fragment key={index}>
          {LowerCase(r?.name) === "how to" ? (
            <HowToLink
              className="bottomLink text-2xl transition-all"
              onClick={() => {
                setToggle(false);
              }}
            />
          ) : LowerCase(r?.name) === "report fraud" ? (
            <ReportFraud
              className="bottomLink text-2xl transition-all"
              onClick={() => {
                setToggle(false);
              }}
            />
          ) : LowerCase(r?.name) === "feedback" ? (
            <Feedback data={{}}>
              <button
                className="bottomLink text-2xl transition-all"
                onClick={() => {
                  setToggle(false);
                }}
              >
                Feedback
              </button>
            </Feedback>
          ) : (
            <Link
              href={r?.url}
              className="bottomLink text-2xl transition-all"
              onClick={() => setToggle(false)}
            >
              {r?.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default forwardRef(MenuBottomLinks);
