"use client";
import React from "react";
import { IoIosShareAlt } from "react-icons/io";
import Modal from "../../modals/Modal";
import { useDisclosure } from "@nextui-org/react";
import ShareModalBody from "./ShareModalBody";


const ShareBtn = (props: ShareDataProps) => {
  // const handleSharing = async () => {
  //   try {
  //     if (!navigator.share || !navigator.canShare) {
  //       return false;
  //     }

  //     await navigator.share(shareData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const {onOpenChange, isOpen, onOpen} = useDisclosure()


  return (
    <>
    <Modal 
      onOpenChange={onOpenChange}
      isOpen={isOpen}
      header={<ShareModalHeader title={props.title as string} />}
      body={<ShareModalBody url="https://rentright.com.gh" />}
      size="lg"
    />
      <IoIosShareAlt
        className={`cursor-pointer ${props.className}`}
        onClick={onOpen}
      />
    </>
  );
};


const ShareModalHeader = ({title}: {title: string}) => {

  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-[700]">Share</h1>
      <h2 className="font-[500] text-base">{title}</h2>
    </div>
  )
}

export default ShareBtn;
