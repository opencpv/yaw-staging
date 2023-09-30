"use client";
import "./globals.css";
import { useEffect, useState } from "react";
import Navbar from "@/components/__shared/Navbar";
import { usePathname } from "next/navigation";

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
      <body className="max-w-[1728px] mx-auto">
        {/* {noNavbar ? (
          ""
        ) : (
          <Navbar
            isMenuOpen={isMenuOpen}
            toggleMenu={() => {
              window.scrollTo({
                top: 0,
              });
              setIsMenuOpen((r) => !r);
            }}
          />
        )}
        <div
          className={` ${
            isMenuOpen
              ? "h-[100vh] overflow-hidden brightness-50"
              : "opacity-100"
          }
        transition duration-[1000ms]
        `}
        >
          {children}
        </div> */}
        {children}
      </body>
    </html>
  );
}
