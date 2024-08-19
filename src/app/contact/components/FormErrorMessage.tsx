import { ErrorMessage } from "formik";
import React from "react";

type Props = {
  name: string;
};

const FormErrorMessage = ({ name }: Props) => {
  return (
    <ErrorMessage className="required-message" name={name} component="p" />
  );
};

export default FormErrorMessage;
