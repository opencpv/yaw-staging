import React from "react";
import { useContactForm } from "./hooks/useContactForm";
import CustomFileInput from "@/components/__shared/ui/form/CustomFileInput";

type Props = {};

const ContactUploadField = (props: Props) => {
  const { setFile } = useContactForm();
  return (
    <div>
      {/* <UploadFile
        file={file as File}
        handleFileUpload={handleFileUpload}
        handleFileRemove={handleFileRemove}
      /> */}
      <CustomFileInput
        placeholder="Choose File (optional)"
        variant="green"
        handleFile={setFile}
      />
    </div>
  );
};

export default ContactUploadField;
