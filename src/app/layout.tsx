"use client";
import Menu from "@/components/NavMenu";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins, Open_Sans } from "next/font/google";
import { useState } from "react";
import Navbar from "@/components/__shared/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <html lang="en">
      <body>
        <Menu
          isOpen={isMenuOpen}
          layout
          toggleMenu={() => setIsMenuOpen((r) => !r)}
        />
        <Navbar toggleMenu={() => setIsMenuOpen((r) => !r)}/>
        {children}
      </body>
    </html>
  );
}
