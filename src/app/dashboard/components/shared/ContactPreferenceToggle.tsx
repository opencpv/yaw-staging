"use client";
import Toggle from "@/components/__shared/ui/Toggle";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { useAppStore } from "@/store/dashboard/AppStore";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactPreferenceToggle = () => {
  const { user, setUser } = useAppStore();
  const [selected, setSelected] = useState(user?.should_be_contacted || false);

  const handleToggle = async (isSelected: boolean) => {
    setSelected(isSelected);
    const { error, data: preference } = await supabase
      .from("contact_owner_preference")
      .upsert(
        { user_id: user?.id, should_be_contacted: isSelected },
        { onConflict: "user_id" },
      )
      .select("id, should_be_contacted")
      .maybeSingle();

    if (error) {
      toast.error("Something went wrong. Please try again.");
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
      color="primary"
    />
  );
};

export default ContactPreferenceToggle;
