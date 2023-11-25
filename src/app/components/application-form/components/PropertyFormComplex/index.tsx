"use client";

import { styled } from "@stitches/react";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikProps,
  useFormik,
} from "formik";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Progress } from "../Progress";
import PersonalInformationForm from "../PropertyFormSimple/PersonalInformationForm1";
import "swiper/css";
import EmploymentInformationForm from "./EmploymentInformation";
import ScreeningAndOtherDetailsForm from "./ScreeningAndOtherDetailsForm";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { openSans } from "@/styles/font";
import SwiperSlideControls from "../SwiperSliderControls";
import React from "react";
import ContactInformationForm from "./ContactInformation";
import { SaveAndExit } from "./SaveAndExit";
import PersonalInformationForm2 from "./PersonalInformationForm2";
import { useLocalStorage } from "@uidotdev/usehooks";
import * as Yup from 'yup';
import { PropertyDataType } from "../propertyDataType";


type Props = {
  setOpen:  React.Dispatch<React.SetStateAction<boolean>>
};



export default function PropertyFormComplex({setOpen}: Props) {
  const [activeIndex, setActiveIndex] = useState(1);
  const formRef = React.createRef<any>();

  const [propertyData, setPropertyData] =
    useLocalStorage<PropertyDataType>("property1");
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Email is required"),
  });
  return (
    <Root className={`flex flex-col gap-8 ${openSans.className}`} ref={formRef}>
      <div className="flex flex-col gap-6 text-[#073B3A] text-[1.5625rem] mt-10 lg:mt-0 pl-2 pr-0">
        <p className="font-bold border-b-[1px] border-b-[#0000000F] pb-2">
          Application Form
        </p>
        <p className="font-semibold">2 Bedroom House At Kasoa</p>
      </div>

      <div className="flex justify-between items-center px-2">
        <div
          className={`flex flex-row gap-5  overflow-x-scroll lg:overflow-x-hidden lg:flex-wrap  lg:pb:0`}>
          <div className="feature">GHS 2/20000/month</div>

          <div className="feature">2 bedrroms</div>

          <div className="feature ">2332/ s1 ft</div>
        </div>
      </div>

      <div className="sc ">
        <Formik
          initialValues={{
            ...propertyData,
          }}
          validationSchema={validationSchema}
          onSubmit={() => {}}>
          {(props: FormikProps<any>) => (
            <Form className="w-full">
              <Swiper spaceBetween={40}>
                <div
                  className={`flex gap-12 items-center overflow-x-scroll  w-full px-2 pl-6 mb-8 ${openSans.className}`}>
                  <Progress
                    number={1}
                    setActiveIndex={setActiveIndex}
                    activeNumber={activeIndex}
                    label="Personal Information"
                    classes={"sc1"}
                  />
                  <Progress
                    number={2}
                    setActiveIndex={setActiveIndex}
                    activeNumber={activeIndex}
                    label="Contact Information"
                    classes={"sc2"}
                  />

                  <Progress
                    number={3}
                    setActiveIndex={setActiveIndex}
                    activeNumber={activeIndex}
                    label="Employment Information"
                    classes={"sc3"}
                  />
                  <Progress
                    number={4}
                    setActiveIndex={setActiveIndex}
                    activeNumber={activeIndex}
                    label="Screening and Other
        Details"
                    classes={"sc4"}
                  />
                </div>
                <SwiperSlide>
                  <PersonalInformationForm2
                    formType="complex"
                    ref={formRef}
                    setActiveIndex={setActiveIndex}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ContactInformationForm
                    ref={formRef}
                    setActiveIndex={setActiveIndex}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <EmploymentInformationForm
                    ref={formRef}
                    setActiveIndex={setActiveIndex}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ScreeningAndOtherDetailsForm
                    ref={formRef}
                    setActiveIndex={setActiveIndex}
                  />
                </SwiperSlide>
              </Swiper>
            </Form>
          )}
        </Formik>
      </div>
    </Root>
  );
}

const Root = styled("div", {
  ".feature": {
    borderRadius: "1rem",
    whiteSpace: "nowrap",
    paddingInline: "1.25rem",
    display: "flex",
    height: "42px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8DA5A4",
    color: "white",
    fontSize: "1rem",
    fontWeight: "600",
  },
  "::-webkit-scrollbar": {
    width: 0,
  },
  ".swiper": {
    display: "flex",
    flexDirection: "column-reverse",
  },
});
