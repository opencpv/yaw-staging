"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ContactTabActiveKey } from "@/store/contact/useContactStore";

const FormGeneral = dynamic(() => import("./forms/FormGeneral"));
const FormAdvertise = dynamic(() => import("./forms/FormAdvertise"));
const FormReport = dynamic(() => import("./forms/FormReport"));
const FormWriters = dynamic(() => import("./forms/FormWriters"));

const ContactForm = ({ tag }: { tag: ContactTabActiveKey }) => {
  if (tag === "general") return <FormGeneral />;
  if (tag === "report") return <FormReport />;
  if (tag === "advertise") return <FormAdvertise />;
  if (tag === "writers") return <FormWriters />;
};

export default ContactForm;
