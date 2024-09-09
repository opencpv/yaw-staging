import React from "react";
import ActionButton from "./ActionButton";

export default function RentIt({match}: {match: AgentRequestMatch}) {
  return (
    <ActionButton match={match} actionType="Rent it" title="Rent it">
      Rent it
    </ActionButton>
  );
}
