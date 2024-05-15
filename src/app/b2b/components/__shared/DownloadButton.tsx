import Button from "@/components/__shared/ui/button/Button";
import { HiOutlineDownload } from "react-icons/hi";

type Props = {
  maxWidth?: "fit";
};

function DownloadButton({ maxWidth }: Props) {
  return (
    <Button
      className={`bg-secondary-500 text-[1rem] font-semibold text-shade-300 ${
        maxWidth == "fit" && "max-w-[241px]"
      } w-full`}
    >
      Download
      <HiOutlineDownload size="24" color="#3F3F46" />
    </Button>
  );
}

export default DownloadButton;
