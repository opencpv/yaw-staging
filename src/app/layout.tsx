"use client";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { useEffect, useState } from "react";
import Navbar from "@/components/__shared/Navbar";
import { usePathname } from "next/navigation";
import Providers from "@/context/Providers";

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
    <html lang="en">
      <body className="text-black">
   
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
