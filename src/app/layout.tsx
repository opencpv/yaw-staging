"use client";
import "./globals.css";
import "../styles/animations.css";
import "@radix-ui/themes/styles.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Providers from "@/context/Providers";
import LoadingIndicator from "@/components/LoadingIndicator";
import Script from "next/script";
import { openSans } from "@/lib/utils/fonts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TemporayLandingPage from "@/components/TemporaryLandingPage";

const uniquePages = ["login", "terms-of-service"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [noNavbar, setNoNavbar] = useState(false);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    uniquePages.forEach((element) => {
      if (pathname && pathname.split("/").includes(element)) {
        setNoNavbar(true);
      } else {
        setNoNavbar(false);
      }
    });
  }, [pathname]);

  return (
    <html
      lang="en"
      className="text-[14px] lg:text-[14.5px] 2xl:text-[15px] 3xl:text-[16px]">
      <Script src="https://widget.cloudinary.com/v2.0/global/all.js" />
      <body className={`text-neutral-800 bg-white  ${openSans.className}`}>
        <Providers>
          <LoadingIndicator />
          <ToastContainer />
          {process.env.NEXT_PUBLIC_TEMPORARY_LANDING_PAGE == "true" ? (
            children
          ) : (
            <TemporayLandingPage />
          )}
        </Providers>
      </body>
    </html>
  );
}
