import "./globals.css";
import "../styles/animations.css";
import "@radix-ui/themes/styles.css";
import Providers from "@/context/Providers";
import LoadingIndicator from "@/components/LoadingIndicator";
import Head from "next/head";
import Script from "next/script";
import { openSans } from "@/lib/utils/fonts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MenuWrapper from "@/components/__shared/MenuWrapper";
import { Metadata, Viewport } from "next";

const uniquePages = ["login", "terms-of-service"];

export const metadata: Metadata = {
  title: {
    template: "%s | RentrightGH",
    default: "RentrightGH",
  },
  applicationName: "RentrightGH website",
  description: "Genuine listings without stress",
  keywords: ["Genuine listings", "rental", "property management", "agent"],
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
  // const [noNavbar, setNoNavbar] = useState(false);
  // const pathname = usePathname();

  // useEffect(() => {
  //   uniquePages.forEach((element) => {
  //     if (pathname && pathname.split("/").includes(element)) {
  //       setNoNavbar(true);
  //     } else {
  //       setNoNavbar(false);
  //     }
  //   });
  // }, [pathname]);

  return (
    <html
      lang="en"
      className="text-[14px] lg:text-[14.5px] 2xl:text-[15px] 3xl:text-[16px]"
    >
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
          key="page-scale"
        />
      </Head>
      <Script src="https://widget.cloudinary.com/v2.0/global/all.js" />
      <body className={`bg-white text-neutral-800  ${openSans.className}`}>
        <Providers>
          <MenuWrapper>
            <LoadingIndicator />
            <ToastContainer />
            {children}
          </MenuWrapper>
        </Providers>
      </body>
    </html>
  );
}
