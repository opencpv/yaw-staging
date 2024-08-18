import Feedback from "@/components/__shared/ui/feedback/Feedback";
import { LowerCase } from "@/lib/utils/stringManipulation";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import Link from "next/link";
import React, { LegacyRef, forwardRef } from "react";
import ReportFraud from "@/components/__shared/ui/links/ReportFraud";
import HowToLink from "@/components/__shared/ui/links/HowToLink";
import { useQuery } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useContactStore } from "@/store/contact/useContactStore";
import { useFaqHowToSwitchStore } from "@/store/faq/useFaqStore";

type Props = {
  links: any[];
};

const MenuBottomLinks = (props: Props, ref: LegacyRef<HTMLDivElement>) => {
  const pathname = usePathname();
  const { activeKey: activeContactKey } = useContactStore();
  const { activePage: activeFaqKey } = useFaqHowToSwitchStore() 
  const { setToggle } = useMenuStore();

  const { data } = useQuery({
    queryKey: ["feedback", "global"],
    queryFn: async () => {
      const res = await fetch("/api/global/feedback");

      if (!res.ok) {
        throw new Error("Failed to fetch feedback");
      }

      const data = await res.json();

      return data;
    },
  });

  return (
    <div
      className="mt-10 hidden h-fit items-center justify-center gap-10 bg-[#305A61] py-10 text-2xl font-semibold text-white lg:flex"
      ref={ref}
    >
      {props.links.map((r, index) => (
        <React.Fragment key={index}>
          {LowerCase(r?.name) === "how to" ? (
            <HowToLink
              className={cn(
                "transition-all hover:scale-110 hover:text-accent-100 ",
                {
                  "text-accent": pathname?.includes(r?.url) && activeFaqKey === "how to",
                },
              )}
              onClick={() => {
                setToggle(false);
              }}
            />
          ) : LowerCase(r?.name) === "report fraud" ? (
            <ReportFraud
              className={cn(
                "transition-all hover:scale-110 hover:text-accent-100 ",
                {
                  "text-accent":
                    pathname?.includes(r?.url) && activeContactKey === "report",
                },
              )}
              onClick={() => {
                setToggle(false);
              }}
            />
          ) : LowerCase(r?.name) === "feedback" ? (
            <Feedback data={data}>
              <button className="transition-all hover:scale-110 hover:text-accent-100 ">
                Feedback
              </button>
            </Feedback>
          ) : (
            <Link
              href={r?.url}
              className={cn(
                "transition-all hover:scale-110 hover:text-accent-100 ",
                {
                  "text-accent": pathname?.includes(r?.url),
                },
              )}
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
