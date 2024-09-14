"use client";
import React, { createContext, useContext, useState } from "react";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { FaThumbsUp } from "react-icons/fa6";
import styles from "./NoticeModal.module.css";
import legal from "@/enum/about/legal";
import {
  getLocalStorageWithExpiry,
  setLocalStorageWithExpiry,
} from "@/lib/utils/localStorage";
import { NOTICE_MODAL_TTL } from "@/constants";
import { cn } from "@/lib/utils";
import { pacifico } from "@/lib/utils/fonts";
import dynamic from "next/dynamic";
import { Button } from "../../button";
import { DialogContent } from "../dialog";
import { LiaTimesSolid } from "react-icons/lia";
const Dialog = dynamic(() => import("../dialog").then((mod) => mod.Dialog));

const Context = createContext<{
  handleVisibility: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

/**
 * A modal that interrupts the user with a notice with a <strong>TTL</strong> of about 7 days. <br />
 * It may not be showing because the user has already dismissed it.
 */
const NoticeModal = () => {
  const show = getLocalStorageWithExpiry("notice-modal-behavior");
  const [open, setOpen] = useState(show === "0" ? false : true);

  const handleVisibility = () => {
    if (show !== "0") {
      const key = "notice-modal-behavior";
      const value = "0";
      const ttl = NOTICE_MODAL_TTL;
      setLocalStorageWithExpiry(key, value, ttl);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    handleVisibility();
  };

  return (
    <Context.Provider value={{ handleVisibility, setOpen }}>
      <Dialog open={open ?? true} onOpenChange={handleOpenChange}>
        <DialogContent
          className="max-w-7xl p-0 max-md:max-h-svh"
          closeButton={<CloseButton onClick={() => handleOpenChange(false)} />}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <ModalBody />
        </DialogContent>
      </Dialog>
    </Context.Provider>
  );
};

const ModalBody = () => {
  const { images, icons } = useAssets();
  const setOpen = useContext(Context)?.setOpen;
  const handleVisibility = useContext(Context)?.handleVisibility;

  return (
    <main className="relative grid size-full rounded-lg text-white md:grid-cols-2 md:bg-primary">
      <Image
        src={images.CoupleHoldingBoxes}
        alt="Couple holding boxes"
        fill
        className="z-10 object-cover md:hidden"
      />
      <section className="relative z-20 flex w-full flex-col gap-5 px-5 py-14 max-md:bg-primary max-md:bg-opacity-80 xs:items-center xs:px-10 xs:text-center md:z-10 md:max-w-lg lg:max-w-xl">
        <Image
          src={icons.LogoNoText}
          alt={`${legal.websiteName} Logo`}
          width={80}
          height={80}
        />
        <h4 className="w-fit border-b border-accent font-bold">
          Your Ultimate Guide To
        </h4>
        <h2 className="font-bold sm:text-3xl">Rent The Right Way</h2>
        <p className={styles.body}>
          <span className={styles.em}>P.S.</span> Our platform is open to
          everyone to use for <span className={styles.emOutline}>Free</span>. We
          rely on <span className={styles.emOutline}>You</span> to ensure
          genuine listings and honest transactions. Please report any issues or
          suspicious postings. We will take action{" "}
          <span className={styles.emOutline}>immediately</span> !<br />{" "}
          <span className={styles.emCallout}>No Wahala No Azaa.</span>
        </p>
        <div className="flex flex-col items-start self-start">
          <small className={cn("font-pacifico antialiased", pacifico.variable)}>
            Sincerely,
          </small>
          <small>Rentright Team</small>
        </div>
        <Button
          onClick={() => {
            setOpen?.(false);
            handleVisibility?.();
          }}
          variant={"outline"}
          size={"full"}
          className="border-white bg-transparent capitalize text-white hover:bg-neutral-300 hover:text-neutral-600"
        >
          Got it <FaThumbsUp size={24} className="scale-x-[-1]" />
        </Button>
      </section>
      <div className="relative w-full max-md:hidden">
        <Image
          src={images.CoupleHoldingBoxes}
          alt="Couple holding boxes"
          fill
          className="z-20 object-cover"
        />
      </div>
    </main>
  );
};

const CloseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      className="circle-hover"
      onClick={onClick}
      asChild
    >
      <LiaTimesSolid size={24} className="text-white md:text-shade-500" />
    </Button>
  );
};

export default NoticeModal;
