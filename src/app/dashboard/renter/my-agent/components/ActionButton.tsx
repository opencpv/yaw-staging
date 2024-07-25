import React, { useState } from "react";
import Button from "@/components/__shared/ui/button/Button";
import { saveInfoToCookie } from "../actions";
import { formatDateTime } from "@/lib/utils/stringManipulation";
import { cn } from "@/lib/utils";
import {
  ActionContent,
  ActionItem,
  ActionItemTrigger,
  ActionPopover,
} from "@/app/dashboard/components/shared/ui/ActionPopover";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
  title: string;
  actionType: string;
  match: AgentRequestMatch;
};

export default function ActionButton(props: Props) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleNewMeeting = async () => {
    setLoading(true);

    saveInfoToCookie({
      matchId: props.match?.id as number,
      actionType: props.actionType,
      currentPath: window.location.href,
    });

    router.push(
      `/dashboard/renter/my-agent/schedule?m=814${props.match?.id}&t=${props.actionType}`,
    );
  };

  return (
    <>
      {props.match?.meeting_id &&
      props.match?.type?.toLowerCase() === props.actionType.toLowerCase() ? (
        <ActionPopover
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          placement="right"
        >
          <ActionItemTrigger
            className="col-span-1 h-fit w-full"
            onClick={() => setIsOpen(true)}
            onMouseOver={() => setIsOpen(true)}
          >
            <div
              className={cn(
                `flex h-10 w-full max-w-full flex-1 items-center justify-center gap-2 rounded-2xl bg-orange-100 px-10 font-semibold text-shade-300 transition-transform hover:scale-[1.02] hover:bg-orange-100/30 lg:h-14`,
              )}
            >
              {formatDateTime(props.match.start_date as string)}
            </div>
          </ActionItemTrigger>
          <ActionContent>
            <ActionItem href={props.match?.reschedule_url ?? undefined}>
              Reschedule
            </ActionItem>
            <ActionItem href={props.match?.cancel_url ?? undefined}>
              Cancel
            </ActionItem>
          </ActionContent>
        </ActionPopover>
      ) : (
        <Button
          className={cn(
            `h-10 w-full gap-2 rounded-2xl bg-secondary-500 font-semibold text-shade-200 hover:bg-primary-200 hover:text-white lg:h-14`,
          )}
          title={props.title}
          isLoading={loading}
          disabled={
            (props.match?.meeting_id &&
              props.match?.type?.toLowerCase() !==
                props.actionType.toLowerCase()) ||
            false
          }
          onClick={handleNewMeeting}
        >
          {props.children}
        </Button>
      )}
    </>
  );
}
