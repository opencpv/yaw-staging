"use client";
import LikeHeart from "@/components/__shared/ui/LikeHeart";
import Share from "@/components/__shared/ui/share/Share";
import { useAppStore } from "@/store/dashboard/AppStore";
import React from "react";
import style from "../Template.module.css";
import { cn } from "@/lib/utils";

type Props = {
  listing: Property;
};

const LikeShare = ({ listing }: Props) => {
  const { user } = useAppStore();
  return (
    <div className="flex items-center gap-3 md:gap-2">
      <div
        className={cn(
          "grid place-items-center rounded-md p-1 px-2 max-md:p-0 md:bg-primary/10",
        )}
      >
        <LikeHeart
          liked={listing?.favorite_user_ids?.includes(user?.id as string)}
          userId={user?.id as string | number}
          propertyId={listing?.id as number}
          className="text-3xl text-primary"
        />
      </div>

      <div
        className={cn(
          "grid place-items-center rounded-md p-1 px-2 max-md:p-0 md:bg-primary/10",
        )}
      >
        <Share
          title={`${listing?.property_name as string} - ${
            listing?.neighbourhood as string
          }, ${listing?.city as string}`}
          content={listing?.description as string}
          classNames={{
            icon: "text-3xl text-primary",
          }}
          hideLabel
        />
      </div>
    </div>
  );
};

export default LikeShare;
