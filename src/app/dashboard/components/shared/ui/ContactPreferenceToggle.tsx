"use client";
import { Switch } from "@/components/__shared/ui/switch";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { useAppStore } from "@/store/dashboard/AppStore";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ContactPreferenceToggle = () => {
  const { user, setUser } = useAppStore();
  const [selected, setSelected] = useState(user?.should_be_contacted);

  useEffect(() => {
    setSelected(user?.should_be_contacted);
  }, [user]);

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
    <Switch
      label="Allow property owners to contact you"
      checked={selected}
      onCheckedChange={handleToggle}
    />
  );
};

export default ContactPreferenceToggle;
