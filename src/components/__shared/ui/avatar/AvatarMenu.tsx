"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import style from "../../Shared.module.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MdOutlineHome } from "react-icons/md";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import { LuSettings } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import Avatar from "./Avatar";
import { useAppStore } from "@/store/dashboard/AppStore";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { useUserSession } from "@/lib/custom-hooks/database/useUserSession";
import { supabase } from "@/supabase/client";

type Props = {
  /** ClassName for the avatar  */
  className?: string;
  /** ClassName for the popover menu  */
  popoverClassName?: string;
};

const AvatarMenu: React.FC<Props> = ({ className, popoverClassName }) => {
  const pathname = usePathname();
  const { currentRole } = useDashboardStore();
  const { user, setUser } = useAppStore();
  const userSession = useUserSession();
  const router = useRouter();
  const { onOpen } = useToastDisclosure();

  const name =
    user?.firstname && user?.lastname
      ? `${user?.firstname} ${user?.lastname}`
      : null;

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      onOpen(error.message, undefined, "error");
    } else {
      setTimeout(() => {
        setUser(null);
      }, 300);
      router.refresh();
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div>
          <Avatar
            image={user?.avatar_url as string}
            name={name}
            email={user?.email}
            className={cn("", className)}
            display={userSession?.session && true}
          />
        </div>
      </PopoverTrigger>
      {/* Avatar Menu */}
      <PopoverContent
        className={cn(
          "z-50 w-fit rounded-lg bg-white text-neutral-600 shadow-lg transition-all xs:min-w-[18rem]",
          popoverClassName,
        )}
      >
        <ul>
          <li
            className={cn("flex gap-4 p-5", {
              "items-start": name,
              "items-center": !name || name === " ",
            })}
          >
            <Avatar
              display={userSession?.session && true}
              image={user?.avatar_url as string}
              name={name as string}
              email={user?.email}
            />
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
          <li
            className="deep-green-hover cursor-pointer space-y-5 py-4 pb-5 pl-8 pr-4 pt-10"
            onClick={handleSignOut}
          >
            <div className="flex items-center gap-2">
              <TbLogout size={20} />
              <p>Log Out</p>
            </div>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default AvatarMenu;
