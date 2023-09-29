import { styled } from "@stitches/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { AiOutlineLink } from "react-icons/ai";

export const UploadFile = () => {
  return (
    <Root className="max-w-[673px]">
      <Formik
        initialValues={{}}
        onSubmit={(values) => {
          console.log(values);
        }}>
        <Form className="flex items-center w-full">
          <div className="form-div relative w-full">
            <label>Upload File</label>
            <AiOutlineLink
              className="link-icon absolute"
              size="16"
              color="#737373"
            />

            <div className="flex items-center">
              <Field
                type="email"
                name="email"
                placeholder="Choose File"
                className="form-input min-w-[100px] w-full"
                style={{ paddingInline: "2.5rem" }}
              />
              <button
                type="submit"
                className="rounded-[4px] bg-[#DDB771]
               flex items-center justify-center upload-button
              max-w-[128px] min-w-[128px] w-[128px] h-[52px] text-white">
                Upload
              </button>
            </div>
            <ErrorMessage name="email" />
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
    color:"#6A6968",

  },
  " .form-input": {
    maxHeight: "52px",
    padding: "0.9375rem",
    maxWidth: "673px",
    aspectRatio: "422/52",
    border: "1px solid #E6E6E6",
    borderRadius: "4px",
    color: "#737373",
    backgroundColor: "white",
  },
  " .upload-button": {
    boxShadow:
      "0px 4px 6px -2px rgba(0, 0, 0, 0.03), 0px 12px 16px -4px rgba(0, 0, 0, 0.08)",
  },
});
