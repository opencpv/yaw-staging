"use client";
import React from "react";
import Button from "@/components/__shared/ui/button/Button";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { ClientOnly } from "@/components/ui/ClientOnly";
import StepsModal from "@/components/__shared/modals/steps/StepsModal";
import { Form, Formik } from "formik";
import { useLocalStorage } from "@uidotdev/usehooks";
import { FirstToKnowFormType } from "./types";
import FirstToKnowForm, { firstToKnowDefaultValues } from "./FirstToKnowForm";
import * as Yup from "yup";
import FirstToKnowFooter from "./FirstToKnowFooter";
import FirstToKnowHeader from "./FirstToKnowHeader";
import { firstToKnowStepsStore } from "@/store/dashboard/firstToKnowStepsStore";

type Props = {
  button?: "Hire Us Now" | "Get Started" | "Ghost" | "Edit" | "Price";
  buttonClassName?: string;
  content?: React.ReactNode | string | number;
  children?: React.ReactNode;
};

const firstToKnowValidationSchema = Yup.object({
  // firstName: Yup.string().required("First name is required"),
  // lastName: Yup.string().required("Last Name is required"),
  // email: Yup.string()
  //   .email("Invalid email address")
  //   .required("Email is required"),
  // phoneNumber: Yup.string().required("Phone number is required"),
});

const FirstToKnowModal = (props: Props) => {
  // const [firstToKnowFormData] =
  //   useLocalStorage<FirstToKnowFormType>("first-to-know-form");

  const { lastSlide, isOpen, onOpen } = firstToKnowStepsStore();

  return (
    <>
      <Button color="primary" className="mt-10" onClick={onOpen}>
        <MdOutlineLibraryAdd />
        Create Search Criteria
      </Button>
      <Formik
        initialValues={{
          ...firstToKnowDefaultValues,
          // ...firstToKnowFormData, // localStorage data takes precedence over default values. Makes changes persist on reload
        }}
        // validationSchema={firstToKnowValidationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <StepsModal
            header={!lastSlide && <Header onClose={onOpen} />}
            body={<Body />}
            footer={!lastSlide && <Footer onClose={onOpen} />}
            open={isOpen}
            onOpenChange={onOpen}
            footerClassName={lastSlide ? "border-t-0" : "border-t"}
          />
        </Form>
      </Formik>
    </>
  );
};

export default FirstToKnowModal;

const Header = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="">
      <FirstToKnowHeader onClose={onClose} />
    </div>
  );
};

const Body = () => {
  return (
    <ClientOnly>
      <FirstToKnowForm />
    </ClientOnly>
  );
};

const Footer = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <FirstToKnowFooter onClose={onClose} />
    </>
  );
};
