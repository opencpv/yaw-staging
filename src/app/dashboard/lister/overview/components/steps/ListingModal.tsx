"use client";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { ClientOnly } from "@/components/__shared/hoc/ClientOnly";
import StepsModal from "@/components/__shared/ui/modals/steps/StepsModal";
import { Form, Formik } from "formik";
import { useLocalStorage } from "@uidotdev/usehooks";
import * as Yup from "yup";
import { usePathname } from "next/navigation";
import { useAppStore } from "@/store/dashboard/AppStore";
import ListingFormForm from "@/components/__shared/ui/listing-form/components/ListingFormForm";
import Button from "@/components/__shared/ui/button/Button";

type Props = {
  button?: "Hire Us Now" | "Get Started" | "Ghost" | "Edit" | "Price";
  buttonClassName?: string;
  content?: React.ReactNode | string | number;
  children?: React.ReactNode;
  /** Use for only Edit */
  onClick?: () => void;
};

const ListingValidationSchema = Yup.object({});

const ListingModal = (props: Props) => {
  const pathname = usePathname();
  const { user } = useAppStore();
  //const [listingCreationSteps] = useLocalStorage<
  //  typeof BeMyAgentDefaultValues | null
  //>("listing-creation-steps");

  return (
    <div
      className={cn({
        invisible: pathname?.includes("edit") || pathname?.includes("create"), // hide button to avoid double click
      })}
    >
      <Button
        href="/dashboard/lister/overview/create"
        color="primary"
        className="mt-5 w-fit"
      >
        Add Property
      </Button>
      <Formik
        initialValues={{}}
        validationSchema={ListingValidationSchema}
        onSubmit={(values) => {}}
      >
        <Form>
          <StepsModal
            header={<div>In Progress...</div>}
            body={<Body />}
            footer={<div>In Progress...</div>}
            open={pathname?.includes("create") || pathname?.includes("edit")}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default ListingModal;

const Body = () => {
  return (
    <ClientOnly>
      <ListingFormForm setOpen={() => {}} />
    </ClientOnly>
  );
};
