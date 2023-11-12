"use client";
import React, { useContext, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "@stitches/react";
import { motion } from "framer-motion";
import { SaveAndExit } from "../application-form/components/PropertyFormComplex/SaveAndExit";
import { openSans } from "@/app/styles/font";
import CaComment from "./components/icons/CaComment";
import ListingFormForm from "./components/ListingFormForm";
import { useLocalStorage } from "@uidotdev/usehooks";
import { submitListing, submitOrEditListing } from "./components/api";
import { AppContextType } from "@/app/dashboard/types";
import { AppContext } from "@/app/dashboard/AppContextProvider";

const ListingFormModal = () => {
  const [animation, setAnimation] = useState(false);
  const [open, setOpen] = useState(false);
  const [listingFormData, setListingFormData] = useLocalStorage(
    "listing-form",
    {}
  );
  const { user } = useContext(AppContext) as AppContextType;
  const owner_id = user?.profileData?.id;
  const [template_id, setTemplateId] = useState(25);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="aspect-[402/112] max-w-[402px] flex-grow w-full flex items-center justify-start rounded-xl 
         cursor-pointer gap-2 px-8 py-6 text-[20px]"
          style={{
            boxShadow: "0px 24px 48px -12px rgba(0, 0, 0, 0.18)",
          }}>
          <div className="rounded-full flex items-center justify-center w-full max-w-[64px] aspect-square bg-[#F1F1F1] ">
            <CaComment />
          </div>
          Create a New Listing
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 " />
        <Dialog.Content
          className={`data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] translate-x-[-50%] z-[1000]  ${
            animation ? " overflow-y-hidden" : "overflow-y-scroll"
          } translate-y-[-50%] rounded-[8px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none `}>
          <div className={`relative ${openSans.className} z-[1001]`}>
            <ListingFormForm setOpen={setOpen} />
          </div>

          <Dialog.Close asChild>
            <button
              onClick={() =>
                submitOrEditListing(owner_id, listingFormData, template_id)
              }
              className="focus:shadow-violet7 absolute top-[15px] right-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] 
              z-[2000] focus:outline-none "
              aria-label="Close">
              <SaveAndExit />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ListingFormModal;
