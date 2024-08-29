"use client";
import React, { createContext, useContext, useState } from "react";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { LiaTimesSolid } from "react-icons/lia";
import { Button } from "../../button";
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
const Modal = dynamic(() => import("../dialog").then((mod) => mod.Modal));

const Context = createContext<{
  handleVisibility: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

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

  return (
    <Context.Provider value={{ handleVisibility, setOpen }}>
      <Modal
        body={<ModalBody />}
        isOpen={open ?? true}
        onOpenChange={(open) => {
          handleVisibility();
          setOpen(open);
        }}
        closeButton={
          <CloseButton
            onClick={() => {
              setOpen(false);
              handleVisibility();
            }}
          />
        }
        className="max-w-[88rem] p-0"
      />
    </Context.Provider>
  );
};

const ModalBody = () => {
  const { images, icons } = useAssets();
  const setOpen = useContext(Context)?.setOpen;
  const handleVisibility = useContext(Context)?.handleVisibility;

  return (
    <main className="relative size-full text-white md:flex md:bg-primary">
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
        <button
          onClick={() => {
            setOpen?.(false);
            handleVisibility?.();
          }}
          color="primary"
          className="h-12 items-center gap-2 border border-white px-24 capitalize hover:bg-neutral-300 hover:text-neutral-600 max-xs:max-w-full"
        >
          Got it <FaThumbsUp size={24} className="scale-x-[-1]" />
        </button>
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
    <button
      className="circle-hover text-white max-md:hover:text-shade-500 md:text-shade-500"
      onClick={onClick}
    >
      <LiaTimesSolid size={24} />
    </button>
  );
};

export default NoticeModal;
