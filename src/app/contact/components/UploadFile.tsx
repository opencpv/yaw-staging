import { styled } from "@stitches/react";
import { ChangeEvent } from "react";
import { AiOutlineLink } from "react-icons/ai";

type Props = {
  file: File | null;
  handleFileUpload: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFileRemove: () => void;
};

export const UploadFile = ({
  file,
  handleFileUpload,
  handleFileRemove,
}: Props) => {
  return (
    <div className="flex w-full items-center">
      <label
        className="flex w-full max-w-xl flex-col gap-y-3 min-[390px]:h-16 min-[390px]:flex-row min-[390px]:items-center"
        htmlFor="file"
      >
        <div
          className="form-field-border relative flex h-16 w-full min-w-[100px] items-center gap-2 rounded-l-md border p-3 py-4 text-neutral-400 min-[390px]:h-full min-[390px]:border-r-0"
          title={file?.name ?? ""}
        >
          <AiOutlineLink className="shrink-0" size="18" color="#737373" />
          <p className="hidden truncate min-[390px]:block">
            {file ? file?.name : "Choose File (optional)"}
          </p>
          <p className="truncate min-[390px]:hidden">
            {file ? file?.name : "Upload File (optional)"}
          </p>
          <button
            className="absolute right-5 top-5 rounded-2xl bg-warning-bg px-3 py-1 text-xs text-shade-300 hover:scale-[1.03] hover:bg-warning-400"
            onClick={handleFileRemove}
          >
            Remove
          </button>
        </div>
        <button
          type="button"
          className="upload-button hidden h-16 w-[128px] min-w-[128px] cursor-pointer items-center justify-center rounded-[4px] bg-accent text-white min-[390px]:flex min-[390px]:h-full min-[390px]:-translate-x-2"
        >
          Upload
          <input
            type="file"
            id="file"
            onChange={handleFileUpload}
            className="absolute right-[700%] top-0 opacity-0"
          />
        </button>
      </label>
    </div>
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
