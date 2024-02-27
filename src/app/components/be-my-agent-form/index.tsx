"use client";
import React from "react";
import AgentButtons from "@/app/dashboard/components/shared/my-agent/Button";
import BeMyAgentForm from "./components/BeMyAgentForm";
import Button from "@/components/__shared/ui/button/Button";
import { MdOutlineEdit } from "react-icons/md";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils/numberManipulation";
import Modal from "@/components/__shared/modals/Modal";
import { useDisclosure } from "@nextui-org/react";
import BeMyAgentFormHeader from "./components/BeMyAgentFormHeader";
import BeMyAgentFormFooter from "./components/BeMyAgentFormFooter";
import { beMyAgentProcessStore } from "@/store/dashboard/beMyAgentProcessStore";
import { useHideDocumentScrollBar } from "@/lib/custom-hooks/useWindowEvents";

type Props = {
  button?: "Hire Us Now" | "Get Started" | "Ghost" | "Edit" | "Price";
  buttonClassName?: string;
  content?: React.ReactNode | string | number;
  children?: React.ReactNode;
};

const BeMyAgentModal = (props: Props) => {
  const { onOpenChange } = useDisclosure();
  const { isOpen, onOpen } = beMyAgentProcessStore();

  useHideDocumentScrollBar(isOpen);

  return (
    <>
      {props.button === "Get Started" ? (
        <AgentButtons
          content={(props.content as string) ?? "Get Started"}
          variant={"green-fade-light"}
          className={props.buttonClassName}
          onClick={onOpen}
        />
      ) : props.button === "Ghost" ? (
        <Button
          variant="ghost"
          className={props.buttonClassName}
          onClick={onOpen}
        >
          {props.content}
        </Button>
      ) : props.button === "Edit" ? (
        <Button
          isIconOnly
          title="Edit"
          className={cn(
            "flex w-fit items-center justify-center rounded-md bg-secondary-50 p-4 text-neutral-800",
            props.buttonClassName,
          )}
          onClick={onOpen}
        >
          <MdOutlineEdit size={16} />
        </Button>
      ) : props.button === "Hire Us Now" ? (
        <AgentButtons
          content={(props.content as string) ?? "Hire Us Now !!"}
          variant={"green-dark"}
          className={props.buttonClassName}
          onClick={onOpen}
        />
      ) : props.button === "Price" ? (
        <AgentButtons
          variant="price"
          content={`GHS ${formatPrice(props.content as number)}`}
          className={props.buttonClassName}
          onClick={onOpen}
        />
      ) : null}
      {/* <Dialog.Root onOpenChange={setOpen} open={open}>
        <Dialog.Trigger asChild className="w-full">
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-blackA6" />
          <Dialog.Content
            className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-50 h-[100dvh] w-[100dvw] translate-x-[-50%] translate-y-[-50%] overflow-y-hidden rounded-[6px] bg-[#fefefe] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
            onEscapeKeyDown={(e) => e.preventDefault()}
          >
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
              <Button
                color="white"
                radius="full"
                className="border px-5"
                onClick={(prevData) =>
                  setAgentFormData({ ...prevData, activeSlide })
                }
              >
                Save & Exit
              </Button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root> */}

      <Modal
        size="full"
        hideCloseButton
        isDismissible={false}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        header={<BeMyAgentFormHeader />}
        footer={<BeMyAgentFormFooter />}
        footerClassName="border-t"
        body={<BeMyAgentForm />}
        backdropClassName="z-[100]"
        wrapperClassName="z-[100]"
      />
    </>
  );
};

export default BeMyAgentModal;
