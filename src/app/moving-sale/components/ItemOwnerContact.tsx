import React from "react";
import CallButton from "@/components/__shared/ui/button/CallButton";
import MessageButton from "@/components/__shared/ui/button/MessageButton";
import WhatsAppButton from "@/components/__shared/ui/button/WhatsAppButton";
import SkeletonRectangle from "@/components/__shared/ui/skeleton/SkeletonRectangle";
import { cn } from "@/lib/utils";

type Props = {
  query: any;
};

const ItemOwnerContact = ({ query }: Props) => {
  return (
    <div className="col-span-1 w-full xs:w-96 lg:w-full">
      {query.isLoading ? (
        <SkeletonRectangle />
      ) : (
        <div className="w-full space-y-3 rounded-xl bg-white p-8 shadow-large lg:mt-12">
          <CallButton
            color="accent"
            phoneNumber={query.data?.phone}
            className={cn({
              hidden: !query.data?.phone,
            })}
          />
          <MessageButton id={query.data?.profiles?.id} color="accent" />
          <WhatsAppButton
            color="accent"
            className={cn({
              hidden: !query.data?.whatsapp,
            })}
            phone={query.data?.whatsapp}
          />
        </div>
      )}
    </div>
  );
};

export default ItemOwnerContact;
