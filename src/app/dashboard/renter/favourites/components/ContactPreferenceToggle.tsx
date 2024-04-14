"use client";
import Toggle from "@/components/ui/Toggle";
import { useToastDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { useAppStore } from "@/store/dashboard/AppStore";
import React, { useState } from "react";

type Props = {};

const ContactPreferenceToggle = (props: Props) => {
  const { user, setUser } = useAppStore();
  const [selected, setSelected] = useState(user?.should_be_contacted || false);
  const { onOpen } = useToastDisclosure();

  const handleToggle = async (isSelected: boolean) => {
    setSelected(isSelected);
    const { error, data: preference } = await supabase
      .from("contact_owner_preference")
      .upsert(
        { user_id: user?.id, should_be_contacted: isSelected },
        { onConflict: "user_id" },
      )
      .eq("user_id", user?.id as string)
      .select("id, should_be_contacted")
      .maybeSingle();

    if (error) {
      onOpen(error.message, "error");
      setSelected(!isSelected);
      return;
    }
    setUser({ ...user, should_be_contacted: preference?.should_be_contacted });
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
