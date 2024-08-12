"use client";
import React, { useEffect } from "react";
import AgentButtons from "../Button";
import BeMyAgentForm from "./BeMyAgentForm";
import Button from "@/components/__shared/ui/button/Button";
import { MdOutlineEdit } from "react-icons/md";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils/numberManipulation";
import BeMyAgentHeader from "./BeMyAgentHeader";
import BeMyAgentFooter from "./BeMyAgentFooter";
import { ClientOnly } from "@/components/__shared/hoc/ClientOnly";
import StepsModal from "@/components/__shared/ui/modals/steps/StepsModal";
import { Form, Formik } from "formik";
import { useLocalStorage } from "@uidotdev/usehooks";
import {
  BeMyAgentDefaultValues,
  BeMyAgentStepsStore,
} from "@/store/dashboard/BeMyAgentStepsStore";
import * as Yup from "yup";
import { usePathname } from "next/navigation";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useAddAgentRequest } from "../../services";
import capitalizeName, { convertBooleanToYesNo } from "@/lib/utils/stringManipulation";
import { views as BeMyAgentViews } from "./BeMyAgentForm";
import { getFormValues } from "../../utils";

type Props = {
  button?: "Hire Us Now" | "Get Started" | "Ghost" | "Edit" | "Price";
  buttonClassName?: string;
  content?: React.ReactNode | string | number;
  children?: React.ReactNode;
  /** Use for only Edit */
  onClick?: () => void;
};

const BeMyAgentValidationSchema = Yup.object({
  search_title: Yup.string().required("Search Title is required"),
  location: Yup.array().min(1, "Location is required"),
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  property_type: Yup.array().min(1, "Preferred Type of Place is required"),
  features: Yup.array().min(1, "Features is required"),
  preferred_contact_method: Yup.string(),
  move_in_date: Yup.string().required("Desired Move In Date is required"),
  current_address_1: Yup.string().required("Current Address 1 is required"),
  moving_reason: Yup.string().required("Purpose for Moving is required"),
  city: Yup.string().required("City is required"),
  employer: Yup.string().required("Employer is required"),
  job_title: Yup.string().required("Job Title is required"),
  evicted: Yup.string().required("Screening & Other Details is Required"),
  convicted: Yup.string().required("Screening & Other Details is Required"),
  has_pets: Yup.string().required("Screening & Other Details is Required"),
  has_vehicles: Yup.string().required("Screening & Other Details is Required"),
  phone: Yup.string().when("preferred_contact_method", {
    is: "whatsapp",
    then: (schema) => schema.required("WhatsApp Number is required"),
  }),
  email: Yup.string().when("preferred_contact_method", {
    is: "email",
    then: (schema) => schema.email().required("Email must be a valid email"),
  }),
});

const BeMyAgentModal = (props: Props) => {
  const pathname = usePathname();
  const { user } = useAppStore();
  const [BeMyAgentCreationSteps] = useLocalStorage<
    typeof BeMyAgentDefaultValues | null
  >("bma-creation-steps");

  const {
    isOpen,
    onOpen,
    agentRequest,
    onOpenEditPage,
    isOpenEditPage,
    onCloseEditPage,
    onClose,
    setActiveSlide,
    setAgentRequest,
  } = BeMyAgentStepsStore();

  const {
    mutate: addAgentRequest,
    data: agentRequestData,
    isSuccess,
  } = useAddAgentRequest();

  useEffect(() => {
    pathname?.includes("edit") ? onOpenEditPage() : onCloseEditPage();
    pathname?.includes("create") ? onOpen() : onClose();
    if (isSuccess) {
      setAgentRequest(agentRequestData);
      setActiveSlide(BeMyAgentViews.length - 1);
      localStorage.removeItem("bma-creation-steps");
    }
  }, [
    onOpen,
    onClose,
    pathname,
    onOpenEditPage,
    onCloseEditPage,
    setAgentRequest,
    isSuccess,
    agentRequestData,
    setActiveSlide,
  ]);

  return (
    <div
      className={cn({
        invisible: pathname?.includes("edit") || pathname?.includes("create"), // hide button to avoid double click
      })}
    >
      {props.button === "Get Started" ? (
        <AgentButtons
          href="/dashboard/renter/my-agent/create"
          content={(props.content as string) ?? "Get Started"}
          variant={"green-fade-light"}
          className={props.buttonClassName}
          onClick={() => {
            setActiveSlide(0);
            setAgentRequest(null);
          }}
        />
      ) : props.button === "Ghost" ? (
          <Button
            variant="ghost"
            className={props.buttonClassName}
            onClick={() => {
              setActiveSlide(BeMyAgentViews.length - 1);
              props.onClick?.();
            }}
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
              onClick={() => {
                setActiveSlide(BeMyAgentViews.length - 1);
                props.onClick?.();
              }}
            >
              <MdOutlineEdit size={16} />
            </Button>
          ) : props.button === "Hire Us Now" ? (
              <AgentButtons
                href="/dashboard/renter/my-agent/create"
                content={(props.content as string) ?? "Hire Us Now !!"}
                variant={"green-dark"}
                className={props.buttonClassName}
                onClick={() => {
                  setActiveSlide(0);
                  setAgentRequest(null);
                }}
              />
            ) : props.button === "Price" ? (
                <AgentButtons
                  href="/dashboard/renter/my-agent/create"
                  variant="price"
                  content={formatPrice(props.content as number)}
                  className={props.buttonClassName}
                  onClick={() => {
                    setActiveSlide(0);
                    setAgentRequest(null);
                  }}
                />
              ) : null}
      <Formik
        initialValues={{
          search_title:
          agentRequest?.search_title ||
            BeMyAgentCreationSteps?.search_title ||
            BeMyAgentDefaultValues.search_title,
          location:
          agentRequest?.location ||
            BeMyAgentCreationSteps?.location ||
            BeMyAgentDefaultValues.location,
          max_beds:
          agentRequest?.max_beds?.toString() ||
            BeMyAgentCreationSteps?.max_beds ||
            BeMyAgentDefaultValues.max_beds,
          min_beds:
          agentRequest?.min_beds?.toString() ||
            BeMyAgentCreationSteps?.min_beds ||
            BeMyAgentDefaultValues.min_beds,
          max_price:
          agentRequest?.max_price?.toString() ||
            BeMyAgentCreationSteps?.max_price ||
            BeMyAgentDefaultValues.max_price,
          min_price:
          agentRequest?.min_price?.toString() ||
            BeMyAgentCreationSteps?.min_price ||
            BeMyAgentDefaultValues.min_price,
          max_bathrooms:
          agentRequest?.max_bathrooms?.toString() ||
            BeMyAgentCreationSteps?.max_bathrooms ||
            BeMyAgentDefaultValues.max_bathrooms,
          min_bathrooms:
          agentRequest?.min_bathrooms?.toString() ||
            BeMyAgentCreationSteps?.min_bathrooms ||
            BeMyAgentDefaultValues.min_bathrooms,
          property_type:
          agentRequest?.property_type ||
            BeMyAgentCreationSteps?.property_type ||
            BeMyAgentDefaultValues.property_type,
          features:
          agentRequest?.features ||
            BeMyAgentCreationSteps?.features ||
            BeMyAgentDefaultValues.features,
          preferred_contact_method:
          agentRequest?.preferred_contact_method ||
            BeMyAgentCreationSteps?.preferred_contact_method ||
            BeMyAgentDefaultValues.preferred_contact_method,
          email:
          agentRequest?.email ||
            BeMyAgentCreationSteps?.email ||
            BeMyAgentDefaultValues.email,
          phone:
          agentRequest?.phone ||
            BeMyAgentCreationSteps?.phone ||
            BeMyAgentDefaultValues.phone,
          move_in_date:
          agentRequest?.move_in_date ||
            BeMyAgentCreationSteps?.move_in_date ||
            BeMyAgentDefaultValues.move_in_date,
          country:
          agentRequest?.country ||
            BeMyAgentCreationSteps?.country ||
            BeMyAgentDefaultValues.country,
          moving_reason:
          agentRequest?.moving_reason ||
            BeMyAgentCreationSteps?.moving_reason ||
            BeMyAgentDefaultValues.moving_reason,
          city:
          agentRequest?.city ||
            BeMyAgentCreationSteps?.city ||
            BeMyAgentDefaultValues.city,
          employer:
          agentRequest?.employer ||
            BeMyAgentCreationSteps?.employer ||
            BeMyAgentDefaultValues.employer,
          employment_status:
          agentRequest?.employment_status ||
            BeMyAgentCreationSteps?.employment_status ||
            BeMyAgentDefaultValues.employment_status,
          employer_country:
          agentRequest?.employer_country ||
            BeMyAgentCreationSteps?.employer_country ||
            BeMyAgentDefaultValues.employer_country,
          min_lease:
          agentRequest?.min_lease ||
            BeMyAgentCreationSteps?.min_lease ||
            BeMyAgentDefaultValues.min_lease,
          max_lease:
          agentRequest?.max_lease ||
            BeMyAgentCreationSteps?.max_lease ||
            BeMyAgentDefaultValues.max_lease,
          preferred_payment_option:
          agentRequest?.preferred_payment_option ||
            BeMyAgentCreationSteps?.preferred_payment_option ||
            BeMyAgentDefaultValues.preferred_payment_option,
          title:
          agentRequest?.title ||
            BeMyAgentCreationSteps?.title ||
            BeMyAgentDefaultValues.title,
          age:
          agentRequest?.age ||
            BeMyAgentCreationSteps?.age ||
            BeMyAgentDefaultValues.age,
          marital_status:
          agentRequest?.marital_status ||
            BeMyAgentCreationSteps?.marital_status ||
            BeMyAgentDefaultValues.marital_status,
          tenants:
          agentRequest?.tenants ||
            BeMyAgentCreationSteps?.tenants ||
            BeMyAgentDefaultValues.tenants,
          first_name:
          agentRequest?.first_name ||
            BeMyAgentCreationSteps?.first_name ||
            BeMyAgentDefaultValues.first_name,
          last_name:
          agentRequest?.last_name ||
            BeMyAgentCreationSteps?.last_name ||
            BeMyAgentDefaultValues.last_name,
          evicted:
          convertBooleanToYesNo(agentRequest?.evicted) ||
            BeMyAgentCreationSteps?.evicted ||
            BeMyAgentDefaultValues.evicted,
          convicted:
          convertBooleanToYesNo(agentRequest?.convicted) ||
            BeMyAgentCreationSteps?.convicted ||
            BeMyAgentDefaultValues.convicted,
          has_pets:
          convertBooleanToYesNo(agentRequest?.has_pets) ||
            BeMyAgentCreationSteps?.has_pets ||
            BeMyAgentDefaultValues.has_pets,
          has_vehicles:
          convertBooleanToYesNo(agentRequest?.has_vehicles) ||
            BeMyAgentCreationSteps?.has_vehicles ||
            BeMyAgentDefaultValues.has_vehicles,
          current_address_1:
          agentRequest?.current_address_1 ||
            BeMyAgentCreationSteps?.current_address_1 ||
            BeMyAgentDefaultValues.current_address_1,
          current_address_2:
          agentRequest?.current_address_2 ||
            BeMyAgentCreationSteps?.current_address_2 ||
            BeMyAgentDefaultValues.current_address_2,
          job_title:
          agentRequest?.job_title ||
            BeMyAgentCreationSteps?.job_title ||
            BeMyAgentDefaultValues.job_title,
          monthly_income:
          agentRequest?.monthly_income ||
            BeMyAgentCreationSteps?.monthly_income ||
            BeMyAgentDefaultValues.monthly_income,
          monthly_income_currency:
          agentRequest?.monthly_income_currency ||
            BeMyAgentCreationSteps?.monthly_income_currency ||
            BeMyAgentDefaultValues.monthly_income_currency,
        }}
        validationSchema={BeMyAgentValidationSchema}
        onSubmit={(values) => {
          addAgentRequest(
            getFormValues(
              {
                ...values,
                renter_id: user?.id as string,
                id: agentRequest?.id,
              } as unknown as typeof BeMyAgentDefaultValues,

            ));
        }}
      >
        <Form>
          <StepsModal
            header={<BeMyAgentHeader />}
            body={<Body />}
            footer={<BeMyAgentFooter />}
            open={isOpenEditPage || isOpen}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default BeMyAgentModal;

const Body = () => {
  return (
    <ClientOnly>
      <BeMyAgentForm />
    </ClientOnly>
  );
};
