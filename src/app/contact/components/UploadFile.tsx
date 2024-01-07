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
            <div className="flex items-center w-full">
              <div
                className="flex items-center gap-2 border-l border-y text-neutral-400 rounded-l-sm p-3 py-4 min-w-[100px] w-full"
              >
                <AiOutlineLink
                  className=""
                  size="18"
                  color="#737373"
                />
                  Choose File
              </div>
              <button
                className="rounded-[4px] bg-[#DDB771]
               flex items-center justify-center upload-button
              max-w-[128px] min-w-[128px] w-[128px] h-[52px] text-white -translate-x-2">
                Upload
              </button>
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
