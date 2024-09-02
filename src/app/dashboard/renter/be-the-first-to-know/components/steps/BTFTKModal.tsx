"use client";
import React, { useEffect } from "react";
import { LinkButton } from "@/components/__shared/ui/button";
import { ClientOnly } from "@/components/__shared/hoc/ClientOnly";
import StepsModal from "@/components/__shared/ui/modals/steps/steps-modal";
import { Form, Formik } from "formik";
import BTFTKForm from "./BTFTKForm";
import * as Yup from "yup";
import BTFTKFooter from "./BTFTKFooter";
import BTFTKHeader from "./BTFTKHeader";
import {
  BTFTKDefaultValues,
  BTFTKStepsStore,
} from "@/store/dashboard/BTFTKStepsStore";
import { FaPlus } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useAddSearchCriteria } from "../../services";
import { useAppStore } from "@/store/dashboard/AppStore";
import { usePathname } from "next/navigation";
import { useLocalStorage } from "@uidotdev/usehooks";
import capitalizeName from "@/lib/utils/stringManipulation";
import { views as BTFTKViews } from "./BTFTKForm";
import Link from "next/link";

type Props = {
  buttonClassName?: string;
  content?: React.ReactNode | string | number;
  float?: boolean;
  disabled?: boolean;
  variant?: "create" | "edit";
  children?: React.ReactNode;
  criterion?: SearchCriteria;
};

const BTFTKValidationSchema = Yup.object({
  searchTitle: Yup.string().required("Search Title is required"),
  preferredType: Yup.array().min(1, "Preferred Type of Place is required"),
  requiredFeatures: Yup.array().min(1, "Features is required"),
  location: Yup.array().min(1, "Location is required"),
  preferredMethodOfContact: Yup.string(),
  whatsApp: Yup.string().when("preferredMethodOfContact", {
    is: "whatsapp",
    then: (schema) => schema.required("WhatsApp number is required"),
  }),
  email: Yup.string().when("preferredMethodOfContact", {
    is: "email",
    then: (schema) => schema.email().required("Email must be a valid email"),
  }),
});

const BTFTKModal = (props: Props) => {
  const pathname = usePathname();
  const { user } = useAppStore();

  const [BTFTKCreationSteps] = useLocalStorage<
    typeof BTFTKDefaultValues | null
  >("btftk-creation-steps");

  const [BTFTKEditSteps] = useLocalStorage<
    { criterion: number; activeSlide: number }[]
  >("btftk-edit-steps", []);

  const {
    lastSlide,
    isOpen,
    onOpen,
    criterion,
    onOpenEditPage,
    isOpenEditPage,
    setActiveSlide,
    onCloseEditPage,
    setCriterion,
    onClose,
    setPreviousPath,
  } = BTFTKStepsStore();

  const { mutate: addSearchCriteria, isSuccess } = useAddSearchCriteria();

  useEffect(() => {
    pathname?.includes("edit") ? onOpenEditPage() : onCloseEditPage();
    pathname?.includes("create") ? onOpen() : onClose();
    if (isSuccess) {
      // success after Finish buton is clicked
      setActiveSlide(BTFTKViews.length - 1);
      localStorage.removeItem("btftk-creation-steps");
      localStorage.removeItem("btftk-edit-steps");
    }
  }, [
    onOpen,
    onClose,
    setActiveSlide,
    pathname,
    onOpenEditPage,
    onCloseEditPage,
    isSuccess,
  ]);

  const handleEdit = () => {
    setPreviousPath(pathname as string);

    if (
      props?.criterion &&
      (props.criterion.is_active === false ||
        props.criterion.matched_properties === null)
    ) {
      setCriterion(props.criterion);
      setActiveSlide(
        BTFTKEditSteps?.find((step) => step.criterion === props.criterion?.id)
          ?.activeSlide ?? 1,
      );
    }
  };

  return (
    <div
      className={cn({
        "max-xs:fixed max-xs:bottom-10 max-xs:right-5 max-xs:z-30": props.float,
        invisible: pathname?.includes("edit") || pathname?.includes("create"),
      })}
    >
      {props.variant === "edit" ? (
        <Link
          href={
            props.disabled
              ? ""
              : `/dashboard/renter/be-the-first-to-know/manage-criteria/edit/LS6pI-${props.criterion?.id}-LWIKyOgnw==`
          }
          scroll={false}
          onClick={handleEdit}
        >
          {props.children}
        </Link>
      ) : (
        <LinkButton
          href="/dashboard/renter/be-the-first-to-know/create"
          className={cn({
            "max-xs:rounded-xl max-xs:shadow-md": props.float,
          })}
          onClick={() => {
            setActiveSlide(0); // set to 0 when creating
            setCriterion(null); // set to null when creating
            setPreviousPath(pathname as string);
          }}
        >
          <FaPlus /> Create a search
        </LinkButton>
      )}
      <Formik
        initialValues={{
          searchTitle:
            criterion?.title ||
            BTFTKCreationSteps?.searchTitle ||
            BTFTKDefaultValues.searchTitle,
          location:
            criterion?.location ||
            BTFTKCreationSteps?.location ||
            BTFTKDefaultValues.location,
          bedMaximum:
            criterion?.max_beds?.toString() ||
            BTFTKCreationSteps?.bedMaximum ||
            BTFTKDefaultValues.bedMaximum,
          bedMinimum:
            criterion?.min_beds?.toString() ||
            BTFTKCreationSteps?.bedMinimum ||
            BTFTKDefaultValues.bedMinimum,
          priceRangeMaximum:
            criterion?.max_price?.toString() ||
            BTFTKCreationSteps?.priceRangeMaximum ||
            BTFTKDefaultValues.priceRangeMaximum,
          priceRangeMinimum:
            criterion?.min_price?.toString() ||
            BTFTKCreationSteps?.priceRangeMinimum ||
            BTFTKDefaultValues.priceRangeMinimum,
          bathroomMaximum:
            criterion?.max_bathrooms?.toString() ||
            BTFTKCreationSteps?.bathroomMaximum ||
            BTFTKDefaultValues.bathroomMaximum,
          bathroomMinimum:
            criterion?.min_bathrooms?.toString() ||
            BTFTKCreationSteps?.bathroomMinimum ||
            BTFTKDefaultValues.bathroomMinimum,
          preferredType:
            criterion?.property_type ||
            BTFTKCreationSteps?.preferredType ||
            BTFTKDefaultValues.preferredType,
          requiredFeatures:
            criterion?.features ||
            BTFTKCreationSteps?.requiredFeatures ||
            BTFTKDefaultValues.requiredFeatures,
          specialKeywords:
            criterion?.keywords ||
            BTFTKCreationSteps?.specialKeywords ||
            BTFTKDefaultValues.specialKeywords,
          preferredMethodOfContact:
            criterion?.preferred_contact_method ||
            BTFTKCreationSteps?.preferredMethodOfContact ||
            BTFTKDefaultValues.preferredMethodOfContact,
          email:
            criterion?.email ||
            BTFTKCreationSteps?.email ||
            BTFTKDefaultValues.email,
          whatsApp:
            criterion?.phone ||
            BTFTKCreationSteps?.whatsApp ||
            BTFTKDefaultValues.whatsApp,
        }}
        validationSchema={BTFTKValidationSchema}
        onSubmit={(values) => {
          addSearchCriteria({
            title: values.searchTitle,
            location: values.location.length > 0 ? values.location : null,
            min_beds: values.bedMinimum,
            max_beds: values.bedMaximum,
            min_price: values.priceRangeMinimum,
            max_price: values.priceRangeMaximum,
            min_bathrooms: values.bathroomMinimum,
            max_bathrooms: values.bathroomMaximum,
            property_type: values.preferredType,
            email: values.email,
            phone: values.whatsApp,
            preferred_contact_method: capitalizeName(
              values.preferredMethodOfContact,
            ),
            features: values.requiredFeatures,
            keywords: values.specialKeywords,
            renter_id: user?.id,
            id: criterion?.id,
            is_active: true,
            matched_properties: criterion?.matched_properties || [],
            created_at: new Date().toISOString(),
          });
        }}
      >
        <Form>
          <StepsModal
            header={!lastSlide && <BTFTKHeader />}
            body={<Body />}
            footer={!lastSlide && <BTFTKFooter />}
            open={isOpenEditPage || isOpen}
            classNames={{ footer: lastSlide ? "border-t-0" : "border-t" }}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default BTFTKModal;

const Body = () => {
  return (
    <ClientOnly>
      <BTFTKForm />
    </ClientOnly>
  );
};
