"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import AgentButtons from "@/app/dashboard/my-agent/components/Button";
import BeMyAgentForm from "./components/BeMyAgentForm";
import { useLocalStorage } from "@uidotdev/usehooks";
import { BeMyAgentFormType } from "./components/types";
import { ClientOnly } from "@/components/ui/ClientOnly";
import Button from "@/components/__shared/ui/button/Button";
import { MdOutlineEdit } from "react-icons/md";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils/numberManipulation";

type Props = {
  button?: "Hire Us Now" | "Get Started" | "Ghost" | "Edit" | "Price";
  buttonClassName?: string;
  content?: React.ReactNode | string | number;
};

const BeMyAgentModal = (props: Props) => {
  const [open, setOpen] = useState<any>();
  //please dont remove this code
  const [agentFormData, setagentFormData] = useLocalStorage<BeMyAgentFormType>(
    "agent-form",
    {
      maritalStatus: "Single",
      leaseTerm: "12",
      gender: "Male",
      country: "Ghana",
      preferredMethodOfContact: "Phone",
      employersCountry: "Ghana",
      government: "Ghana",
    },
  );

  return (
    <Dialog.Root onOpenChange={setOpen} open={open}>
      <Dialog.Trigger asChild className="w-full">
        {props.button === "Get Started" ? (
          <AgentButtons
            content={(props.content as string) ?? "Get Started"}
            variant={"green-fade-light"}
            className={props.buttonClassName}
          />
        ) : props.button === "Ghost" ? (
          <Button variant="ghost" className={props.buttonClassName}>
            {props.content}
          </Button>
        ) : props.button === "Edit" ? (
          <Button
            isIconOnly
            title="Edit"
            className={cn(
              "flex w-fit items-center justify-center rounded-md bg-[#F1F1F1] p-4 text-neutral-800",
              props.buttonClassName,
            )}
          >
            <MdOutlineEdit size={16} />
          </Button>
        ) : props.button === "Hire Us Now" ? (
          <AgentButtons
            content={(props.content as string) ?? "Hire Us Now !!"}
            variant={"green-dark"}
            className={props.buttonClassName}
          />
        ) : props.button === "Price" ? (
          <AgentButtons
            variant="price"
            content={`GHS ${formatPrice(props.content as number)}`}
            className={props.buttonClassName}
          />
        ) : null}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-blackA6" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw] translate-x-[-50%] translate-y-[-50%] overflow-y-scroll rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <ClientOnly>
            <BeMyAgentForm setOpen={setOpen} />
          </ClientOnly>{" "}
          <Dialog.Close asChild>
            <button
              className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default BeMyAgentModal;
