import Button from "@/components/__shared/ui/button/Button";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { formatDateTime } from "@/lib/utils/stringManipulation";
import { CSVLink } from "react-csv";
import { Data } from "react-csv/lib/core";
import { HiOutlineDownload } from "react-icons/hi";

type Props = {
  data: Data;
  maxWidth?: "fit";
  /** Preferably lowercase */
  fileName: string;
};

function DownloadButton({ maxWidth, data, fileName }: Props) {
  const headers = Object.keys(data[0] || {}).map((key) => {
    const label = key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    return { label, key };
  });

  const formattedData = data.map((dataItem: any) => {
    return {
      ...dataItem,
      billing_date: formatDateTime(dataItem.billing_date),
      amount: formatPrice(dataItem.amount),
    };
  });

  return (
    <CSVLink
      data={formattedData}
      headers={headers}
      filename={new Date().toLocaleDateString() + `-${fileName}.csv`}
      target="_blank"
      className={`${maxWidth == "fit" && "max-w-[241px]"} w-full`}
      onClick={(e: any) => e.preventDefault()}
    >
      <Button
        className={`w-full bg-secondary-500 text-[1rem] font-semibold text-shade-300`}
      >
        Download
        <HiOutlineDownload size="24" color="#3F3F46" className="shrink-0" />
      </Button>
    </CSVLink>
  );
}

export default DownloadButton;
