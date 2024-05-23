import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import AddInvoiceModal from "./AddInvoiceModel";
import { RefetchOptions } from "@tanstack/react-query";
interface Props {
  company: string;
  firstname: string;
  lastname: string;
  customerId: string;
  refetch: (options?: RefetchOptions) => void;
}
const CustomerCard = ({
  company,
  firstname,
  lastname,
  customerId,
  refetch,
}: Props) => {
  return (
    <div className="w-full rounded-lg border-2 p-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://api.dicebear.com/8.x/initials/svg?seed=${company}`}
        alt={company}
        className="aspect-square w-full"
      />
      <p className="mt-2 text-center">{company}</p>
      <p className="mt-2 text-center"> Invoices : 20</p>
      <p className="mt-2 text-center"> Paid : 5</p>
      <AddInvoiceModal refetch={refetch} customerId={customerId} />
    </div>
  );
};

export default CustomerCard;
