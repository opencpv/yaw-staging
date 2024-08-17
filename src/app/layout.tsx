import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Providers from "@/context/Providers";
import LoadingIndicator from "@/components/__shared/ui/LoadingIndicator";
import NoticeModal from "@/components/__shared/ui/modals/NoticeModal";
import TemporayLandingPage from "@/components/TemporaryLandingPage";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const showTemporaryLandingPage =
    process.env.NEXT_PUBLIC_TEMPORARY_LANDING_PAGE === "true";

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
        className={`bg-white text-neutral-800 light ${inter.className}`}
      >
        <Providers>
          {/* <ToastConfig /> */}
          {/* <MenuWrapperNoSSR> */}
            <LoadingIndicator />
            {/* <NoticeModal /> */}
            {showTemporaryLandingPage ? (
              <TemporayLandingPage />
            ) : (
              children
            )}
          {/* </MenuWrapperNoSSR> */}
        </Providers>
        {/* <RatingsAndAllRatings /> */}
      </body>
    </html>
  );
}
