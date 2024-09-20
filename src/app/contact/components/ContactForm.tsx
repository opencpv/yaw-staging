"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ContactTabActiveKey } from "@/store/contact/useContactStore";
import Loader from "@/components/__shared/ui/loader";

const FormGeneral = dynamic(() => import("./forms/FormGeneral"), {
  loading: () => <Loader />,
});
const FormAdvertise = dynamic(() => import("./forms/FormAdvertise"), {
  loading: () => <Loader />,
});
const FormReport = dynamic(() => import("./forms/FormReport"), {
  loading: () => <Loader />,
});
const FormWriters = dynamic(() => import("./forms/FormWriters"), {
  loading: () => <Loader />,
});

const ContactForm = ({ tag }: { tag: ContactTabActiveKey }) => {
  if (tag === "general") return <FormGeneral />;
  if (tag === "report") return <FormReport />;
  if (tag === "advertise") return <FormAdvertise />;
  if (tag === "writers") return <FormWriters />;
};

export default ContactForm;
