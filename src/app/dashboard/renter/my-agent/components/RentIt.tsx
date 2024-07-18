import React from "react";
import ActionButton from "./ActionButton";

export default function RentIt() {
  return (
    <ActionButton actionType="Rent it" title="Rent it">
      <span className="lg:max-xl:hidden">Rent it</span>
      <span className="hidden lg:max-xl:inline">Rent it</span>
    </ActionButton>
  );
}
