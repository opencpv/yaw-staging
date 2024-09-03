"use client";
import { Input } from "@/components/__shared/ui/form/input";
import React from "react";
import { useContactForm } from "./hooks/useContactForm";

const ContactFullNameField = () => {
  const { handleSessionChange } = useContactForm();

  return (
    <Input
      name="fullname"
      placeholder="Full Name"
      required
      onChange={(e) => {
        handleSessionChange("fullname", e.target.value);
      }}
    />
  );
};

export default ContactFullNameField;
