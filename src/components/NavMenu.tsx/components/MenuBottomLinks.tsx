import Feedback from "@/components/feedback/Feedback";
import Link from "next/link";
import React, { LegacyRef, forwardRef } from "react";

type Props = {
  links: any[];
};

const MenuBottomLinks = (props: Props, ref: LegacyRef<HTMLDivElement>) => {
  return (
    <div className="hidden lg:flex h-fit py-10 mt-10 bg-[#305A61] justify-center items-center gap-10" ref={ref}>
      {props.links.map((r, index) => (
        <Link
          key={index}
          href={r?.url}
          className="text-2xl bottomLink transition-all"
        >
          {r?.name}
        </Link>
      ))}
      <Feedback>
        <div className="text-2xl bottomLink transition-all">Feedback</div>
      </Feedback>
    </div>
  );
};

export default forwardRef(MenuBottomLinks);
