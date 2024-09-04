"use client";
import React from "react";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import ModalCloseIcon from "@/components/__shared/ui/modals/modal-close-icon";
import ViewButton from "@/components/__shared/ui/button/view-button/view-button";
import Logo from "@/components/__shared/ui/logo/logo";
import Cost from "../Cost";
import CaQuote from "../CaQuote";
import legal from "@/enum/about/legal";
import DownloadButton from "../DownloadButton";
import CheckoutButton from "../CheckoutButton";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { formatDateDMY } from "@/lib/utils/stringManipulation";
import { customerStore } from "@/store/payment/customerStore";
import dynamic from "next/dynamic";
const Modal = dynamic(() =>
  import("@/components/__shared/ui/modals/dialog").then((mod) => mod.Modal),
);

type Variant = "invoice" | "receipt";

type Props = {
  variant: Variant;
  data: Invoice;
};
export default function ViewDataDetailsModal({ variant, data }: Props) {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Modal
        header={<div className="h-5" />}
        body={<ModalBody variant={variant} data={data} />}
        footer={<ModalFooter variant={variant} data={data} />}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        closeButton={<ModalCloseIcon />}
      />
      <ViewButton
        onOpen={onOpen}
        className="max-sm:w-fit max-sm:bg-transparent max-sm:p-0 sm:h-11"
      />
    </>
  );
}

const ModalHeader = ({
  variant,
  data,
}: {
  variant: "invoice" | "receipt";
  data: Invoice;
}) => {
  return (
    <div
      className={`sticky -top-2 mx-auto -mt-2 flex w-full items-center justify-between rounded-xl px-4 py-2 ${
        variant === "invoice" ? "bg-primary" : "rounded-t-xl bg-shade"
      }`}
    >
      <div
        className={`flex flex-col gap-1 ${
          variant === "invoice" ? "text-white" : "text-shade-300"
        }`}
      >
        <h2 className="uppercase">
          {variant === "invoice" ? "invoice" : "receipt"}
        </h2>
        <small
          className={`font-semibold text-neutral-300 ${
            variant === "receipt" && "hidden"
          }`}
        >
          {data.id}
        </small>
      </div>
      <div
        className={`relative aspect-[50/37] w-full max-w-[50px] ${
          variant === "receipt" && "hidden"
        }`}
      >
        <Logo />
      </div>
    </div>
  );
};

const ModalBody = ({ variant, data }: { variant: Variant; data: Invoice }) => {
  const subTotal = data.amount;
  const tax = (data.tax_rate / 100) * subTotal;
  const total = subTotal + tax;
  const { customer } = customerStore();

  return (
    <main className="mx-auto rounded-t-xl bg-shade p-2 pt-0 sm:w-11/12">
      <ModalHeader variant={variant} data={data} />
      <section className="space-y-8">
        <section className="highlight flex gap-5 max-xs:justify-between">
          <h4>Date issued</h4>
          <p className="highlight-body">{formatDateDMY(data.billing_date)}</p>
        </section>

        <section className="grid gap-5 sm:grid-cols-2">
          <div className="highlight">
            <div className="flex flex-col gap-4">
              <h4>To:</h4>
              <div className="highlight-body">
                <p>{customer.company}</p>
                <p>Customer ID: {customer.customer_id}</p>
              </div>
            </div>
          </div>
          <div className="highlight">
            <div className="flex flex-col gap-4">
              <h4>From:</h4>
              <div className="highlight-body">
                <p className="font-bold">{legal.companyName}</p>
                <p>{legal.address}</p>
                <p>{legal.city}</p>
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
          <Cost
            subTotal={subTotal}
            taxRate={data.tax_rate}
            tax={tax}
            total={total}
            variant={variant}
          />
        </section>
        <section className="flex flex-col gap-1 pt-14">
          <p className="font-bold">Thank you for doing business with us!</p>
          <div className="flex gap-2 ssm:items-center">
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
      </section>
    </main>
  );
};

const ModalFooter = ({
  variant,
  data,
}: {
  variant: Variant;
  data: Invoice;
}) => {
  return (
    <div className="mx-auto w-full sm:w-11/12">
      {variant !== "invoice" && (
        <div className="w-full">
          <DownloadButton
            data={data}
            maxWidth="fit"
            variant={variant}
            content={{ title: `${new Date().toLocaleDateString()}-receipt` }}
          />
        </div>
      )}
      {variant === "invoice" && (
        <div className="">
          <div className="grid w-full grid-cols-2 items-center justify-end gap-3 bg-transparent pb-2">
            <DownloadButton
              maxWidth="fit"
              data={data}
              variant={variant}
              content={{ title: `${new Date().toLocaleDateString()}-invoice` }}
            />
            <CheckoutButton affix={1} items={[data]} />
          </div>
        </div>
      )}
    </div>
  );
};
