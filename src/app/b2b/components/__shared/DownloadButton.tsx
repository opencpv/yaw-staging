import { Button } from "@/components/__shared/ui/button";
import { HiOutlineDownload } from "react-icons/hi";
import downloadPdf from "@/lib/utils/downloadPdf";

type Props = {
  maxWidth?: "fit";
  data: Invoice;
  variant: "invoice" | "receipt";
  content: {
    title: string;
  };
};

function DownloadButton({ maxWidth, data, variant, content }: Props) {
  return (
    <>
      <Button
        className={`${maxWidth === "fit" && "max-w-[241px]"} w-full`}
        onClick={() =>
          downloadPdf({
            title: content.title,
            className: "payment-pdf",
          })
        }
      >
        Download
        <HiOutlineDownload size="24" className="shrink-0" />
      </Button>
      {/* <DocumentToPrint data={data} variant={variant} /> */}
    </>
  );
}

export default DownloadButton;
