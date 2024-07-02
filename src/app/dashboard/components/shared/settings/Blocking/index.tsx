import Image from "next/image";
import CaBlockingPadlock from "./icons/CaBlockingPadlock";
import { useState } from "react";
import CaBlockingBlock from "./icons/CaBlockingBlock";
import Button from "@/components/__shared/ui/button/Button";
import { useQuery } from "@tanstack/react-query";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { Skeleton } from "@nextui-org/react";


type BlockedUserType = BlockedUser & { profiles: { full_name: string; profile_img: string } } 
  

export default function Blocking() {
  const {user} = useAppStore()

  const {data: blockedUsers, isLoading} = useQuery({
    queryKey: ["blocked_users"],
    queryFn: async () => {
      const { data } = await supabase
        .from("blocked_users")
        .select("*, profiles!inner(id, full_name, profile_img)")
        .eq("blocker_id", user?.id as string);
      return data;
    },
  })

  return (
    <div className="flex flex-col gap-5">
      <div className="border-b-2 py-6">
        <div className="flex max-w-[610px] flex-col gap-5">
          <h3>Block Users</h3>
          <p className="text-shade-200">
            Once you block someone, that person can no longer send you
            messages.They may be able to rate and review you and you can still
            view their listings if any exist.
          </p>
        </div>
      </div>
      <div className="flex max-w-[603px] flex-col gap-8">
        <div className="flex items-center justify-between">
          {" "}
          <h4 className="text-lg">Your Blocked List</h4>
          {blockedUsers && blockedUsers?.length > 0 && (
            <Button className="rounded-lg bg-primary px-5 py-2.5 text-white">
              Unblock all
              <CaBlockingPadlock />
            </Button>
          )}
        </div>
        {isLoading && (
<div className="flex w-full cursor-pointer items-center justify-between gap-3 hover:bg-primary-300">
      <div className="flex w-full items-center gap-6">
                <Skeleton className="relative aspect-square w-full max-w-[69px] overflow-hidden rounded-full" />
        <Skeleton className="h-5 w-20" />
      </div>
            <Skeleton className="h-5 w-20" />
    </div>
        )}
        {blockedUsers && blockedUsers?.length > 0 && (
          <div className="flex flex-col gap-4">
            {blockedUsers?.map((blocked) => <BlockCard key={blocked.blocked_id} data={blocked as BlockedUserType} />)}
          </div>
        )}
      </div>
      {!blockedUsers && (
        <div className="flex min-h-72 w-full max-w-screen-lg flex-col items-center justify-center gap-8 bg-[#F7F7F7] px-5 py-20">
          <CaBlockingBlock />
          <p className="text-center text-lg font-semibold text-shade-200">
            You have no blocked users
          </p>
        </div>
      )}
    </div>
  );
}

const BlockCard = (props: { data: BlockedUserType }) => {
  const {images} = useAssets()
  return (
    <div className="flex w-full cursor-pointer items-center justify-between gap-3 hover:bg-primary-300">
      <div className="flex w-full items-center gap-6">
        <div className="relative aspect-square w-full max-w-[69px] overflow-hidden rounded-full">
          <Image fill alt={props.data.profiles.full_name} src={props.data?.profiles.profile_img || images.NoProfilePH} objectFit="cover" />
        </div>
        <p className="font-semibold text-primary">{props.data.profiles.full_name}</p>
      </div>
      <div>
        <Button className="rounded-lg bg-secondary-400 px-5 py-2.5 text-[13px] text-white">
          Unblock
        </Button>
      </div>
    </div>
  );
};
