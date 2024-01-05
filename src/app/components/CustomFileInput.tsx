import { useRef, useState } from "react";
import CaAttachment from "./icons/CaAttachment";
import { InfoBubble } from "./application-form/components/InfoBubble";

type Props = {
  handleFile: (file: File | null) => void; // Specify the type of handleFile function
  label: string;
  infoContent: string;
};
function CustomFileInput({ handleFile, label, infoContent }: Props) {
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
    handleFile(file);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2.5">
        <p className="text-[#6A6968]">{label}</p>
        <InfoBubble content={infoContent} />
      </div>{" "}
      <div className="flex pl-4 items-center justify-between rounded-[4px] border-[1px] border-[#E6E6E6] w-full">
        <div className="h-[52px] flex items-center gap-4 text-[#B4B2AF] font-[0.8125rem]">
          <CaAttachment />
          {!fileUploaded && <p>upload</p>}
          {fileUploaded && <p>{fileUploaded.name}</p>}
        </div>
        <button
          className="cursor-pointer h-[52px] w-[128px] rounded-[4px] bg-[#DDB771] font-[500] text-white"
          style={{
            boxShadow:
              "0px 4px 6px -2px rgba(0, 0, 0, 0.03), 0px 12px 16px -4px rgba(0, 0, 0, 0.08)",
          }}
          onClick={handleClick} // ADDED
        >
          Upload
        </button>
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
