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
  name: string | null;
  email?: string;
  size?: "sm" | "lg";
  className?: string;
};

const Avatar = ({ image, name, className, email, size }: Props) => {
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
          "size-[35px] max-w-[50px] shrink-0 cursor-pointer rounded-full",
          className,
          {
            "xs:size-[35px]": size === "sm",
            "xs:size-[50px]": size !== "sm",
          },
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
          <li
            className={cn("flex gap-4 p-5", {
              "items-start": name,
              "items-center": !name || name === " ",
            })}
          >
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
              {name && <h3 className="max-sm:text-lg">{name}</h3>}
              <small className="text-shade-300">{email}</small>
            </div>
          </li>
          <hr className="mx-5" />
          <li className="deep-green-hover pl-8 pr-4">
            {/* My Account */}
            {pathname?.includes("dashboard") ? (
              <Link href="/" className="flex items-center gap-2 pb-2.5 pt-4">
                <MdOutlineHome size={20} />
                <p>Home</p>
              </Link>
            ) : (
              <Link
                href={`/dashboard/${currentRole}/overview`}
                className="flex items-center gap-2 pb-2.5 pt-4"
              >
                <FaRegUser size={20} />
                <p>My Account</p>
              </Link>
            )}
          </li>
          {/* Settings */}
          <li className="deep-green-hover pl-8 pr-4">
            <Link
              href={`/dashboard/${currentRole}/settings`}
              className="flex items-center gap-2 pb-4 pt-2.5"
            >
              <LuSettings size={20} />
              <p>Settings</p>
            </Link>
          </li>
          <hr className="mx-5" />
          {/* Logout */}
          <li className="deep-green-hover cursor-pointer space-y-5 py-4 pb-5 pl-8 pr-4 pt-10">
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
