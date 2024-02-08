// @ts-nocheck
"use client";

import { keyframes, styled } from "@stitches/react";
import PersonalInformationForm from "./PersonalInformationForm1";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import PersonalInformationForm1 from "./PersonalInformationForm1";
import { Progress } from "../Progress";
import { openSans } from "@/styles/font";
import { ExpandCircle, ExpandCircleFromBottom } from "@/lib/animations";
import { GreyAnimation } from "../GreyAnimation";
import { useLocalStorage } from "@uidotdev/usehooks";
import { PropertyDataType } from "../propertyDataType";

import * as Yup from "yup";
import supabase from "@/lib/utils/supabaseClient";
import { useEffect, useState } from "react";
import Loader from "@/components/__shared/loader/Loader";
import { ClientOnly } from "@/components/ui/ClientOnly";

type Props = {
  animation: boolean;
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PropertyFormSimple({
  setAnimation,
  animation,
  setOpen,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [propertyData, setPropertyData] =
    useLocalStorage<PropertyDataType>("property1");
  const [applicantsForm, setApplicantsForm] =
    useLocalStorage<any>("applicantsForm");

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    currentAddress1: Yup.string().required("Address is required"),
    // phoneNumber: Yup.number().required("Field is required")
  });

  useEffect(() => {
    if (loading) {
      setOpen(false);
    }
  }, [loading]);
  const Adams = "c8efbc31-b932-4536-87a5-816303bd5011";
  const Akowuah = "5f297aa7-18f5-42ff-9270-8ba8061cae95";
  const me = "d7caa3c8-e767-4d24-ab5d-44699d8a41ab";

  async function handleSubmit() {
    try {
      const { data, error } = await supabase
        .from("regular_application")
        .insert([
          {
            firstname: propertyData?.firstName,
            lastname: propertyData?.lastName,
            email: propertyData?.email,
            gender: propertyData?.gender,
            marital_status: propertyData?.maritalStatus,
            phone: propertyData?.phoneNumber,
            is_whatsapp: propertyData?.availableOnWhatsapp,
            address: propertyData?.currentAddress1,
            address_2: propertyData?.currentAddress2,
            employment_status: propertyData?.mostRecentEmployment,
            contact_method: propertyData?.preferredMethodOfContact,
            move_in_date: propertyData?.moveInDate,
            lease_term: propertyData?.leaseTerm,
            is_more_applicants: propertyData?.otherApplicants,
            additional_information: propertyData?.additionalInformation,
            more_applicants: propertyData?.otherPersonsArray,
          },
        ])
        .select();
    } catch (error) {
      console.log(error);
    }
  }

  async function notify() {
    try {
      const { data, error } = await supabase
        .from("notifications")
        .insert([
          {
            sender_id: Adams,
            type: "contact",
            message: "User has just submitted a property form",
            receiver_id: me,
          },
        ])
        .select();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Root className={`flex flex-col gap-8`}>
      <div className="flex flex-col gap-6 text-[1.5625rem] text-[#073B3A]">
        <p className="border-b-[1px] border-b-[#0000000F] pb-2 font-bold">
          Application Form
        </p>

        <p className="font-semibold">2 Bedroom House At Kasoa</p>
      </div>

      <div
        className={`lg:pb:0 flex flex-row  gap-5 overflow-x-scroll pb-1 lg:flex-wrap lg:overflow-x-hidden`}
      >
        <div className="feature">GHS 2,2000.00 / Month</div>

        <div className="feature">2 Bedrooms</div>

        <div className="feature">483 - 965 sq. m</div>
      </div>

      <div>
        <Formik
          initialValues={{
            ...propertyData,
            ...applicantsForm,
          }}
          onSubmit={(values, formikProps) => {
            // formikProps.validateForm()
            setLoading(true);
            handleSubmit().then(() => notify());
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <ClientOnly>
                <PersonalInformationForm1 formType="simple" />
              </ClientOnly>

              <div className="mt-10 flex w-full justify-start gap-5 lg:mt-5 lg:justify-end">
                <div className="flex flex-col gap-5 font-semibold lg:flex-row">
                  <button
                    onClick={() => setOpen(false)}
                    className="flex  aspect-[224/52] h-max max-h-[52px]
                      w-[224.5px] 
                      items-center justify-center rounded-lg border-[1px] border-[#AD842A]
                      text-[#AD842A] hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  {!loading ? (
                    <button
                      type="submit"
                      className="[52px] flex aspect-[224/52] w-[224.5px]
                      items-center justify-center rounded-lg bg-[#DDB771] text-[#ffff] hover:scale-[1.05]
    
                 "
                    >
                      Submit Application
                    </button>
                  ) : (
                    <Loader />
                  )}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Root>
  );
}

const Root = styled("div", {
  ".feature ": {
    paddingInline: "1.25rem",
    paddingBlock: "0.625rem",
    borderRadius: "1rem",
    whiteSpace: "nowrap",
    // width: "fit-content",
    height: "100%",
    maxHeight: "42px",
    backgroundColor: "#8DA5A4",
    color: "white",
    fontSize: "1rem",
    fontWeight: "600",
  },
});
