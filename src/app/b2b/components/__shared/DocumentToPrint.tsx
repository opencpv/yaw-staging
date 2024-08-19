import React from "react";
import { pdfDownloadStore } from "@/store/payment/pdfDownloadStore";

type Props = {
  data: Invoice | Invoice[];
  variant: "invoice" | "receipt";
};

const DocumentToPrint = ({ data, variant }: Props) => {
  const { downloadClassName } = pdfDownloadStore();
  return <div className={`free-pdf`}>This is the document to print</div>;
};

export default DocumentToPrint;
