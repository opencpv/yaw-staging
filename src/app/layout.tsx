import "./globals.css";
import "../styles/animations.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { openSans } from "@/lib/utils/fonts";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
//import RatingsAndAllRatings from "@/components/RatingsAndAllRatings";
const ToastConfig = dynamic(() => import("@/components/__shared/ToastConfig"));
const Providers = dynamic(() => import("@/context/Providers"));
const NoticeModal = dynamic(
  () => import("@/components/__shared/ui/modals/NoticeModal"),
);
const LoadingIndicator = dynamic(
  () => import("@/components/__shared/ui/loading-indicator"),
);
const MenuWrapper = dynamic(
  () => import("@/components/__shared/hoc/MenuWrapper"),
  {
    ssr: false,
  },
);

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
        className={cn(
          "light bg-white font-sans text-neutral-800 antialiased",
          openSans.variable,
        )}
      >
        <Providers>
          <ToastConfig />
          <MenuWrapper>
            <LoadingIndicator />
            <NoticeModal />
            {children}
          </MenuWrapper>
        </Providers>
        {/* <RatingsAndAllRatings /> */}
      </body>
    </html>
  );
}
