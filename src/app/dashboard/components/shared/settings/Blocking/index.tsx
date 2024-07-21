import Image from "next/image";
import CaBlockingPadlock from "./icons/CaBlockingPadlock";
import CaBlockingBlock from "./icons/CaBlockingBlock";
import Button from "@/components/__shared/ui/button/Button";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { Skeleton, useDisclosure } from "@nextui-org/react";
import CallOut from "@/components/__shared/ui/CallOut";
import {
  useFetchBlockedUsers,
  useUnblockAllUsers,
  useUnblockUser,
} from "../services";
import DestructiveModal from "@/components/__shared/ui/modals/DestructiveModal";

type BlockedUserType = BlockedUser & {
  blocked_user: { full_name: string; profile_img: string };
};

export default function Blocking() {
  const { user } = useAppStore();
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();
  const { data: blockedUsers, isLoading } = useFetchBlockedUsers({
    userId: user?.id as string,
  });
  const { mutate: unblockAllUsers, isPending } = useUnblockAllUsers();

  const handleUnblockAll = () => {
    unblockAllUsers({ blockerId: user?.id as string });
  };

  return (
    <>
      <DestructiveModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label={`Are you sure you want to unblock all?`}
        handleDestruction={handleUnblockAll}
        loading={isPending}
      />
      <section className="flex flex-col gap-5">
        <div className="border-b-2 py-6">
          <div className="flex max-w-[610px] flex-col gap-5">
            <h3>Block Users</h3>
            <CallOut content="Unblock users you have previously blocked here." />
          </div>
        </div>
        <div className="flex max-w-[603px] flex-col gap-8">
          <div className="flex items-center justify-between">
            {" "}
            <h4 className="text-lg">Your Blocked List</h4>
            {blockedUsers && blockedUsers?.length > 0 && (
              <Button
                isLoading={isPending}
                className="rounded-lg bg-primary px-5 py-2.5 text-white"
                onClick={onOpen}
              >
                Unblock all
                <CaBlockingPadlock />
              </Button>
            )}
          </div>
          {isLoading && (
            <div className="flex w-full cursor-pointer items-center justify-between gap-3 hover:bg-primary-300">
              <div className="flex w-full items-center gap-6">
                <Skeleton className="relative aspect-square w-full max-w-[69px] overflow-hidden rounded-full" />
                <Skeleton className="h-5 w-20 rounded-md" />
              </div>
              <Skeleton className="h-10 w-20 rounded-md" />
            </div>
          )}
          {blockedUsers && blockedUsers?.length > 0 && (
            <div className="flex flex-col gap-4">
              {blockedUsers?.map((blocked) => (
                <BlockCard
                  key={blocked.blocked_id}
                  data={blocked as BlockedUserType}
                />
              ))}
            </div>
          )}
        </div>
        {blockedUsers && blockedUsers.length === 0 && (
          <div className="flex min-h-72 w-full max-w-screen-lg flex-col items-center justify-center gap-8 bg-[#F7F7F7] px-5 py-20">
            <CaBlockingBlock />
            <p className="text-center text-lg font-semibold text-shade-200">
              You have no blocked users
            </p>
          </div>
        )}
      </section>
    </>
  );
}

const BlockCard = (props: { data: BlockedUserType }) => {
  const { images } = useAssets();
  const { user } = useAppStore();
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();
  const { mutate: unblockUser, isPending } = useUnblockUser();

  const handleUnblock = () => {
    unblockUser({
      blockerId: user?.id as string,
      blockedId: props.data.blocked_id,
    });
  };

  return (
    <>
      <DestructiveModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label={`Are you sure you want to unblock ${props.data.blocked_user.full_name}?`}
        handleDestruction={handleUnblock}
        loading={isPending}
      />
      <div className="flex w-full cursor-pointer items-center justify-between gap-3 hover:bg-shade">
        <div className="flex w-full items-center gap-6">
          <div className="relative aspect-square w-full max-w-[69px] overflow-hidden rounded-full">
            <Image
              fill
              alt={props.data.blocked_user.full_name}
              src={props.data?.blocked_user.profile_img || images.NoProfilePH}
              objectFit="cover"
            />
          </div>
          <p className="font-semibold text-primary">
            {props.data.blocked_user.full_name}
          </p>
        </div>
        <div>
          <Button
            isLoading={isPending}
            className="rounded-lg bg-secondary-400 px-5 py-2.5 text-[13px] text-white"
            onClick={onOpen}
          >
            Unblock
          </Button>
        </div>
      </div>
    </>
  );
};
