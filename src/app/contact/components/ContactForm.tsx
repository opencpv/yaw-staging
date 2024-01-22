"use client";
import React from "react";
import { useContactForm } from "./forms/hooks/useContactForm";
import FormGeneral from "./forms/FormGeneral";
import FormAdvertise from "./forms/FormAdvertise";
import FormReport from "./forms/FormReport";
import FormWriters from "./forms/FormWriters";

type Props = {};

const ContactForm = (props: Props) => {
  const { activeTab } = useContactForm();

  if (activeTab === "general") return <FormGeneral />;
  if (activeTab === "report") return <FormReport />;
  if (activeTab === "advertise") return <FormAdvertise />;
  if (activeTab === "writers") return <FormWriters />;
};

export default ContactForm;
