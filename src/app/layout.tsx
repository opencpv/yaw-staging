import "./globals.css";
import "../styles/animations.css";
import "@radix-ui/themes/styles.css";
import Providers from "@/context/Providers";
import LoadingIndicator from "@/components/LoadingIndicator";
import Script from "next/script";
import { openSans, openSansLocal } from "@/lib/utils/fonts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MenuWrapper from "@/components/__shared/MenuWrapper";
import TemporayLandingPage from "@/components/TemporaryLandingPage"; // Importing TemporaryLandingPage component
import { Metadata, Viewport } from "next";

const uniquePages = ["login", "terms-of-service"];

export const metadata: Metadata = {
  title: {
    template: "%s | RentRightGH",
    default: "RentRightGH",
  },
  applicationName: "RentRightGH website",
  description: "Genuine listings without stress", // tentative
  keywords: ["Genuine listings", "rental", "property management", "agent"], // tentative
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const showTemporaryLandingPage = process.env.NEXT_PUBLIC_TEMPORARY_LANDING_PAGE === "tr2ue"; // Check if the environment variable is set to true

  return (
    <html
      lang="en"
      className="text-[14px] lg:text-[14.5px] 2xl:text-[15px] 3xl:text-[16px]"
    >
      <Script src="https://widget.cloudinary.com/v2.0/global/all.js" />

      <body className={`bg-white text-neutral-800 light ${openSans.className}`}>
        <Providers>
          <MenuWrapper>
            <LoadingIndicator />
            <ToastContainer />
            {showTemporaryLandingPage ? ( // Render temporary landing page if showTemporaryLandingPage is true
              <TemporayLandingPage />
            ) : (
              children // Otherwise, render the children
            )}
          </MenuWrapper>
        </Providers>
      </body>
    </html>
  );
}
