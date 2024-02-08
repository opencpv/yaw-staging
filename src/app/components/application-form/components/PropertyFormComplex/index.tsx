"use client";

import { styled } from "@stitches/react";
import { Form, Formik, FormikProps } from "formik";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Progress } from "../Progress";
import "swiper/css";
import EmploymentInformationForm from "./EmploymentInformation";
import ScreeningAndOtherDetailsForm from "./ScreeningAndOtherDetailsForm";
import { useState } from "react";
import { openSans } from "@/styles/font";
import React from "react";
import ContactInformationForm from "./ContactInformation";
import PersonalInformationForm2 from "./PersonalInformationForm2";
import { useLocalStorage } from "@uidotdev/usehooks";
import * as Yup from "yup";
import { PropertyDataType } from "../propertyDataType";
import { ClientOnly } from "@/components/ui/ClientOnly";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PropertyFormComplex({ setOpen }: Props) {
  const [activeIndex, setActiveIndex] = useState(1);
  const formRef = React.createRef<any>();

  const [propertyData, setPropertyData] =
    useLocalStorage<PropertyDataType>("property1");
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Email is required"),
  });
  return (
    <Root className={`flex flex-col gap-8`} ref={formRef}>
      <div className="mt-10 flex flex-col gap-6 pl-2 pr-0 text-[1.5625rem] text-[#073B3A] lg:mt-0">
        <p className="border-b-[1px] border-b-[#0000000F] pb-2 font-bold">
          Application Form
        </p>
        <p className="font-semibold">2 Bedroom House At Kasoa</p>
      </div>

      <div className="flex items-center justify-between px-2">
        <div
          className={`lg:pb:0 flex flex-row  gap-5 overflow-x-scroll lg:flex-wrap  lg:overflow-x-hidden`}
        >
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
          onSubmit={() => {}}
        >
          {(props: FormikProps<any>) => (
            <Form className="w-full">
              <Swiper spaceBetween={40}>
                <div
                  className={`mb-8 flex w-full items-center  gap-12 overflow-x-scroll px-2 pl-6`}
                >
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
                  <ClientOnly>
                    <PersonalInformationForm2
                      formType="complex"
                      ref={formRef}
                      setActiveIndex={setActiveIndex}
                    />
                  </ClientOnly>
                </SwiperSlide>
                <SwiperSlide>
                  <ClientOnly>
                    <ContactInformationForm
                      ref={formRef}
                      setActiveIndex={setActiveIndex}
                    />
                  </ClientOnly>
                </SwiperSlide>
                <SwiperSlide>
                  <ClientOnly>
                    <EmploymentInformationForm
                      ref={formRef}
                      setActiveIndex={setActiveIndex}
                    />
                  </ClientOnly>
                </SwiperSlide>
                <SwiperSlide>
                  <ClientOnly>
                    <ScreeningAndOtherDetailsForm
                      ref={formRef}
                      setActiveIndex={setActiveIndex}
                    />
                  </ClientOnly>
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
