import { Button } from "@nextui-org/react";
import { HiOutlineDownload } from "react-icons/hi";

type Props = {
    maxWidth? : "fit"
};

function DownloadButton({maxWidth}: Props) {
  return (
    <Button className={`text-[1rem] bg-[#ECF2F3] font-semibold text-shade-300 ${maxWidth == "fit" && "max-w-[241px]"} w-full`}>
      Download
      <HiOutlineDownload size="24" colour="#3F3F46" />
    </Button>
  );
}

export default DownloadButton;
