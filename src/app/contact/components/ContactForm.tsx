"use client";
import React from "react";
import { useContactForm } from "./forms/hooks/useContactForm";
import dynamic from "next/dynamic";

const FormGeneral = dynamic(() => import("./forms/FormGeneral"));
const FormAdvertise = dynamic(() => import("./forms/FormAdvertise"));
const FormReport = dynamic(() => import("./forms/FormReport"));
const FormWriters = dynamic(() => import("./forms/FormWriters"));

const ContactForm = () => {
  const { activeTab } = useContactForm();

  if (activeTab === "general") return <FormGeneral />;
  if (activeTab === "report") return <FormReport />;
  if (activeTab === "advertise") return <FormAdvertise />;
  if (activeTab === "writers") return <FormWriters />;
};

export default ContactForm;
