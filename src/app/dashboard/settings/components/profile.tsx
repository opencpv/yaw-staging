"use client";
import { styled } from "@stitches/react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";

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
        initialValues={{ firstName: "", password: "" }}
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
                  <Field type="text" name="Country" className="form-input" />
                  <ErrorMessage name="country" />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <p className="font-semibold mb-5">My Social Media Accounts</p>
             <div className="flex flex-col gap-5">
                  <div className="form-div">
                    <label>Twitter:</label>
                    <Field type="text" name="firstName" className="form-input" />
                    <ErrorMessage name="firstName" />
                  </div>
                  <div className="form-div">
                    <label>LinkedIn:</label>
                    <Field type="text" name="lastName" className="form-input" />
                    <ErrorMessage name="lastName" />
                  </div>
                  <div className="form-div">
                    <label>Facebook:</label>
                    <Field type="email" name="email" className="form-input" />
                    <ErrorMessage name="email" />
                  </div>
                  <div className="form-div">
                    <label>WhatsApp:</label>
                    <Field type="text" name="Country" className="form-input" />
                    <ErrorMessage name="country" />
                  </div>
                  <div className="form-div">
                    <label>WhatsApp:</label>
                    <Field type="text" name="Country" className="form-input" />
                    <ErrorMessage name="country" />
                  </div>
             </div>
            </div>
            <div className="col-span-1">
              <div className="form-div max-h-auto">
                <label htmlFor="message">Bio:</label>
                <Field
                  as="textarea" // Use 'textarea' as the component
                  id="message"
                  name="message"
                  className="form-input-textarea"
                  rows="7" // Optional: Set the number of rows for the text area
                  cols="50" // Optional: Set the number of columns for the text area
                />
              </div>
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
  },
  "form-input-textarea":{
    padding: "0.9375rem",
    maxWidth: "541px",
    width:"100%",
    aspectRatio: "541/368",
    border: "1px solid #E6E6E6",
    borderRadius: "4px",
  }
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
