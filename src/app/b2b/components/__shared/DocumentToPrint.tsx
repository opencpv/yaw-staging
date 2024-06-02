import React from "react";
import { PaymentData } from "../types";
import { pdfDownloadStore } from "@/store/payment/pdfDownloadStore";

type Props = {
  data: PaymentData | PaymentData[];
  variant: "invoice" | "receipt";
};

const DocumentToPrint = ({ data, variant }: Props) => {
  const { downloadClassName } = pdfDownloadStore();
  return <div className={`free-pdf`}>This is the document to print</div>;
};

export default DocumentToPrint;
