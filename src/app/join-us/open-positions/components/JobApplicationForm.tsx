"use client";

import CustomFileInput from "@/app/components/CustomFileInput";
import TextFieldInput from "@/app/components/TextFieldInput";
import { InfoBubble } from "@/app/components/application-form/components/InfoBubble";
import JoinUsButtons from "@/app/join-us/components/JoinUsButtons";
import PhoneNumberInputv2 from "@/components/__shared/PhoneInputv2";
import { Form, Formik } from "formik";
import Link from "next/link";
import CaJoinUsIconLeft from "./icons/CaJoinUsIconLongLeft";
import { Button } from "@nextui-org/react";

type Props = {
  variant: "application" | "resume";
};
function JobApplicationForm({ variant }: Props) {
  return (
    <div className="flex flex-col gap-4 px-5 lg:px-20">
      <Link href={"/join-us/open-positions"} className="hidden lg:flex">
        <Button
          className={`h-[52px]  py-[0.94rem]  rounded-lg font-semibold ${"bg-transparent text-[#DDB771] text-[1.125rem]"} gap-2.5 flex justify-start`}>
          <CaJoinUsIconLeft />
          Go back
        </Button>
      </Link>
      <Formik initialValues={{}} onSubmit={() => console.log("submitted")}>
        <Form>
          <div className="flex flex-col gap-4">
            <p className="text-[1.9375rem] font-semibold text-[#333] hidden lg:flex">
              {variant == "application" && <p>Application</p>}
              {variant == "resume" && <p>Resume Bank</p>}
            </p>

            <div className="flex flex-col gap-6">
              <p className="font-[600] text-[1.25rem] text-shade-300">
                Contact Information{" "}
              </p>
              <div className="flex flex-col lg:flex-row gap-5">
                <TextFieldInput
                  onChange={() => console.log("first")}
                  label="First Name"
                  placeholder="Enter your first name"
                  type="text"
                  name="first_name"
                />
                <TextFieldInput
                  onChange={() => console.log("first")}
                  label="Last Name"
                  placeholder="Enter your last name"
                  type="text"
                  name="last_name"
                />
              </div>
              <div className="flex gap-5  flex-col lg:flex-row ">
                <TextFieldInput
                  onChange={() => console.log("first")}
                  label="Email"
                  placeholder="Enter your email"
                  type="text"
                  name="email"
                />
                <PhoneNumberInputv2
                  label="Phone"
                  onChange={() => console.log("s")}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-12">
            <p className="font-[600] text-[1.25rem] text-shade-300">
              Professional Profile
            </p>
            <div className="flex flex-col gap-5">
              <CustomFileInput label="Upload Cover Letter" />
              <CustomFileInput label="Upload Resume" />
              <CustomFileInput label="Upload Video Profile" />
              <CustomFileInput label="Upload Work Sample" />
              <div className="flex flex-col gap-3">
                <div className="flex gap-2.5">
                  <p className="text-[#6A6968]">Link</p>
                  <InfoBubble content={"infoContent"} />
                </div>
                <input
                  placeholder="Paste your link here"
                  type="text"
                  className="w-full rounded-[4px] h-[52px] border-[1px] px-4 border-[#E6E6E6]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Link
              href={"/join-us/open-positions/submitted"}
              className="w-full max-w-[248px]">
              <Button className="h-[52px] w-full max-w-[248px] bg-[#DDB771] rounded-lg text-white font-semibold">
                Submit
              </Button>
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default JobApplicationForm;
