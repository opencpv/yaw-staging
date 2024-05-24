import React from "react";
import ButtonCall from "@/components/__shared/ui/button/ButtonCall";
import ButtonMessage from "@/components/__shared/ui/button/ButtonMessage";
import ButtonWhatsApp from "@/components/__shared/ui/button/ButtonWhatsApp";
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
          <ButtonCall
            color="accent"
            phoneNumber={query.data?.phone}
            className={cn({
              hidden: !query.data?.phone,
            })}
          />
          <ButtonMessage id={query.data?.profiles?.id} color="accent" />
          <ButtonWhatsApp
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
