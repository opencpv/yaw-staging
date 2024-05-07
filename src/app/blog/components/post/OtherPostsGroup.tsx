import React from "react";
import OtherPosts from "../OtherPosts";
import SideContent from "./SideContent";
import { socialLinks } from "@/enum/links/socials";
import Link from "next/link";

type Props = {};

const OtherPostsGroup = (props: Props) => {
  return (
    <>
      {/* Follow us */}
      <SideContent title="Follow Us" className="mb-5">
        <div className="flex flex-wrap items-center gap-2">
          {socialLinks.coloured.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex min-w-fit flex-1 flex-col items-center gap-2 rounded-sm bg-shade-50 p-2 text-neutral-800"
            >
              {link.icon}
              <small>{link.name}</small>
            </Link>
          ))}
        </div>
      </SideContent>
      {/* Sponsors */}
      <SideContent title="Sponsors" className="mb-5">
        lorem
      </SideContent>
      {/* Category */}
      <SideContent title="Category" className="mb-5">
        lorem
      </SideContent>
    </>
  );
};

export default OtherPostsGroup;
