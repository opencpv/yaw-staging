"use client";
import { Input } from "@/components/__shared/ui/form/input";
import { Form, Formik } from "formik";
import React from "react";

type Props = {
  initialValues: any;
};

const RenterInformation = (props: Props) => {
  return (
    <Formik initialValues={props.initialValues} onSubmit={() => {}}>
      <Form className="grid gap-5 xs:grid-cols-2">
        <Input name="title" label="Title" disabled />
        <Input name="firstName" label="First Name" disabled />
        <Input name="lastName" label="Last Name" disabled />
        <Input name="country" label="Country" disabled />
      </Form>
    </Formik>
  );
};

export default RenterInformation;
