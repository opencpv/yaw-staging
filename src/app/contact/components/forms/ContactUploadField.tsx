import React from "react";
import { useContactForm } from "./hooks/useContactForm";
import { UploadFile } from "../UploadFile";

type Props = {};

const ContactUploadField = (props: Props) => {
  const { file, handleFileUpload } = useContactForm();
  return (
    <div>
      <UploadFile file={file} handleFileUpload={handleFileUpload} />
    </div>
  );
};

export default ContactUploadField;
