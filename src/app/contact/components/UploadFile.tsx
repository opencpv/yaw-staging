import { styled } from "@stitches/react";
import { Form, Formik } from "formik";
import { ChangeEvent, useState } from "react";
import { AiOutlineLink } from "react-icons/ai";

export const UploadFile = () => {
  const [file, setFile] = useState<string>("")
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files){
      setFile(e.target.files[0]?.name)
    }
  }

  return (
    <Root className="max-w-[673px]">
      <Formik
        initialValues={{}}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="flex items-center w-full">
          <label className="flex flex-col gap-y-3 w-full min-[390px]:items-center min-[390px]:flex-row min-[390px]:h-16" htmlFor="file">
            <div className="flex items-center gap-2 border text-neutral-400 rounded-l-md h-16 p-3 py-4 min-w-[100px] w-full truncate min-[390px]:border-r-0 min-[390px]:h-full">
              <AiOutlineLink className="" size="18" color="#737373" />
              {file ? file : "Choose File (optional)"}
            </div>
            <div
              // type=""
              className="rounded-[4px] bg-[#DDB771] flex items-center justify-center upload-button max-w-[128px] min-w-[128px] w-[128px] h-16 text-white min-[390px]:h-full min-[390px]:-translate-x-2"
            >
              Upload
              <input type="file" id="file" onChange={handleFileUpload} className="absolute right-[300%] top-0 opacity-0" />
            </div>
          </label>
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
    color: "#6A6968",
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
