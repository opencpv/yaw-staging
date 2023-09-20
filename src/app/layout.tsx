"use client";
import Menu from "@/components/NavMenu.tsx";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins, Open_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import Navbar from "@/components/__shared/Navbar";
import { usePathname } from "next/navigation";

const uniquePages = ["login"];

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
      if (pathname.includes(element)) {
        setNoNavbar(true);
      } else {
        setNoNavbar(false);
      }
    });
  }, []);

  return (
    <html lang="en">
      <body>
        {noNavbar ? (
          ""
        ) : (
          <Navbar
            isMenuOpen={isMenuOpen}
            toggleMenu={() => setIsMenuOpen((r) => !r)}
          />
        )}
        <div
          className={` ${
            isMenuOpen ? "h-[80vh] overflow-hidden opacity-0" : "opacity-100"
          }
        transition duration-1000
        `}>
          {children}
        </div>
      </body>
    </html>
  );
}
