import { styled } from "@stitches/react";
import ContactBanner from "./components/ContactBanner";
import ContactTabs from "./components/ContactTabs";
import { Metadata } from "next";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { SanityDocument } from "next-sanity";
import { HOME_PAGE_QUERY } from "@/lib/utils/sanity/queries";
import dynamic from "next/dynamic";
import legal from "@/enum/about/legal";
const Footer = dynamic(() => import("@/components/__shared/ui/footer"));
const Navbar = dynamic(() => import("@/components/__shared/ui/Navbar"));
const FeedbackButton = dynamic(
  () => import("../../components/__shared/ui/feedback/FeedbackButton"),
  { ssr: false },
);

export const metadata: Metadata = {
  title: {
    template: `%s | Contact - ${legal.websiteName}`,
    default: "Contact",
  },
  description: "", // tentative
};

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initial = await loadQuery<SanityDocument[]>(HOME_PAGE_QUERY);
  const data = initial.data[0];

  return (
    <>
      <Navbar />
      <main className="wrapper max-xs:pt-0">
        <Root className="flex flex-col items-center justify-center">
          <ContactBanner />
          <div
            className={`form-root relative z-[20] h-full min-h-[500px] w-full max-w-full rounded-2xl bg-white pt-5 sm:p-3 lg:-top-16 lg:max-w-[90%] lg:p-8 lg:pt-2 lg:shadow-[0px_24px_48px_-12px_rgba(0,_0,_0,_0.18)]`}
          >
            <ContactTabs />
            <div className="grid h-full grid-cols-1 gap-10 md:grid-cols-2">
              {children}
            </div>
          </div>
        </Root>
        <FeedbackButton data={data} className="mt-20 lg:mt-0" />
      </main>
      <Footer />
    </>
  );
}

const Root = styled("div", {
  ".banner": {
    background:
      "var(--faq-banner, linear-gradient(103deg, #21A19F 38.96%, rgba(30, 169, 166, 0.63) 90.07%))",
    // width: "100%",
    "@media screen and (min-width:640px)": {},
  },

  ".form-root": {
    backgroundColor: "white",
    borderRadius: "1rem",

    "@media screen and (min-width:1024px)": {
      boxShadow: "0px 24px 48px -12px rgba(0, 0, 0, 0.18)",
    },
  },
  " .form-div": {
    color: "#6A6968",
    display: "flex",
    flexDirection: "column",
    gap: "0.875rem",
  },
  " .form-input": {
    maxHeight: "52px",
    padding: "0.9375rem",
    // maxWidth: "673px",
    aspectRatio: "422/52",
    border: "1px solid #E6E6E6",
    borderRadius: "4px",
    color: "#737373",
    backgroundColor: "white",
  },
  "form-input-textarea": {
    padding: "0.9375rem",
    maxWidth: "541px",
    width: "100%",
    aspectRatio: "541/368",
    border: "1px solid #E6E6E6",
    borderRadius: "4px",
    color: "#737373",
  },
  "& .link-icon": {
    top: "75%",
    transform: "translateY(-75%)",
    left: "1rem",
  },
  ".sc-button": {
    background:
      "linear-gradient(271deg, rgba(255, 255, 255, 0.83) 55.34%, rgba(255, 255, 255, 0.83) 124.12%)",
  },
  "required-message": {
    color: "#11605E",
    fontSize: "14px",
  },
});
