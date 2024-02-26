"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import style from "../Shared.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineHome } from "react-icons/md";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import { LuSettings } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";

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
        <ul className="divide-y">
          <li className="flex gap-4 p-5">
            <Image
              src={image}
              alt={name as string}
              width={50}
              height={50}
              className={cn(
                "h-[35px] w-[35px] max-w-[50px] shrink-0 cursor-pointer rounded-full xs:h-[50px] xs:w-[50px]",
                className,
              )}
            />
            <div className="">
              <h3>Enoch Ansah</h3>
              <small className="text-shade-300">enocansah@gmail.com</small>
            </div>
          </li>
          <li className="space-y-5 p-5 pl-4">
            {/* My Account */}
            {pathname?.includes("dashboard") ? (
              <Link
                href="/"
                className="deep-green-hover flex items-center gap-2"
              >
                <MdOutlineHome size={20} />
                <p>Home</p>
              </Link>
            ) : (
              <Link
                href={`/dashboard/${currentRole}/overview`}
                className="deep-green-hover flex items-center gap-2"
              >
                <FaRegUser size={20} />
                <p>My Account</p>
              </Link>
            )}

            {/* Settings */}
            <Link href="" className="deep-green-hover flex items-center gap-2">
              <LuSettings size={20} />
              <p>Settings</p>
            </Link>
          </li>
          {/* Logout */}
          <li className="space-y-5 px-5 pb-1 pl-4 pt-10">
            <div className="flex items-center gap-2">
              <TbLogout size={20} />
              <p>Log Out</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Avatar;
