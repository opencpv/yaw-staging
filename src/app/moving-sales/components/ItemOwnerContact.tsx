import Button from "@/components/__shared/Button";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

type Props = {};

const ItemOwnerContact = (props: Props) => {
  return (
    <div className="col-span-1 w-full xs:w-96 lg:w-full">
      <div className="bg-white p-8 space-y-3 w-full rounded-xl shadow-large lg:mt-12">
        <Link className="w-full flex justify-center" href={`tel:033303111`}>
          <Button color="accent" className="w-full">
            Call me
          </Button>
        </Link>
        <Button
          color="accent"
          variant="outline"
          className="block w-full max-w-full"
        >
          Send Message
        </Button>
        <Link className="w-full flex justify-center" href={`tel:033303111`}>
          <Button color="accent" className="flex items-center gap-2 w-full">
            <FaWhatsapp className="text-lg text-white" />
            Whatsapp
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ItemOwnerContact;
