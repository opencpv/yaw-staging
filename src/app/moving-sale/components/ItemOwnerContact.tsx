import React from "react";
import CallButton from "@/components/__shared/ui/button/call-button";
import MessageButton from "@/components/__shared/ui/button/message-button";
import WhatsAppButton from "@/components/__shared/ui/button/whatsapp-button";
import { cn } from "@/lib/utils";

type Props = {
  query: any;
};

const ItemOwnerContact = ({ query }: Props) => {
  return (
    <div className="col-span-1 w-full xs:w-96 lg:w-full">
      <div className="flex w-full flex-col items-center gap-3 rounded-xl bg-white p-8 shadow-card lg:mt-12">
        <CallButton
          variant="accent"
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
    </div>
  );
};

export default ItemOwnerContact;
