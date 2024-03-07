"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import style from "../../Shared.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineHome } from "react-icons/md";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import { LuSettings } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import Avatar from "./Avatar";
import { useAppStore } from "@/store/dashboard/AppStore";

type Props = {
  className?: string;
};

const AvatarMenu: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();
  const { currentRole } = useDashboardStore();
  const { user } = useAppStore();

  const [isOpen, setIsOpen] = useState(false);
  const avatarRef = useRef<HTMLImageElement>(null);

  const name =
    user?.firstname && user?.lastname
      ? `${user?.firstname} ${user?.lastname}`
      : null;

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
      {user?.avatar_url && (
        <div className="" ref={avatarRef} onClick={() => setIsOpen(!isOpen)}>
          <Avatar
            image={user?.avatar_url}
            name={name}
            email={user?.email}
            className={cn("", className)}
          />
        </div>
      )}
      {/* Avatar Menu */}
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
            {user?.avatar_url && (
              <Avatar
                image={user?.avatar_url}
                name={name as string}
                email={user?.email}
                className="max-ssm:hidden"
              />
            )}
            <div className="">
              {name && <h3 className="max-sm:text-lg">{name}</h3>}
              <small className="text-shade-300">{user?.email}</small>
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

export default AvatarMenu;
