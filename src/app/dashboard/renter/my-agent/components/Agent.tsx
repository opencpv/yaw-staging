import Image from "next/image";
import CaAgentTickGreenBg from "./icons/CaAgentTickGreenBg";
import { Button, LinkButton } from "@/components/__shared/ui/button";
import { cn } from "@/lib/utils";
import {
  formatDateOnly,
  getDaysRemaining,
} from "@/lib/utils/stringManipulation";
import { FaHourglassHalf } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { BE_MY_AGENT_LAPSE_DAYS } from "@/constants";
import dynamic from "next/dynamic";
import DeleteButton from "@/components/__shared/ui/button/delete-button";
import { useDeleteAgentRequest } from "../services";
import { useCallback, useEffect } from "react";
import EditButton from "@/components/__shared/ui/button/edit-button";
const BeMyAgentModal = dynamic(() => import("./steps/BeMyAgentModal"));

type Props = {
  hasMatch: boolean;
  isActive: boolean;
  isSelected?: boolean;
  agentRequest: AgentRequest;
};

export default function Agent({
  isActive,
  isSelected,
  hasMatch,
  agentRequest,
}: Props) {
  const router = useRouter();
  const daysRemaining = getDaysRemaining(
    agentRequest.created_at,
    BE_MY_AGENT_LAPSE_DAYS,
  );

  const { mutate: deleteAgentRequest, isPending } = useDeleteAgentRequest();

  const handleClick = () => {
    if (isActive) {
      router.replace(
        `?t=${agentRequest.search_title}&a=217${agentRequest.id}`,
        { scroll: false },
      );

      setTimeout(() => {
        // scroll to bottom of page
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 500);
    }
  };

  const handleDelete = useCallback(() => {
    deleteAgentRequest({
      id: agentRequest.id,
      renter_id: agentRequest.renter_id,
    });
  }, [agentRequest.id, agentRequest.renter_id, deleteAgentRequest]);

  useEffect(() => {
    // delete agent when time elapses
    if (daysRemaining === 0) {
      handleDelete();
    }
  }, [daysRemaining, handleDelete]);

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-start justify-center gap-4 rounded-2xl px-8 py-6",
        {
          "border-primary bg-shade shadow-sm": isSelected,
          "cursor-default border": isActive === false,
          "form-field-border cursor-pointer transition-transform hover:scale-[1.02]":
            isActive,
        },
      )}
      onClick={handleClick}
      aria-label="Agent"
      role="button"
    >
      <div className="flex w-full flex-wrap justify-between gap-y-5">
        <Image
          src={"/assets/svgs/agent-icon-handshake.svg"}
          width={100}
          height={100}
          alt=""
          className="mr-auto h-[70px] w-[70px] sm:h-[100px] sm:w-[100px]"
        />
        {isActive ? (
          <BeMyAgentModal button="Edit" agentRequest={agentRequest}>
            <LinkButton className="bg-shade-50 px-4 text-shade-200">
              Summary
            </LinkButton>
          </BeMyAgentModal>
        ) : (
          <div className="flex gap-2">
            <DeleteButton
              onDestruction={handleDelete}
              loading={isPending}
              classNames={{ icon: "text-error" }}
              className="relative top-[0.1rem]"
            />
            <BeMyAgentModal button="Edit" agentRequest={agentRequest}>
              <EditButton />
            </BeMyAgentModal>
          </div>
        )}
      </div>
      <div className="mb-auto space-y-1">
        <h3
          className={cn("line-clamp-1", { italic: !agentRequest.search_title })}
          title={agentRequest.search_title || undefined}
        >
          {agentRequest.search_title || "[No Title]"}
        </h3>
        <p className="flex items-center gap-1 text-shade-200">
          <span className="font-medium">Date Created</span> :
          <span>
            {isActive === false ? (
              <BeMyAgentModal button="Edit" agentRequest={agentRequest}>
                <Button
                  variant="ghost"
                  className="flex-1 text-base font-normal text-primary underline underline-offset-2"
                >
                  Continue
                </Button>
              </BeMyAgentModal>
            ) : (
              formatDateOnly(agentRequest.created_at)
            )}
          </span>
        </p>
        <div
          className={cn(
            "flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 xs:pt-2",
            {
              invisible: isActive === false,
            },
          )}
        >
          <div
            className={cn(
              "flex items-center gap-2 rounded-full bg-secondary-50 px-2 py-1",
              {
                "bg-warning-bg *:text-warning": !hasMatch && isActive,
              },
            )}
          >
            {hasMatch && isActive && (
              <>
                <CaAgentTickGreenBg />
                <p>Match</p>
              </>
            )}
            {hasMatch === false && isActive && (
              <>
                <FaHourglassHalf />
                <p>Pending</p>
              </>
            )}
          </div>

          {isActive && (
            <p className="text-shade-200">{daysRemaining} days remaining</p>
          )}
        </div>
      </div>
    </div>
  );
}
