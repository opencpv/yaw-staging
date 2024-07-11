"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/custom-swiper.css";
import React, { useEffect } from "react";
import ListingInfo from "./ListingInfo";
import { ListingCardInterface } from "../../../../../interfaces";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { usePathname } from "next/navigation";
import { propertiesPathStore } from "@/store/properties/usePropertiesStore";
import SliderArea from "./SliderArea";

const ListingCard = (props: Partial<ListingCardInterface>) => {
  const pathname = usePathname();
  const { setPreviousPath } = propertiesPathStore();
  const isAdmin = props.isAdmin ? true : false;

  useEffect(() => {
    const updateViews = async () => {
      const { data, error } = await supabase.rpc("increment_property_views", {
        propertyid: props.propertyId as number,
      });
      if (error) {
        console.error("Error incrementing property views:", error);
      } else {
        console.log("Property views incremented successfully:", data);
      }
    };
    if (!isAdmin) {
      updateViews();
    }
  }, [isAdmin, props.propertyId]);

  return (
    <div
      className={`group/parent relative flex cursor-default flex-col ${
        props.className
      } ${
        props.cardType === "2"
          ? null
          : "rounded-xl shadow-[1px_3px_13px_rgba(0,_0,_0,_0.10)]"
      }`}
      onClick={() =>
        pathname === "/properties" && setPreviousPath(window.location.href)
      }
    >
      <SliderArea {...props} />
      <ListingInfo {...props} />
    </div>
  );
};

export default React.memo(ListingCard);
