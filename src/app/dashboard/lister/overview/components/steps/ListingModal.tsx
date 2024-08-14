"use client";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import * as Yup from "yup";
import { useAppStore } from "@/store/dashboard/AppStore";
import Button from "@/components/__shared/ui/button/Button";
import ListingHeader from "./ListingHeader";
import ListingFooter from "./ListingFooter";
import { ClientOnly } from "@/components/__shared/hoc/ClientOnly";
import StepsModal from "@/components/__shared/ui/modals/steps/StepsModal";
import { Form, Formik } from "formik";
import { useLocalStorage } from "@uidotdev/usehooks";
import {
  ListingDefaultValues,
  ListingStepsStore,
} from "@/store/dashboard/ListingStepsStore";
import { usePathname } from "next/navigation";
import { convertBooleanToYesNo } from "@/lib/utils/stringManipulation";
import ListingForm, { views as ListingViews } from "./ListingForm";
import { useAddListing } from "../../services";
import { getFormValues } from "../../utils";
import Link from "next/link";

type Props = {
  className?: string;
  classNames?: {
    wrapper?: string;
  };
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "edit" | "create";
  listing?: Property;
  disabled?: boolean;
};

const ListingValidationSchema = Yup.object({
  property_type: Yup.string().required("Type of place is required"),
  suited_for: Yup.array().min(1, "Best Suited for is required"),
  furnish_level: Yup.string().required("Furnish level is required"),
  property_size: Yup.string().required("Property size is required"),
  description: Yup.string().required("Description is required"),
  bedrooms: Yup.string().required("Bedrooms is required"),
  bathrooms: Yup.string().required("Bathrooms is required"),
  renter_knowledge: Yup.string().required(
    "Things for renter to know is required",
  ),
  city: Yup.string().required("City is required"),
  neighbourhood: Yup.string().required("Neighbourhood is required"),
  available_date: Yup.string().required("Available Date is required"),
  features: Yup.array().min(1, "Features is required"),
  utilities: Yup.array().min(1, "Utilities is requiconveniencesred"),
  images: Yup.array().min(10, "At least 10 Images is required"),
  banner_image: Yup.object().required("Banner Image is required"),
  total_amount: Yup.number().required("Amount is required"),
  payment_terms: Yup.string().required("Payment Terms is required"),
  require_refundable_security_deposit: Yup.string(),
  require_additional_fees: Yup.string(),
  require_agent_fee: Yup.string(),
  require_viewing_fee: Yup.string(),
  refundable_security_deposit: Yup.number().when(
    "require_refundable_security_deposit",
    {
      is: "Yes",
      then: (schema) =>
        schema.required("Refundable Security Deposit is required"),
    },
  ),
  additional_fees: Yup.array().when("require_additional_fees", {
    is: "Yes",
    then: (schema) => schema.required("Additional Fee is required"),
  }),
  agent_fee: Yup.number().when("require_agent_fee", {
    is: "Yes",
    then: (schema) => schema.required("Agent Fee is required"),
  }),
  viewing_fee: Yup.number().when("require_viewing_fee", {
    is: "Yes",
    then: (schema) => schema.required("Viewing Fee is required"),
  }),
});

const ListingModal = (props: Props) => {
  const pathname = usePathname();
  const { user } = useAppStore();
  const [listingCreationSteps] = useLocalStorage<
    typeof ListingDefaultValues | null
  >("listing-creation-steps");

  const [listingEditSteps] = useLocalStorage<
    { listing: number; activeSlide: number }[]
  >("listing-edit-steps", []);

  const {
    isOpen,
    openCreatePage,
    listing,
    openEditPage,
    isOpenEditPage,
    closeEditPage,
    closeCreatePage,
    setActiveSlide,
    setListing,
    setPreviousPath,
  } = ListingStepsStore();

  const { mutate: addListing, data: listingData, isSuccess } = useAddListing();

  useEffect(() => {
    pathname?.includes("edit") ? openEditPage() : closeEditPage();
    pathname?.includes("create") ? openCreatePage() : closeCreatePage();
    if (isSuccess) {
      // success when Finish button is clicked
      setActiveSlide(ListingViews.length - 1);
      localStorage.removeItem("listing-creation-steps");
      localStorage.removeItem("listing-edit-steps");
    }
  }, [
    openCreatePage,
    closeCreatePage,
    pathname,
    openEditPage,
    closeEditPage,
    setListing,
    isSuccess,
    listingData,
    setActiveSlide,
  ]);

  const handleCreate = () => {
    setActiveSlide(0);
    setListing(null);
  };

  const handleEdit = () => {
    setPreviousPath(pathname as string);

    if (props.variant === "edit") {
      if (props.listing?.is_suspended !== true) {
        setListing(props.listing as Property);
        setActiveSlide(
          listingEditSteps?.find((step) => step.listing === props.listing?.id)
            ?.activeSlide ?? 1,
        );
      }
    } else {
      handleCreate();
    }
  };

  return (
    <div
      className={cn(
        "w-full",
        {
          invisible: pathname?.includes("edit") || pathname?.includes("create"), // hide button to avoid double click
        },
        props?.classNames?.wrapper,
      )}
    >
      {props?.children ? (
        <Link
          href={
            props.disabled
              ? ""
              : props.variant === "edit"
                ? `/dashboard/lister/overview/edit/012${props.listing?.id}` // for navifation purpose, it doesn't use the id in its function
                : "/dashboard/lister/overview/create"
          }
          className={cn("block w-full", props.className)}
          scroll={false}
          onClick={handleEdit}
        >
          {props.children}
        </Link>
      ) : (
        <Button
          href="/dashboard/lister/overview/create"
          color="primary"
          className={cn(props.className)}
          fit
          onClick={handleCreate}
        >
          Add Property
        </Button>
      )}

      <Formik
        initialValues={{
          template_type:
            listing?.template_type ||
            listingCreationSteps?.template_type ||
            ListingDefaultValues?.template_type,
          property_type:
            listing?.property_type ||
            listingCreationSteps?.property_type ||
            ListingDefaultValues?.property_type,
          suited_for:
            listing?.suited_for ||
            listingCreationSteps?.suited_for ||
            ListingDefaultValues?.suited_for,
          furnish_level:
            listing?.furnish_level ||
            listingCreationSteps?.furnish_level ||
            ListingDefaultValues?.furnish_level,
          property_name:
            listing?.property_name ||
            listingCreationSteps?.property_name ||
            ListingDefaultValues?.property_name,
          description:
            listing?.description ||
            listingCreationSteps?.description ||
            ListingDefaultValues?.description,
          renter_knowledge:
            listing?.renter_knowledge ||
            listingCreationSteps?.renter_knowledge ||
            ListingDefaultValues?.renter_knowledge,
          property_size:
            listing?.property_size ||
            listingCreationSteps?.property_size ||
            ListingDefaultValues?.property_size,
          bedrooms:
            listing?.bedrooms ||
            listingCreationSteps?.bedrooms ||
            ListingDefaultValues?.bedrooms,
          bathrooms:
            listing?.bathrooms ||
            listingCreationSteps?.bathrooms ||
            ListingDefaultValues?.bathrooms,
          city:
            listing?.city ||
            listingCreationSteps?.city ||
            ListingDefaultValues?.city,
          neighbourhood:
            listing?.neighbourhood ||
            listingCreationSteps?.neighbourhood ||
            ListingDefaultValues?.neighbourhood,
          available_date:
            listing?.available_date ||
            listingCreationSteps?.available_date ||
            ListingDefaultValues?.available_date,
          features:
            listing?.features ||
            listingCreationSteps?.features ||
            ListingDefaultValues?.features,
          utilities:
            listing?.utilities ||
            listingCreationSteps?.utilities ||
            ListingDefaultValues?.utilities,
          utilities_included:
            listing?.utilities_included ||
            listingCreationSteps?.utilities_included ||
            ListingDefaultValues?.utilities_included,
          images:
            listing?.images ||
            listingCreationSteps?.images ||
            ListingDefaultValues?.images,
          banner_image:
            listing?.banner_image ||
            listingCreationSteps?.banner_image ||
            ListingDefaultValues?.banner_image,
          payment_terms:
            listing?.payment_terms ||
            listingCreationSteps?.payment_terms ||
            ListingDefaultValues?.payment_terms,
          total_amount:
            listing?.total_amount ||
            listingCreationSteps?.total_amount ||
            ListingDefaultValues?.total_amount,
          require_refundable_security_deposit:
            convertBooleanToYesNo(
              listing?.require_refundable_security_deposit,
            ) ||
            listingCreationSteps?.require_refundable_security_deposit ||
            ListingDefaultValues?.require_refundable_security_deposit,
          require_additional_fees:
            convertBooleanToYesNo(listing?.require_additional_fees) ||
            listingCreationSteps?.require_additional_fees ||
            ListingDefaultValues?.require_additional_fees,
          require_agent_fee:
            convertBooleanToYesNo(listing?.require_agent_fee) ||
            listingCreationSteps?.require_agent_fee ||
            ListingDefaultValues?.require_agent_fee,
          require_viewing_fee:
            convertBooleanToYesNo(listing?.require_viewing_fee) ||
            listingCreationSteps?.require_viewing_fee ||
            ListingDefaultValues?.require_viewing_fee,
          refundable_security_deposit:
            (listing?.refundable_security_deposit as number) ||
            listingCreationSteps?.refundable_security_deposit ||
            ListingDefaultValues?.refundable_security_deposit,
          additional_fees:
            listing?.additional_fees ||
            listingCreationSteps?.additional_fees ||
            ListingDefaultValues?.additional_fees,
          agent_fee:
            (listing?.agent_fee as number) ||
            listingCreationSteps?.agent_fee ||
            ListingDefaultValues?.agent_fee,
          viewing_fee:
            (listing?.viewing_fee as number) ||
            listingCreationSteps?.viewing_fee ||
            ListingDefaultValues?.viewing_fee,
          currency:
            listing?.currency ||
            listingCreationSteps?.currency ||
            ListingDefaultValues?.currency,
          lease_duration:
            listing?.lease_duration ||
            listingCreationSteps?.lease_duration ||
            ListingDefaultValues?.lease_duration,
        }}
        validationSchema={ListingValidationSchema}
        onSubmit={(values) => {
          addListing(
            getFormValues({
              ...values,
              owner_uid: user?.id,
              is_complete: true,
              id: listing?.id,
            } as unknown as typeof ListingDefaultValues),
          );
        }}
      >
        <Form>
          <StepsModal
            header={<ListingHeader />}
            body={<Body />}
            footer={<ListingFooter />}
            open={isOpenEditPage || isOpen}
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
      <ListingForm />
    </ClientOnly>
  );
};
