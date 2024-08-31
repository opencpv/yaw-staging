import { useRef, useState } from "react";
import CaAttachment from "../icons/CaAttachment";
import { cn } from "@/lib/utils";

type Props = {
  handleFile?: (file: File | null) => void; // Specify the type of handleFile function
  label?: string;
  required?: boolean;
  variant?: "primary" | "accent";
  placeholder?: string;
};
function FileInput({
  handleFile,
  label,
  required,
  variant = "primary",
  placeholder,
}: Props) {
  const [fileUploaded, setFileUploaded] = useState<File | null>(null);
  const hiddenFileInput = useRef<HTMLInputElement | null>(null); // Specify the type

  const handleClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFileUploaded(file);
    handleFile && handleFile(file);
  };

  const handleFileRemove = () => {
    setFileUploaded(null);
    handleFile && handleFile(null);

    // Reset file input value
    if (hiddenFileInput.current) {
      hiddenFileInput.current.value = "";
    }
  };
  return (
    <label className="flex flex-col gap-4">
      {label && (
        <div className="flex gap-x-1.5">
          <h5 className="font-normal capitalize text-shade-300">{label}</h5>
          {required && (
            <span className="relative text-sm text-shade-300">*</span>
          )}
        </div>
      )}
      <div className="form-field-border relative flex w-full items-center justify-between rounded-[4px] pl-4">
        <button
          className="flex h-[52px] w-full items-center gap-4 truncate font-[0.8125rem] text-[#B4B2AF]"
          onClick={handleClick}
          title={fileUploaded ? fileUploaded.name : undefined}
          type="button"
        >
          <CaAttachment />
          {!fileUploaded && <p>{placeholder || "upload"}</p>}
          {fileUploaded && (
            <p className="w-8/12 overflow-x-hidden text-left">
              {fileUploaded.name}
            </p>
          )}
        </button>

        <div className="flex items-center justify-center gap-5">
          {fileUploaded && (
            <button
              className="absolute right-40 rounded-2xl border-l-4 border-white bg-warning-bg px-3 py-1 text-xs hover:scale-[1.03] hover:bg-warning-400"
              onClick={handleFileRemove}
              type="button"
            >
              Remove
            </button>
          )}

          <button
            className={cn(
              `h-[52px] w-[128px] cursor-pointer rounded-[4px] font-[500] text-white focus-visible:outline-accent`,
              {
                "bg-primary": variant === "primary",
                "bg-accent": variant === "accent",
              },
            )}
            style={{
              boxShadow:
                "0px 4px 6px -2px rgba(0, 0, 0, 0.03), 0px 12px 16px -4px rgba(0, 0, 0, 0.08)",
            }}
            onClick={handleClick} // ADDED
            type="button"
          >
            Upload
          </button>
        </div>
      </div>
      <input
        onChange={handleChange} // ADDED
        ref={hiddenFileInput} // ADDED
        type="file"
        style={{ display: "none" }} // NOTICE!
      />
    </label>
  );
}

export default FileInput;
