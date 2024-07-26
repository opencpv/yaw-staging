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
import capitalizeName from "@/lib/utils/stringManipulation";
import { views as BeMyAgentViews } from "./BeMyAgentForm";

type Props = {
  button?: "Hire Us Now" | "Get Started" | "Ghost" | "Edit" | "Price";
  buttonClassName?: string;
  content?: React.ReactNode | string | number;
  children?: React.ReactNode;
  /** Use for only Edit */
  onClick?: () => void;
};

const BeMyAgentValidationSchema = Yup.object({
  searchTitle: Yup.string().required("Search Title is required"),
  location: Yup.array().min(1, "Location is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  preferredType: Yup.array().min(1, "Preferred Type of Place is required"),
  requiredFeatures: Yup.array().min(1, "Features is required"),
  preferredMethodOfContact: Yup.string(),
  rentAdvanceOptions: Yup.array().min(1, "Rent Advance Options is required"),
  moveInDate: Yup.string().required("Desired Move In Date is required"),
  currentAddress1: Yup.string().required("Current Address 1 is required"),
  purposeForMoving: Yup.string().required("Purpose for Moving is required"),
  city: Yup.string().required("City is required"),
  employer: Yup.string().required("Employer is required"),
  jobTitle: Yup.string().required("Job Title is required"),
  evicted: Yup.string().required("Screening & Other Details is Required"),
  convicted: Yup.string().required("Screening & Other Details is Required"),
  hasPets: Yup.string().required("Screening & Other Details is Required"),
  hasVehicles: Yup.string().required("Screening & Other Details is Required"),
  whatsApp: Yup.string().when("preferredMethodOfContact", {
    is: "whatsapp",
    then: (schema) => schema.required("WhatsApp Number is required"),
  }),
  email: Yup.string().when("preferredMethodOfContact", {
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
    activeSlide,
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
          searchTitle:
            agentRequest?.search_title ||
            BeMyAgentCreationSteps?.searchTitle ||
            BeMyAgentDefaultValues.searchTitle,
          location:
            agentRequest?.location ||
            BeMyAgentCreationSteps?.location ||
            BeMyAgentDefaultValues.location,
          bedMaximum:
            agentRequest?.max_beds?.toString() ||
            BeMyAgentCreationSteps?.bedMaximum ||
            BeMyAgentDefaultValues.bedMaximum,
          bedMinimum:
            agentRequest?.min_beds?.toString() ||
            BeMyAgentCreationSteps?.bedMinimum ||
            BeMyAgentDefaultValues.bedMinimum,
          priceRangeMaximum:
            agentRequest?.max_price?.toString() ||
            BeMyAgentCreationSteps?.priceRangeMaximum ||
            BeMyAgentDefaultValues.priceRangeMaximum,
          priceRangeMinimum:
            agentRequest?.min_price?.toString() ||
            BeMyAgentCreationSteps?.priceRangeMinimum ||
            BeMyAgentDefaultValues.priceRangeMinimum,
          bathroomMaximum:
            agentRequest?.max_bathrooms?.toString() ||
            BeMyAgentCreationSteps?.bathroomMaximum ||
            BeMyAgentDefaultValues.bathroomMaximum,
          bathroomMinimum:
            agentRequest?.min_bathrooms?.toString() ||
            BeMyAgentCreationSteps?.bathroomMinimum ||
            BeMyAgentDefaultValues.bathroomMinimum,
          preferredType:
            agentRequest?.property_type ||
            BeMyAgentCreationSteps?.preferredType ||
            BeMyAgentDefaultValues.preferredType,
          requiredFeatures:
            agentRequest?.features ||
            BeMyAgentCreationSteps?.requiredFeatures ||
            BeMyAgentDefaultValues.requiredFeatures,
          preferredMethodOfContact:
            agentRequest?.preferred_contact_method ||
            BeMyAgentCreationSteps?.preferredMethodOfContact ||
            BeMyAgentDefaultValues.preferredMethodOfContact,
          email:
            agentRequest?.email ||
            BeMyAgentCreationSteps?.email ||
            BeMyAgentDefaultValues.email,
          whatsApp:
            agentRequest?.phone ||
            BeMyAgentCreationSteps?.whatsApp ||
            BeMyAgentDefaultValues.whatsApp,
          moveInDate:
            agentRequest?.move_in_date ||
            BeMyAgentCreationSteps?.moveInDate ||
            BeMyAgentDefaultValues.moveInDate,
          country:
            agentRequest?.country ||
            BeMyAgentCreationSteps?.country ||
            BeMyAgentDefaultValues.country,
          purposeForMoving:
            agentRequest?.moving_reason ||
            BeMyAgentCreationSteps?.purposeForMoving ||
            BeMyAgentDefaultValues.purposeForMoving,
          city:
            agentRequest?.city ||
            BeMyAgentCreationSteps?.city ||
            BeMyAgentDefaultValues.city,
          employer:
            agentRequest?.employer ||
            BeMyAgentCreationSteps?.employer ||
            BeMyAgentDefaultValues.employer,
          employmentStatus:
            agentRequest?.employment_status ||
            BeMyAgentCreationSteps?.employmentStatus ||
            BeMyAgentDefaultValues.employmentStatus,
          employerCountry:
            agentRequest?.employer_country ||
            BeMyAgentCreationSteps?.employerCountry ||
            BeMyAgentDefaultValues.employerCountry,
          leaseTermMinimum:
            agentRequest?.min_lease ||
            BeMyAgentCreationSteps?.leaseTermMinimum ||
            BeMyAgentDefaultValues.leaseTermMinimum,
          leaseTermMaximum:
            agentRequest?.max_lease ||
            BeMyAgentCreationSteps?.leaseTermMaximum ||
            BeMyAgentDefaultValues.leaseTermMaximum,
          paymentOption:
            agentRequest?.preferred_payment_option ||
            BeMyAgentCreationSteps?.paymentOption ||
            BeMyAgentDefaultValues.paymentOption,
          title:
            agentRequest?.title ||
            BeMyAgentCreationSteps?.title ||
            BeMyAgentDefaultValues.title,
          age:
            agentRequest?.age ||
            BeMyAgentCreationSteps?.age ||
            BeMyAgentDefaultValues.age,
          maritalStatus:
            agentRequest?.marital_status ||
            BeMyAgentCreationSteps?.maritalStatus ||
            BeMyAgentDefaultValues.maritalStatus,
          tenants:
            agentRequest?.tenants ||
            BeMyAgentCreationSteps?.tenants ||
            BeMyAgentDefaultValues.tenants,
          firstName:
            agentRequest?.first_name ||
            BeMyAgentCreationSteps?.firstName ||
            BeMyAgentDefaultValues.firstName,
          lastName:
            agentRequest?.last_name ||
            BeMyAgentCreationSteps?.lastName ||
            BeMyAgentDefaultValues.lastName,
          evicted:
            agentRequest?.evicted ||
            BeMyAgentCreationSteps?.evicted ||
            BeMyAgentDefaultValues.evicted,
          convicted:
            agentRequest?.convicted ||
            BeMyAgentCreationSteps?.convicted ||
            BeMyAgentDefaultValues.convicted,
          hasPets:
            agentRequest?.has_pets ||
            BeMyAgentCreationSteps?.hasPets ||
            BeMyAgentDefaultValues.hasPets,
          hasVehicles:
            agentRequest?.has_vehicles ||
            BeMyAgentCreationSteps?.hasVehicles ||
            BeMyAgentDefaultValues.hasVehicles,
          currentAddress1:
            agentRequest?.current_address_1 ||
            BeMyAgentCreationSteps?.currentAddress1 ||
            BeMyAgentDefaultValues.currentAddress1,
          currentAddress2:
            agentRequest?.current_address_2 ||
            BeMyAgentCreationSteps?.currentAddress2 ||
            BeMyAgentDefaultValues.currentAddress2,
          jobTitle:
            agentRequest?.job_title ||
            BeMyAgentCreationSteps?.jobTitle ||
            BeMyAgentDefaultValues.jobTitle,
          monthlyIncome:
            agentRequest?.monthly_income ||
            BeMyAgentCreationSteps?.monthlyIncome ||
            BeMyAgentDefaultValues.monthlyIncome,
          monthlyIncomeCurrency:
            agentRequest?.monthly_income_currency ||
            BeMyAgentCreationSteps?.monthlyIncomeCurrency ||
            BeMyAgentDefaultValues.monthlyIncomeCurrency,
        }}
        validationSchema={BeMyAgentValidationSchema}
        onSubmit={(values) => {
          addAgentRequest({
            search_title: values.searchTitle,
            location: values.location,
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
            move_in_date: values.moveInDate,
            moving_reason: values.purposeForMoving,
            country: values.country,
            city: values.city,
            employer: values.employer,
            employment_status: values.employmentStatus,
            employer_country: values.employerCountry,
            min_lease: values.leaseTermMinimum,
            max_lease: values.leaseTermMaximum,
            preferred_payment_option: values.paymentOption,
            title: values.title,
            first_name: values.firstName,
            last_name: values.lastName,
            evicted: values.evicted,
            convicted: values.convicted,
            has_pets: values.hasPets,
            has_vehicles: values.hasVehicles,
            current_address_1: values.currentAddress1,
            current_address_2: values.currentAddress2,
            job_title: values.jobTitle,
            monthly_income: values.monthlyIncome,
            monthly_income_currency: values.monthlyIncomeCurrency,
            marital_status: values.maritalStatus,
            tenants: values.tenants,
            age: values.age,
            renter_id: user?.id,
            id: agentRequest?.id,
            matched_properties: null,
          });
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
