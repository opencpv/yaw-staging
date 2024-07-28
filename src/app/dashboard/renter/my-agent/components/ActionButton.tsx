import React, { useState } from "react";
import Button from "@/components/__shared/ui/button/Button";
import { getSchedulePage } from "../actions";
import { formatDateTime } from "@/lib/utils/stringManipulation";
import { cn } from "@/lib/utils";
import {
  ActionContent,
  ActionItem,
  ActionItemTrigger,
  ActionPopover,
} from "@/app/dashboard/components/shared/ui/ActionPopover";

type Props = {
  children: React.ReactNode;
  title: string;
  actionType: string;
  match: AgentRequestMatch;
};

export default function ActionButton(props: Props) {
  const [loading, setLoading] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleNewMeeting = async () => {
    setLoading(true);

    if (!props.match?.meeting_id) {
      getSchedulePage({
        matchId: props.match?.id as number,
        actionType: props.actionType,
        currentPath: window.location.href,
      });
    }
  };
  const handleActionTrigger = () => {
    const today = new Date();
    const meetingDate = new Date(props.match?.start_date as string);
    if (today < meetingDate) {
      setIsOpen(true);
    }
  };

  return (
    <>
      {props.match?.meeting_id &&
      props.match?.type?.toLowerCase() === props.actionType.toLowerCase() ? (
        <ActionPopover isOpen={isOpen} onOpenChange={setIsOpen} placement="top">
          <ActionItemTrigger
            className="col-span-1 h-fit w-full"
            onClick={handleActionTrigger}
            onMouseOver={handleActionTrigger}
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
            <ActionItem
              href={props.match?.reschedule_url ?? undefined}
              target="_blank"
            >
              Reschedule
            </ActionItem>
            <ActionItem
              href={props.match?.cancel_url ?? undefined}
              target="_blank"
            >
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
