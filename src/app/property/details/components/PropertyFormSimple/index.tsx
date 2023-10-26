"use client";

import { keyframes, styled } from "@stitches/react";
import PersonalInformationForm from "./PersonalInformationForm1";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import PersonalInformationForm1 from "./PersonalInformationForm1";
import { Progress } from "../Progress";
import { openSans } from "@/app/styles/font";
import { ExpandCircle, ExpandCircleFromBottom } from "@/lib/animations";
import { GreyAnimation } from "../GreyAnimation";
import { useLocalStorage } from "@uidotdev/usehooks";
import { PropertyDataType } from "../propertyDataType";

import * as Yup from 'yup';

type Props = {
  animation: boolean;
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PropertyFormSimple({ setAnimation, animation }: Props) {
  const [propertyData, setPropertyData] = useLocalStorage<PropertyDataType>(
    "property1",
    {
      gender: "Male",
      leaseTerm: "12months",
      maritalStatus: "single",
      identificationType: "Ghana Card",
      government: "Ghana",
      preferredMethodOfContact: "phone",
      monthlyIncomeCurrency: "GHS",
      otherApplicants: "no",
    }
  );
  const [applicantsForm, setApplicantsForm] =
    useLocalStorage<any>("applicantsForm");

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("Email is required"),
  });

  return (
    <Root className={`flex flex-col gap-8 ${openSans.className}`}>
      <div className="flex flex-col gap-6 text-[#073B3A] text-[1.5625rem]">
        <p className="font-bold border-b-[1px] border-b-[#0000000F] pb-2">
          Application Form
        </p>

        <p className="font-semibold">2 Bedroom House At Kasoa</p>
      </div>

      <div
        className={`flex flex-row gap-5  overflow-x-scroll lg:overflow-x-hidden lg:flex-wrap pb-1 lg:pb:0`}>
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
          onSubmit={() => console.log()}
          validationSchema={validationSchema}
          >
          <Form>
            <PersonalInformationForm1 formType="simple" />

            <div className="mt-10 lg:mt-5 flex justify-start lg:justify-end w-full gap-5">
              <div className="flex gap-5 flex-col lg:flex-row font-semibold">
                <button
                  className="w-[224.5px]  h-max max-h-[52px] aspect-[224/52]
                  border-[1px] 
                  border-[#AD842A] flex justify-center items-center text-[#AD842A]
                  rounded-lg hover:bg-slate-100">
                  Cancel
                </button>
                <button
                  className="w-[224.5px] [52px] aspect-[224/52] bg-[#DDB771]
                  flex justify-center items-center text-[#ffff] rounded-lg hover:scale-[1.05]

                  
          "
                  onClick={() => {
                    setAnimation((init) => !init);
                  }}>
                  Submit Application
                </button>
              </div>
            </div>
          </Form>
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
