"use client";
import TextFieldInput from "@/components/__shared/ui/form/TextFieldInput";
import { Form, Formik } from "formik";
import React from "react";

type Props = {
  initialValues: any;
};

const RenterInformation = (props: Props) => {
  return (
    <Formik initialValues={props.initialValues} onSubmit={() => {}}>
      <Form className="grid gap-5 xs:grid-cols-2">
        <TextFieldInput name="title" label="Title" disabled />
        <TextFieldInput name="firstName" label="Title" disabled />
        <TextFieldInput name="lastName" label="Title" disabled />
        <TextFieldInput name="country" label="Country" disabled />
      </Form>
    </Formik>
  );
};

export default RenterInformation;
