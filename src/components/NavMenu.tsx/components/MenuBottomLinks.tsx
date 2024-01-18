import Feedback from "@/components/feedback/Feedback";
import { LowerCase } from "@/lib/utils/stringManipulation";
import { useContactStore } from "@/store/contact/useContactStore";
import { useFaqHowToSwitchStore } from "@/store/faq/useFaqStore";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
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
  const { setToggle } = useMenuStore();

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
              onClick={() => {
                setFaqActivePage("how to");
                setToggle(false);
              }}
            >
              {r?.name}
            </Link>
          ) : LowerCase(r?.name) === "report fraud" ? (
            <Link
              key={index}
              href={r?.url}
              className="text-2xl transition-all bottomLink"
              onClick={() => {
                setContactTabActiveKey("report");
                setToggle(false);
              }}
            >
              {r?.name}
            </Link>
          ) : LowerCase(r?.label) === "feedback" ? (
            <Feedback key={index}>
              <h2 className="font-[400]">Feedback</h2>
            </Feedback>
          ) : (
            <Link
              key={index}
              href={r?.url}
              className="text-2xl transition-all bottomLink"
              onClick={() => setToggle(false)}
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
