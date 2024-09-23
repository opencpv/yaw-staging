"use client";
import LikeHeart from "@/components/__shared/ui/like-button";
import { useAppStore } from "@/store/dashboard/AppStore";
import React from "react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
const Share = dynamic(() => import("@/components/__shared/ui/share"));

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
          className="fade-in-bottom-slight text-2xl text-primary"
        />
      </div>

      <div
        className={cn(
          "grid place-items-center rounded-md px-2 py-1 max-md:p-0 md:bg-primary/10",
        )}
      >
        <Share
          title={`${listing?.property_name as string} - ${
            listing?.neighbourhood as string
          }, ${listing?.city as string}`}
          content={listing?.description as string}
          classNames={{
            icon: "text-primary fade-in-top-slight",
          }}
          size={20}
          hideLabel
        />
      </div>
    </div>
  );
};

export default LikeShare;
