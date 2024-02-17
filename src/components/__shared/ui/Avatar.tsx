"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import style from "../Shared.module.css";
import Link from "next/link";
import { LiaHomeSolid } from "react-icons/lia";
import Button from "./button/Button";
import { usePathname } from "next/navigation";
import { MdOutlineDashboard } from "react-icons/md";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import { PiCirclesFour } from "react-icons/pi";

type Props = {
  image: string;
  name?: string;
  className?: string;
};

const Avatar = ({ image, name, className }: Props) => {
  const pathname = usePathname();
  const { currentRole } = useDashboardStore();

  const [isOpen, setIsOpen] = useState(false);
  const avatarRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!avatarRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="relative">
      <Image
        src={image}
        alt={name as string}
        width={50}
        height={50}
        className={cn(
          "h-[35px] w-[35px] max-w-[50px] shrink-0 cursor-pointer rounded-full xs:h-[50px] xs:w-[50px]",
          className,
        )}
        onClick={() => setIsOpen(!isOpen)}
        ref={avatarRef}
      />
      <div
        className={`${style.avatarMenu} ${
          isOpen ? `${style.avatarMenuVisible}` : `${style.avatarMenuHidden}`
        }`}
      >
        <ul>
          <li className="deep-green-hover px-4 py-2">
            {pathname?.includes("dashboard") ? (
              <Link href="/" className="flex items-center gap-2">
                <LiaHomeSolid />
                Home
              </Link>
            ) : (
              <Link
                href={`/dashboard/${currentRole}/overview`}
                className="flex items-center gap-2"
              >
                <PiCirclesFour />
                Overview
              </Link>
            )}
          </li>
          <li className="mt-5 grid place-items-center px-5 py-2">
            <Button color="accent" radius="full" padding="sm">
              Sign out
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Avatar;
