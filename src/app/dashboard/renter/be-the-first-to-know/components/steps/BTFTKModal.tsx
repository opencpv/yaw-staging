"use client";
import React, { useEffect } from "react";
import Button from "@/components/__shared/ui/button/Button";
import { ClientOnly } from "@/components/__shared/hoc/ClientOnly";
import StepsModal from "@/components/__shared/ui/modals/steps/StepsModal";
import { Form, Formik } from "formik";
import BTFTKForm, { BTFTKDefaultValues } from "./BTFTKForm";
import * as Yup from "yup";
import BTFTKFooter from "./BTFTKFooter";
import BTFTKHeader from "./BTFTKHeader";
import { BTFTKStepsStore } from "@/store/dashboard/BTFTKStepsStore";
import { FaPlus } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useAddSearchCriteria } from "../../services";
import { useAppStore } from "@/store/dashboard/AppStore";
import { usePathname } from "next/navigation";

type Props = {
  button?: "Hire Us Now" | "Get Started" | "Ghost" | "Edit" | "Price";
  buttonClassName?: string;
  content?: React.ReactNode | string | number;
  float?: boolean;
  disabled?: boolean;
};

const BTFTKValidationSchema = Yup.object({
  searchTitle: Yup.string().required("Search title is required"),
  preferredType: Yup.array().min(1, "Preferred type of place is required"),
  requiredFeatures: Yup.array().min(1, "Features is required"),
  location: Yup.string().required("Location is required"),
  email: Yup.string().email("Invalid email address"),
  preferredMethodOfContact: Yup.string(),
  whatsApp: Yup.string().when("email", (email, schema) => {
    if (!email) {
      return schema.required("WhatsApp or Email is required");
    }
    return schema;
  }),
});

const BTFTKModal = (props: Props) => {
  const pathname = usePathname();
  const { user } = useAppStore();
  const {
    lastSlide,
    isOpen,
    onOpen,
    criterion,
    onOpenEditPage,
    isOpenEditPage,
    onCloseEditPage,
    setCriterion,
  } = BTFTKStepsStore();

  const { mutate: addSearchCriteria } = useAddSearchCriteria();

  useEffect(() => {
    pathname?.includes("edit") ? onOpenEditPage() : onCloseEditPage();
  }, [onOpen, pathname, onOpenEditPage, onCloseEditPage]);

  return (
    <div
      className={cn({
        "max-xs:fixed max-xs:bottom-10 max-xs:right-5 max-xs:z-30": props.float,
      })}
    >
      <Button
        color="primary"
        className={cn("w-fit px-5 ", {
          "max-xs:rounded-xl max-xs:shadow-md": props.float,
        })}
        onClick={() => {
          onOpen();
          setCriterion(null);
        }}
      >
        <FaPlus /> Create a search
      </Button>
      <Formik
        initialValues={{
          searchTitle: criterion?.title || BTFTKDefaultValues.searchTitle,
          location: criterion?.location || BTFTKDefaultValues.location,
          bedMaximum:
            criterion?.max_beds?.toString() || BTFTKDefaultValues.bedMaximum,
          bedMinimum:
            criterion?.min_beds?.toString() || BTFTKDefaultValues.bedMinimum,
          priceRangeMaximum:
            criterion?.max_price?.toString() ||
            BTFTKDefaultValues.priceRangeMaximum,
          priceRangeMinimum:
            criterion?.min_price?.toString() ||
            BTFTKDefaultValues.priceRangeMinimum,
          bathroomMaximum:
            criterion?.max_bathrooms?.toString() ||
            BTFTKDefaultValues.bathroomMaximum,
          bathroomMinimum:
            criterion?.min_bathrooms?.toString() ||
            BTFTKDefaultValues.bathroomMinimum,
          preferredType:
            criterion?.property_type || BTFTKDefaultValues.preferredType,
          requiredFeatures:
            criterion?.features || BTFTKDefaultValues.requiredFeatures,
          specialKeywords:
            criterion?.keywords || BTFTKDefaultValues.specialKeywords,
          preferredMethodOfContact:
            criterion?.preferred_contact_method ||
            BTFTKDefaultValues.preferredMethodOfContact,
          email: criterion?.email || BTFTKDefaultValues.email,
          whatsApp: criterion?.phone || BTFTKDefaultValues.whatsApp,
        }}
        validationSchema={BTFTKValidationSchema}
        onSubmit={(values) => {
          addSearchCriteria({
            title: values.searchTitle,
            location: values.location,
            max_beds: Number(values.bedMaximum),
            min_beds: Number(values.bedMinimum),
            max_price: Number(values.priceRangeMaximum),
            min_price: Number(values.priceRangeMinimum),
            property_type: values.preferredType,
            max_bathrooms: Number(values.bathroomMaximum),
            min_bathrooms: Number(values.bathroomMinimum),
            email: values.email,
            phone: values.whatsApp,
            preferred_contact_method: values.preferredMethodOfContact,
            features: values.requiredFeatures,
            keywords: values.specialKeywords,
            renter_id: user?.id,
            id: criterion?.id,
            is_active: true,
            matched_properties: criterion?.matched_properties || [],
          });
        }}
      >
        <Form>
          <StepsModal
            header={!lastSlide && <Header />}
            body={<Body />}
            footer={!lastSlide && <Footer />}
            open={isOpenEditPage || isOpen}
            //onOpenChange={onOpen}
            footerClassName={lastSlide ? "border-t-0" : "border-t"}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default BTFTKModal;

const Header = () => {
  return <BTFTKHeader />;
};

const Body = () => {
  return (
    <ClientOnly>
      <BTFTKForm />
    </ClientOnly>
  );
};

const Footer = () => {
  return (
    <>
      <BTFTKFooter />
    </>
  );
};
