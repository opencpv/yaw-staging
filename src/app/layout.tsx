import "./globals.css";
import "../styles/animations.css";
import "@radix-ui/themes/styles.css";
import Providers from "@/context/Providers";
import LoadingIndicator from "@/components/LoadingIndicator";
import Script from "next/script";
import { openSansLocal } from "@/lib/utils/fonts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MenuWrapperNoSSR from "@/components/__shared/hoc/MenuWrapperNoSSR";
import { Metadata, Viewport } from "next";
import TemporayLandingPage from "@/components/TemporaryLandingPage";
import NoticeModal from "@/components/__shared/ui/modals/NoticeModal";
import RatingsAndAllRatings from "@/components/RatingsAndAllRatings";

export const metadata: Metadata = {
  title: {
    template: "%s | RentRightGH",
    default: "RentRightGH",
  },
  applicationName: "RentRightGH website",
  description: "Genuine listings without stress", // tentative
  keywords: ["Genuine listings", "rental", "property management", "agent"], // tentative
  metadataBase: new URL("https://rentrightgh.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const showTemporaryLandingPage =
    process.env.NEXT_PUBLIC_TEMPORARY_LANDING_PAGE === "true"; // Check if the environment variable is set to true

  return (
    <html
      lang="en"
      className="text-[14px] lg:text-[14.5px] 2xl:text-[15px] 3xl:text-[16px]"
    >
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HE2ZM0VHPH"
        ></Script>
        <Script id="google-analytics">
          {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HE2ZM0VHPH');
            `}
        </Script>
      </head>
      <Script src="https://widget.cloudinary.com/v2.0/global/all.js" />

      <body
        className={`bg-white text-neutral-800 light ${openSansLocal.className}`}
      >
        <Providers>
          <MenuWrapperNoSSR>
            <LoadingIndicator />
            <ToastContainer />
            <NoticeModal />
            {showTemporaryLandingPage ? ( // Render temporary landing page if showTemporaryLandingPage is true
              <TemporayLandingPage />
            ) : (
              children // Otherwise, render the children
            )}
          </MenuWrapperNoSSR>
        </Providers>
        <RatingsAndAllRatings/>
      </body>
    </html>
  );
}
