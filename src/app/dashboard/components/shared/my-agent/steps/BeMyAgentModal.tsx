"use client";
import React from "react";
import AgentButtons from "@/app/dashboard/components/shared/my-agent/Button";
import BeMyAgentForm from "./BeMyAgentForm";
import Button from "@/components/__shared/ui/button/Button";
import { MdOutlineEdit } from "react-icons/md";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils/numberManipulation";
import Modal from "@/components/__shared/modals/Modal";
import BeMyAgentHeader from "./BeMyAgentHeader";
import BeMyAgentFooter from "./BeMyAgentFooter";
import * as Dialog from "@radix-ui/react-dialog";
import { ClientOnly } from "@/components/ui/ClientOnly";
import StepsModal from "@/components/__shared/modals/steps/StepsModal";
import { Form, Formik } from "formik";
import { useLocalStorage } from "@uidotdev/usehooks";
import { BeMyAgentFormType } from "./types";
import { beMyAgentDefaultValues } from "./BeMyAgentForm";
import * as Yup from "yup";

type Props = {
  button?: "Hire Us Now" | "Get Started" | "Ghost" | "Edit" | "Price";
  buttonClassName?: string;
  content?: React.ReactNode | string | number;
  children?: React.ReactNode;
};

const myAgentValidationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last Name is required"),
  // email: Yup.string()
  //   .email("Invalid email address")
  //   .required("Email is required"),
  // phoneNumber: Yup.string().required("Phone number is required"),
});

const BeMyAgentModal = (props: Props) => {
  const [agentFormData] = useLocalStorage<BeMyAgentFormType>("agent-form");

  const [open, setOpen] = React.useState(false);

  return (
    <>
      {props.button === "Get Started" ? (
        <AgentButtons
          content={(props.content as string) ?? "Get Started"}
          variant={"green-fade-light"}
          className={props.buttonClassName}
          onClick={() => setOpen(true)}
        />
      ) : props.button === "Ghost" ? (
        <Button
          variant="ghost"
          className={props.buttonClassName}
          onClick={() => setOpen(true)}
        >
          {props.content}
        </Button>
      ) : props.button === "Edit" ? (
        <Button
          isIconOnly
          title="Edit"
          className={cn(
            "flex w-fit items-center justify-center rounded-md bg-secondary-50 p-4 text-neutral-800",
            props.buttonClassName,
          )}
          onClick={() => setOpen(true)}
        >
          <MdOutlineEdit size={16} />
        </Button>
      ) : props.button === "Hire Us Now" ? (
        <AgentButtons
          content={(props.content as string) ?? "Hire Us Now !!"}
          variant={"green-dark"}
          className={props.buttonClassName}
          onClick={() => setOpen(true)}
        />
      ) : props.button === "Price" ? (
        <AgentButtons
          variant="price"
          content={`GHS ${formatPrice(props.content as number)}`}
          className={props.buttonClassName}
          onClick={() => setOpen(true)}
        />
      ) : null}
      <Formik
        initialValues={{
          ...beMyAgentDefaultValues,
          ...agentFormData, // localStorage data takes precedence over default values. Makes changes persist on reload
        }}
        // validationSchema={myAgentValidationSchema}
        // enableReinitialize
        onSubmit={(values) => null}
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

export default BeMyAgentModal;

const Header = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <BeMyAgentHeader onClose={onClose} />
    </>
  );
};

const Body = () => {
  return (
    <ClientOnly>
      <BeMyAgentForm />
    </ClientOnly>
  );
};

const Footer = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <BeMyAgentFooter onClose={onClose} />
    </>
  );
};
