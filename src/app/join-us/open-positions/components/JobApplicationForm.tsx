"use client";

import CustomFileInput from "@/components/__shared/ui/form/CustomFileInput";
import TextFieldInput from "@/components/__shared/ui/form/TextFieldInput";
import { InfoBubble } from "@/components/__shared/ui/application-form/components/InfoBubble";
import JoinUsButtons from "@/app/join-us/components/JoinUsButtons";
import PhoneNumberInputv2 from "@/components/__shared/ui/form/PhoneInputv2";
import { Form, Formik } from "formik";
import Link from "next/link";
import CaJoinUsIconLeft from "./icons/CaJoinUsIconLongLeft";
import { Button } from "@nextui-org/react";
import InputPhoneNumber from "@/components/__shared/ui/form/InputPhoneNumber";
import { useContactForm } from "@/app/contact/components/forms/hooks/useContactForm";
import InfoText from "@/components/__shared/ui/listing-form/components/InfoText";

type Props = {
  variant: "application" | "resume";
};
function JobApplicationForm({ variant }: Props) {
  const {
    handleCountryChange,
    handlePhone,
    phone,

    phoneInputPlaceholder,
  } = useContactForm();
  return (
    <div className="flex flex-col gap-4 px-5 pt-5 lg:px-20">
      <Link
        href={"/join-us/open-positions"}
        className="absolute top-5 z-[343] hidden lg:flex"
      >
        <Button
          className={`h-[52px]  rounded-lg  py-[0.94rem] font-semibold ${"bg-transparent text-[1.125rem] text-[#DDB771]"} flex justify-start gap-2.5`}
        >
          <CaJoinUsIconLeft />
          Go back
        </Button>
      </Link>
      <Formik
        initialValues={{}}
        onSubmit={() => {
          null;
        }}
      >
        {({ handleBlur, handleChange, values, errors }) => (
          <Form>
            <div className="flex flex-col gap-4 pt-16">
              <p className="pt-5font-semibold hidden text-[1.9375rem] text-[#333] lg:flex">
                {variant == "application" && "Application"}
                {variant == "resume" && "Resume Bank"}
              </p>

              {variant == "resume" && (
                <div className="pt-5">
                  <InfoText content="Unlock your potential and join our dynamic team where innovation meets opportunity!" />
                </div>
              )}

              <div className="flex flex-col gap-6 pt-8">
                <p className="text-[1.25rem] font-[600] text-shade-300">
                  Contact Information{" "}
                </p>
                <div className="flex flex-col gap-5 lg:flex-row">
                  <TextFieldInput
                    required
                    onChange={() => null}
                    label="First Name"
                    placeholder="Enter your first name"
                    type="text"
                    name="first_name"
                  />
                  <TextFieldInput
                    required
                    onChange={() => null}
                    label="Last Name"
                    placeholder="Enter your last name"
                    type="text"
                    name="last_name"
                  />
                </div>
                <div className="flex flex-col  gap-5 lg:flex-row ">
                  <TextFieldInput
                    required
                    onChange={() => null}
                    label="Email"
                    placeholder="Enter your email"
                    type="text"
                    name="email"
                  />
                  <InputPhoneNumber
                    required
                    label="Phone"
                    id="phone"
                    name="phone"
                    value={phone}
                    placeholder={"Phone number"}
                    onChange={handlePhone}
                    onInput={handleChange}
                    onCountryChange={handleCountryChange}
                    showError={false}
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-6">
              <p className="text-[1.25rem] font-[600] text-shade-300">
                Professional Profile
              </p>
              <div className="flex flex-col gap-5">
                <CustomFileInput label="Upload Cover Letter" />
                <CustomFileInput label="Upload Resume" required />
                {/* <CustomFileInput label="Upload Video Profile" /> */}
                {/* <CustomFileInput label="Upload Work Sample" /> */}
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2.5">
                    <p className="text-[#6A6968]">Additional Information</p>
                    <InfoBubble
                      content={
                        "Add other relevant information to highlight your skillset (e.g. personal website, work portfolio, etc)"
                      }
                    />
                  </div>
                  <input
                    placeholder="Paste your link here"
                    type="text"
                    className="h-[52px] w-full rounded-[4px] border-[1px] border-[#E6E6E6] px-4 focus:outline-accent-50"
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-center pb-10">
              <Link
                href={"/join-us/open-positions/submitted"}
                className="w-full max-w-[248px]"
              >
                <Button className="h-[52px] w-full max-w-[248px] rounded-lg bg-[#DDB771] font-semibold text-white">
                  Submit
                </Button>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default JobApplicationForm;
