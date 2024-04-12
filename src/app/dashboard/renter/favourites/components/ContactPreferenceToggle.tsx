"use client";
import Toggle from "@/components/ui/Toggle";
import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { useAppStore } from "@/store/dashboard/AppStore";
import React, { useState } from "react";

type Props = {};

const ContactPreferenceToggle = (props: Props) => {
  const { user } = useAppStore();
  const [selected, setSelected] = useState(user?.shouldBeContacted || false);
  const { onOpen } = useToastDisclosure();

  const handleToggle = async (isSelected: boolean) => {
    setSelected(isSelected);
    const { error } = await supabase
      .from("contact_owner_preference")
      .insert({ should_be_contacted: selected })
      .eq("user_id", user?.id as string)
      .select("id");

    if (error) {
      onOpen(error.message, "error");
      setSelected(!isSelected);
    }
  };

  return (
    <Toggle
      label="Allow property owners to contact you"
      isSelected={selected}
      onValueChange={handleToggle}
    />
  );
};

export default ContactPreferenceToggle;
