"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins, Open_Sans } from "next/font/google";
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
      if (pathname && pathname.includes(element)) {
        setNoNavbar(true);
      } else {
        setNoNavbar(false);
      }
    });
  }, [pathname]);

  return (
    <html lang="en">
      <body>
        {noNavbar ? (
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
        </div>
      </body>
    </html>
  );
}
