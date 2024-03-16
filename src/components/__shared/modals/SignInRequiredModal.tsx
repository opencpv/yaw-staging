"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { LoginButton } from "@/app/login/components/LoginButton";
import Link from "next/link";
import { LiaTimesSolid } from "react-icons/lia";
import Modal from "./Modal";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
};

const SignInRequiredModal = ({ open, onOpenChange, onClose }: Props) => {
  return (
    <>
      {/* <Dialog.Root onOpenChange={onOpenChange} open={open}>
        <Dialog.Portal>
            <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-[9999] bg-blackA6" />
            <Dialog.Content
            className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-[99999] box-border flex h-fit w-max translate-x-[-50%] translate-y-[-50%] flex-col overflow-y-hidden rounded-md bg-[#fefefe] shadow-small outline-none focus:outline-none max-lg:w-full max-lg:max-w-[500px]"
            onPointerDownOutside={(e) => e.preventDefault()}
            onInteractOutside={(e) => e.preventDefault()}
            >
            <div className="grid lg:grid-cols-2">
                <div className="relative h-full w-full max-lg:hidden">
                <Image
                    src={images.StockImage}
                    alt="Room"
                    fill
                    style={{ objectFit: "cover" }}
                />
                </div>
                <div className="flex w-full flex-col gap-10 bg-[#FAFAF9] px-10 py-16">
                <div className="space-y-5">
                    <div className="flex justify-between">
                    <h3>Sign In Required</h3>
                    <LiaTimesSolid size={16} />
                    </div>
                    <p>Please sign in to continue</p>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-6">
                    <LoginButton
                    text="Continue with Google"
                    icon="google"
                    className="max-w-full"
                    />
                    <LoginButton
                    text="Continue with Facebook"
                    icon="facebook"
                    className="max-w-full"
                    />
                    <LoginButton
                    text="Continue with Apple"
                    icon="apple"
                    className="max-w-full"
                    />
                </div>
                <div className="space-y-5">
                    <div className="">
                    <p className="text-shade-200">
                        By signing in, you are agree to the following:
                    </p>
                    </div>
                    <div className="flex gap-5">
                    <Link href="/terms-of-service">
                        <p className="text-neutral-800 underline">
                        Terms of Service
                        </p>
                    </Link>
                    <Link href="/privacy-policy">
                        <p className="text-neutral-800 underline">Privacy Policy</p>
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </Dialog.Content>
        </Dialog.Portal>
        </Dialog.Root> */}

      <Modal
        body={<ModalBody onClose={onClose} />}
        isOpen={open}
        onOpenChange={onOpenChange}
        size="5xl"
        scrollBehavior="normal"
        hideCloseButton
        bodyClassName="p-0"
      />
    </>
  );
};

export default SignInRequiredModal;

const ModalBody = ({ onClose }: { onClose: () => void }) => {
  const { images } = useAssets();

  return (
    <div className="grid md:grid-cols-2">
      <div className="relative h-full w-full max-md:hidden">
        <Image
          src={images.StockImage}
          alt="Room"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex w-full flex-col gap-10 bg-[#FAFAF9] px-10 py-16">
        <div className="space-y-5">
          <div className="flex justify-between">
            <h3>Sign In Required</h3>
            <button onClick={onClose}>
              <LiaTimesSolid size={16} />
            </button>
          </div>
          <p>Please sign in to continue</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <LoginButton
            text="Continue with Google"
            icon="google"
            className="max-w-full"
          />
          <LoginButton
            text="Continue with Facebook"
            icon="facebook"
            className="max-w-full"
          />
          <LoginButton
            text="Continue with Apple"
            icon="apple"
            className="max-w-full"
          />
        </div>
        <div className="space-y-5">
          <div className="">
            <p className="text-shade-200">
              By signing in, you are agree to the following:
            </p>
          </div>
          <div className="flex gap-5">
            <Link href="/terms-of-service">
              <p className="text-neutral-800 underline">Terms of Service</p>
            </Link>
            <Link href="/privacy">
              <p className="text-neutral-800 underline">Privacy Policy</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
