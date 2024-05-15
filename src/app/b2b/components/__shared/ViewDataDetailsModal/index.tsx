"use client";
import React from "react";
import { useDisclosure } from "@nextui-org/react";
import ModalCloseIcon from "@/components/__shared/ui/modals/ModalCloseIcon";
import Modal from "@/components/__shared/ui/modals/Modal";
import ViewButton from "@/components/__shared/ui/button/ViewButton";
import Logo from "@/components/__shared/ui/Logo";
import Cost from "../Cost";
import CaQuote from "../CaQuote";
import legal from "@/enum/about/legal";
import DownloadButton from "../DownloadButton";
import CheckoutButton from "../CheckoutButton";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { PaymentData } from "../../types";
import { formatDateOnly } from "@/lib/utils/stringManipulation";

type Variant = "invoice" | "receipt";

type Props = {
  variant: Variant;
  data: PaymentData;
};
export default function ViewDataDetailsModal({ variant, data }: Props) {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Modal
        header={<ModalHeader variant={variant} data={data} />}
        body={<ModalBody variant={variant} data={data} />}
        footer={<ModalFooter variant={variant} />}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        closeButton={<ModalCloseIcon />}
        size="3xl"
      />
      <ViewButton onOpen={onOpen} className="h-11" />
    </>
  );
}

const ModalHeader = ({
  variant,
  data,
}: {
  variant: "invoice" | "receipt";
  data: PaymentData;
}) => {
  return (
    <div
      className={`mx-auto mt-10 flex w-full items-center justify-between rounded-xl px-4 py-2 sm:w-11/12 ${
        variant == "invoice" ? "bg-primary" : "bg-[#]"
      }`}
    >
      <div
        className={`flex flex-col gap-1 ${
          variant == "invoice" ? "text-white" : "text-shade-300"
        }`}
      >
        <h2 className="uppercase">
          {variant == "invoice" ? "invoice" : "receipt"}
        </h2>
        <small
          className={`font-semibold text-neutral-300 ${
            variant == "receipt" && "hidden"
          }`}
        >
          {data.invoice_id}
        </small>
      </div>
      <div
        className={`relative aspect-[50/37] w-full max-w-[50px] ${
          variant == "receipt" && "hidden"
        }`}
      >
        <Logo />
      </div>
    </div>
  );
};

const ModalBody = ({
  variant,
  data,
}: {
  variant: Variant;
  data: PaymentData;
}) => {
  const subTotal = data.amount;
  const tax = 12;
  const total = subTotal + tax;

  return (
    <main className="mx-auto space-y-8 sm:w-11/12">
      <section className="highlight flex gap-5 max-xs:justify-between">
        <h4>Date issued</h4>
        <p className="highlight-body">{formatDateOnly(data.billing_date)}</p>
      </section>

      <section className="grid gap-5 sm:grid-cols-2">
        <div className="highlight">
          <div className="flex flex-col gap-4">
            <h4>To:</h4>
            <div className="highlight-body">
              <p>John Doe</p>
              <p>Customer ID: 232332</p>
            </div>
          </div>
        </div>
        <div className="highlight">
          <div className="flex flex-col gap-4">
            <h4>From:</h4>
            <div className="highlight-body">
              <p className="font-bold">{legal.companyName}</p>
              <p>Business Address</p>
              <p>City</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-2">
        <div className="highlight flex items-center justify-between gap-5">
          <h4>Service</h4>
          <h4>Total</h4>
        </div>
        <div className="highlight flex flex-col justify-between gap-x-20 gap-y-10 ssm:flex-row">
          <div className="space-y-2">
            <h4>{data.service}</h4>
            <p className="highlight-body font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ipsa.
            </p>
          </div>
          <p className="highlight-body">{formatPrice(data.amount)}</p>
        </div>
      </section>

      <section className="flex w-full justify-end">
        <Cost subTotal={subTotal} tax={tax} total={total} variant={variant} />
      </section>
      <section className="flex flex-col gap-1 pt-14">
        <p className="font-bold">Thank you for doing business with us!</p>
        <div className="flex gap-2  ssm:items-center">
          <div className="relative shrink-0 max-ssm:top-2">
            <CaQuote />
          </div>
          <p className="highlight-body font-semibold">
            Please pay within 15 days of receiving this invoice.
          </p>
        </div>
      </section>

      <section className="flex items-center justify-between gap-4 py-5 max-sm:flex-wrap">
        <p className="w-full text-[#B0B0B0]">SBG DIGITAL LLC</p>
        <div className="gapy-5 flex items-center gap-x-10 gap-y-5 max-ssm:flex-wrap">
          <p className="highlight-body whitespace-nowrap">+91 00000 00000</p>
          <div className="h-8 w-1 border-r max-ssm:hidden"></div>
          <p className="highlight-body">{legal.email}</p>
        </div>
      </section>
    </main>
  );
};

const ModalFooter = ({ variant }: { variant: Variant }) => {
  return (
    <div className="mx-auto w-full sm:w-11/12">
      {variant !== "invoice" && (
        <div className="">
          <DownloadButton />
        </div>
      )}

      {variant === "invoice" && (
        <div className="">
          <div className="grid w-full grid-cols-2 items-center justify-end gap-3 bg-transparent pb-2">
            <DownloadButton maxWidth="fit" />
            <CheckoutButton />
          </div>
        </div>
      )}
    </div>
  );
};
