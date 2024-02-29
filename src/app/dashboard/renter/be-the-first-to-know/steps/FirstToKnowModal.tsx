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
  const [firstToKnowFormData] =
    useLocalStorage<FirstToKnowFormType>("first-to-know-form");

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button color="primary" className="mt-10" onClick={() => setOpen(true)}>
        <MdOutlineLibraryAdd />
        Create Search Criteria
      </Button>
      <Formik
        initialValues={{
          ...firstToKnowDefaultValues,
          ...firstToKnowFormData, // localStorage data takes precedence over default values. Makes changes persist on reload
        }}
        // validationSchema={firstToKnowValidationSchema}
        onSubmit={(values) => console.log("")}
      >
        <Form>
          <StepsModal
            header={<Header onClose={() => setOpen(false)} />}
            body={<Body />}
            footer={<Footer onClose={() => setOpen(false)} />}
            open={open}
            onOpenChange={setOpen}
          />
        </Form>
      </Formik>
    </>
  );
};

export default FirstToKnowModal;

const Header = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <FirstToKnowHeader onClose={onClose} />
    </>
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
