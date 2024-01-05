import Button from "@/components/__shared/ui/button/Button";
import React from "react";
import ButtonCall from "@/components/__shared/ui/button/ButtonCall";
import ButtonMessage from "@/components/__shared/ui/button/ButtonMessage";
import ButtonWhatsApp from "@/components/__shared/ui/button/ButtonWhatsApp";

type Props = {};

const ItemOwnerContact = (props: Props) => {
  return (
    <div className="col-span-1 w-full xs:w-96 lg:w-full">
      <div className="bg-white p-8 space-y-3 w-full rounded-xl shadow-large lg:mt-12">
        <ButtonCall color="accent" phoneNumber="0023434331" />
        <ButtonMessage id="" color="accent" />
        <ButtonWhatsApp color="accent" />
      </div>
    </div>
  );
};

export default ItemOwnerContact;
