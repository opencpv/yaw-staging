"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Modal from "../Modal";
import { LiaTimesSolid } from "react-icons/lia";
import { pacifico } from "@/lib/utils/fonts";
import Button from "../../button/Button";
import { FaThumbsUp } from "react-icons/fa6";
import styles from "./NoticeModal.module.css";
import legal from "@/enum/about/legal";

const NoticeModal = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Modal
        body={<ModalBody setOpen={setOpen} />}
        isOpen={open}
        onOpenChange={(open) => setOpen(open)}
        //size="5xl"
        scrollBehavior="normal"
        bodyClassName="p-0"
        hideCloseButton
        className="max-w-[88rem]"
      />
    </>
  );
};

const ModalBody = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { images, icons } = useAssets();

  return (
    <main className="relative size-full text-white md:flex md:bg-primary">
      <button
        className="circle-hover absolute right-10 top-5 z-30 text-white max-md:hover:text-shade-500 md:text-shade-500"
        onClick={() => setOpen(false)}
      >
        <LiaTimesSolid size={24} />
      </button>{" "}
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
          <span className={styles.em}>p.s:</span> Our platform is open to
          everyone to use for <span className={styles.emOutline}>Free</span>. We
          rely on <span className={styles.emOutline}>You</span> to ensure
          genuine listings and honest transactions. Please report any issues or
          suspicious postings. We will take action{" "}
          <span className={styles.emOutline}>immediately</span> !<br />{" "}
          <span className={styles.emCallout}>No Wahala No Azan.</span>
        </p>
        <div className="flex flex-col self-start xs:items-center">
          <small className={`${pacifico.className}`}>Sincerely,</small>
          <small>Rentright Team</small>
        </div>
        <Button
          onClick={() => setOpen(false)}
          color="primary"
          className="h-12 items-center gap-2 border border-white px-24 capitalize hover:bg-neutral-300 hover:text-neutral-600 max-xs:max-w-full"
        >
          Got it <FaThumbsUp size={24} />
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

export default NoticeModal;
