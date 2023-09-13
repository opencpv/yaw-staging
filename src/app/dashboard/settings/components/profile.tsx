"use client";
import { styled } from "@stitches/react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AiOutlineLink } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const IconField = ({ icon, label, type, name, className }) => {
  return (
    <div className="form-div relative">
      <div className="flex gap-2 items-center">
        {icon}
        <label>{label}:</label>
      </div>
      <AiOutlineLink className="link-icon absolute" size="16" color="#737373" />

      <Field
        type={type}
        name={name}
        className={`${className} px-5 !important`}
      />
      <ErrorMessage name={name} />
    </div>
  );
};

const Profile = () => {
  return (
    <Root>
      <div className="flex gap-5 mt-5">
        <Navigation type={"active"}>Profile</Navigation>
        <Navigation>Blocking</Navigation>
        <Navigation>Account Setting</Navigation>
      </div>
      <div className="py-10">
        <p>Your Profile Picture</p>
        <div className="max-w-[227px] max-h-[164px] w-full relative aspect-[227/164] rounded-[18px] mt-5 border-">
          <Image
            src="/assets/images/sampleProfilePic.png"
            alt="User picture"
            fill
          />
        </div>
      </div>
      <Formik
        initialValues={{
          firstName: "John",
          lastName: "Doe",
          email: "JohnDoe@gmail.com",
          country: "Ghana",
          twitter: "https://twitter.com/abcd",
          facebook: "https://facebook.com/abcd",
          linkedIn: "https://facebook.com/abcd",
          whatsapp: "https://wa.whatsapp.com/abcd",
          bio: "Enter your bio",
        }}
        onSubmit={(values) => {
          // Handle form submission
        }}>
        <Form className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            <div className="col-span-1">
              <p className="mb-5 font-semibold">My Profile Summary</p>
              <div className="flex flex-col gap-5">
                <div className="form-div">
                  <label>First Name:</label>
                  <Field type="text" name="firstName" className="form-input" />
                  <ErrorMessage name="firstName" />
                </div>
                <div className="form-div">
                  <label>Last Name:</label>
                  <Field type="text" name="lastName" className="form-input" />
                  <ErrorMessage name="lastName" />
                </div>
                <div className="form-div">
                  <label>Email Address:</label>
                  <Field type="email" name="email" className="form-input" />
                  <ErrorMessage name="email" />
                </div>
                <div className="form-div">
                  <label>Country:</label>
                  <Field type="text" name="country" className="form-input" />
                  <ErrorMessage name="country" />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <p className="font-semibold mb-5">My Social Media Accounts</p>
              <div className="flex flex-col gap-5">
                <IconField
                  icon={<FaTwitter size={24} />}
                  name={"twitter"}
                  className={"form-input"}
                  label={"Twitter"}
                  type={"text"}
                />
                <IconField
                  icon={<FaLinkedin size={24}/>}
                  name={"linkedIn"}
                  className={"form-input"}
                  label={"LinkedIn"}
                  type={"text"}
                />
                <IconField
                  icon={<FaFacebook size={24}/>}
                  name={"facebook"}
                  className={"form-input"}
                  label={"Facebook"}
                  type={"text"}
                />
                <IconField
                  icon={<FaWhatsapp size={24}/>}
                  name={"whatsapp"}
                  className={"form-input"}
                  label={"WhatsApp"}
                  type={"text"}
                />
                <IconField
                  icon={<FaWhatsapp size={24}/>}
                  name={"whatsapp"}
                  className={"form-input"}
                  label={"WhatsApp"}
                  type={"text"}
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="form-div">
                <label htmlFor="bio" className="mb-5">
                  Bio:
                </label>
                <Field
                  as="textarea" // Use 'textarea' as the component
                  id="bio"
                  name="bio"
                  className="form-input-textarea"
                  rows="7" // Optional: Set the number of rows for the text area
                  cols="50" // Optional: Set the number of columns for the text area
                />
              </div>
              <button
                type="submit"
                className="max-w-[160px] max-h-[52px] w-full aspect-[160/52] bg-[#DDB771] text-[#ffff] rounded-[8px]">
                Update Profile
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </Root>
  );
};

const Root = styled("div", {
  " .form-div": {
    display: "flex",
    flexDirection: "column",
    gap: "0.875rem",
  },
  " .form-input": {
    maxHeight: "52px",
    padding: "0.9375rem",
    maxWidth: "422px",
    aspectRatio: "422/52",
    border: "1px solid #E6E6E6",
    borderRadius: "4px",
    color: "#737373",
  },
  "form-input-textarea": {
    padding: "0.9375rem",
    maxWidth: "541px",
    width: "100%",
    aspectRatio: "541/368",
    border: "1px solid #E6E6E6",
    borderRadius: "4px",
    color: "#737373",
  },
  "& .link-icon": {
    top: "75%",
    transform: "translateY(-75%)",
    left: "1rem",
  },
});

const Navigation = styled("button", {
  fontSize: "16px",
  fontWeight: "400",
  color: "#8A8A8A",

  variants: {
    type: {
      active: {
        color: "#307A4A",
        borderBottom: "2px solid #307A4A",
      },
    },
  },
});

export default Profile;
