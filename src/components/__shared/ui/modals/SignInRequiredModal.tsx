"use client";
import React from "react";
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
      <Modal
        body={<ModalBody onClose={onClose} />}
        isOpen={open}
        onOpenChange={onOpenChange}
        size="5xl"
        scrollBehavior="normal"
        hideCloseButton
        classNames={{
          body: "p-0",  
        }}
      />
    </>
  );
};

export default SignInRequiredModal;

const ModalBody = ({ onClose }: { onClose: () => void }) => {
  const { images } = useAssets();
  const bodyRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // to prevent click propagation i.e prevent buttons from getting clicked clicked when modal is open
    if (bodyRef.current) {
      bodyRef.current.style.pointerEvents = "none";
      setTimeout(() => {
        bodyRef!.current!.style.pointerEvents = "auto";
      }, 300);
    }
  }, []);

  return (
    <div className="grid md:grid-cols-2" ref={bodyRef}>
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
