import Feedback from "@/components/feedback/Feedback";
import { LowerCase } from "@/lib/utils/stringManipulation";
import { useContactStore } from "@/store/contact/useContactStore";
import { useFaqHowToSwitchStore } from "@/store/faq/useFaqStore";
import Link from "next/link";
import React, { LegacyRef, forwardRef } from "react";

type Props = {
  links: any[];
};

const MenuBottomLinks = (props: Props, ref: LegacyRef<HTMLDivElement>) => {
  const setContactTabActiveKey = useContactStore((state) => state.setActiveKey);
  const setFaqActivePage = useFaqHowToSwitchStore(
    (state) => state.setActivePage
  );

  return (
    <div
      className="hidden lg:flex h-fit py-10 mt-10 bg-[#305A61] justify-center items-center gap-10"
      ref={ref}
    >
      {props.links.map((r, index) => (
        <>
          {LowerCase(r?.name) === "how to" ? (
            <Link
              key={index}
              href={r?.url}
              className="text-2xl transition-all bottomLink"
              onClick={() => setFaqActivePage("how to")}
              >
              {r?.name}
            </Link>
          ) : LowerCase(r?.name) === "report fraud" ? (
            <Link
            key={index}
            href={r?.url}
            className="text-2xl transition-all bottomLink"
            onClick={() => setContactTabActiveKey("report")}
            >
              {r?.name}
            </Link>
          ) : (
            <Link
              key={index}
              href={r?.url}
              className="text-2xl transition-all bottomLink"
            >
              {r?.name}
            </Link>
          )}
        </>
      ))}
      <Feedback>
        <div className="text-2xl transition-all bottomLink">Feedback</div>
      </Feedback>
    </div>
  );
};

export default forwardRef(MenuBottomLinks);
