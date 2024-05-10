import { useRef, useState } from "react";
import CaAttachment from "../icons/CaAttachment";
import { InfoBubble } from "../application-form/components/InfoBubble";

type Props = {
  handleFile?: (file: File | null) => void; // Specify the type of handleFile function
  label?: string;
  infoContent?: string;
  required?: boolean;
  variant?: "green" | "accent" | undefined;
};
function CustomFileInput({ handleFile, label, infoContent, required, variant="green" }: Props) {
  const variants  : any= {
    green: "bg-[#11605E]",
    accent: "bg-accent-50",
  };
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
    <div className="flex flex-col gap-4">
      <div className="flex gap-2.5">
        <p className="text-[#6A6968]">
          {label}
          {required && <span className="relative top-[-5px] text-xs ">*</span>}
        </p>
        {infoContent && <InfoBubble content={infoContent} />}{" "}
      </div>{" "}
      <div className="flex w-full items-center justify-between rounded-[4px] border-[1px] border-[#E6E6E6] pl-4">
        <button
          className="flex h-[52px] w-full items-center gap-4 font-[0.8125rem] text-[#B4B2AF]"
          onClick={handleClick}
        >
          <CaAttachment />
          {!fileUploaded && <p>upload</p>}
          {fileUploaded && <p>{fileUploaded.name}</p>}
        </button>

        <div className="flex items-center justify-center gap-5">
          {fileUploaded && (
            <button
              className="rounded-2xl bg-warning-bg px-3 py-1 text-xs hover:scale-[1.03] hover:bg-warning-400"
              onClick={handleFileRemove}
            >
              Remove
            </button>
          )}

          <button
         className={`${variants[variant]} h-[52px] w-[128px] cursor-pointer rounded-[4px] font-[500] text-white`}

            style={{
              boxShadow:
                "0px 4px 6px -2px rgba(0, 0, 0, 0.03), 0px 12px 16px -4px rgba(0, 0, 0, 0.08)",
            }}
            onClick={handleClick} // ADDED
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
    </div>
  );
}

export default CustomFileInput;
