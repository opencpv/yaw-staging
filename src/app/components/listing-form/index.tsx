"use client";
import React, { useContext, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { SaveAndExit } from "../application-form/components/PropertyFormComplex/SaveAndExit";
import { openSans } from "@/styles/font";
import CaComment from "./components/icons/CaComment";
import ListingFormForm from "./components/ListingFormForm";
import { useLocalStorage } from "@uidotdev/usehooks";
import { submitListing, submitOrEditListing } from "./components/api/submit";
import { useAppStore } from "@/store/dashboard/AppStore";
import { ClientOnly } from "@/components/ui/ClientOnly";

const ListingFormModal = () => {
  const [animation, setAnimation] = useState(false);
  const [open, setOpen] = useState(false);
  const [listingFormData, setListingFormData] = useLocalStorage(
    "listing-form",
    {},
  );
  const { user } = useAppStore();
  const owner_id = user?.profileData?.id;
  const [template_id, setTemplateId] = useState(25);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="flex aspect-[402/112] w-full max-w-[402px] flex-grow cursor-pointer items-center justify-start 
         gap-2 rounded-xl px-8 py-6 text-[20px]"
          style={{
            boxShadow: "0px 24px 48px -12px rgba(0, 0, 0, 0.18)",
          }}
        >
          <div className="flex aspect-square w-full max-w-[64px] items-center justify-center rounded-full bg-secondary-50 ">
            <CaComment />
          </div>
          Create a New Listing
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-blackA6 " />
        <Dialog.Content
          className={`data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-[1000] max-h-[85vh] w-[90vw] translate-x-[-50%]  ${
            animation ? " overflow-y-hidden" : "overflow-y-scroll"
          } translate-y-[-50%] rounded-[8px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none `}
        >
          <div className={`relative z-[1001]`}>
            <ClientOnly>
              <ListingFormForm setOpen={setOpen} />
            </ClientOnly>
          </div>

          <Dialog.Close asChild>
            <button
              onClick={() =>
                submitOrEditListing(owner_id, listingFormData, template_id)
              }
              className="absolute right-[25px] top-[15px] z-[2000] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] 
              focus:shadow-violet7 focus:outline-none "
              aria-label="Close"
            >
              <SaveAndExit />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ListingFormModal;
