import { useAssets } from "@/lib/custom-hooks/useAssets";
import Link from "next/link";
import { getCurrentYear } from "@/lib/utils/numberManipulation";
import legal from "@/enum/about/legal";

export const LoginFooter = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-base font-semibold">
      <div className="flex flex-wrap items-center justify-center gap-4 text-center">
        <p className="text-[#B0B0B0]">
          By signing in, you agree to the following:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 min-[482px]:divide-x">
          <Link href="/terms-of-service" className="text-white underline">
            {legal.websiteName} terms and conditions
          </Link>
          <Link
            href="/privacy"
            className="text-white underline min-[482px]:pl-4"
          >
            {legal.websiteName} privacy policy
          </Link>
        </div>
      </div>
      {/* <div className="flex flex-col flex-wrap items-center justify-center gap-2 text-[#B0B0B0] md:flex-row">
        <div className="mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-4 divide-x-1 divide-[#B0B0B0] text-center">
          <span>
            Copyright © {getCurrentYear()} {legal.companyName}{" "}
          </span>
          <span className="inline-block pl-2"> {legal.copyrightNotice}</span>
        </div>
      </div> */}
    </div>
  );
};
