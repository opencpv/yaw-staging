import React from "react";
import * as Switch from "@radix-ui/react-switch";
import "./styles.css";

interface Props {
  onChange: (state: boolean) => void;
}
const SimpleSwitch = ({ onChange }: Props) => (
  <form className="mb-12">
    <div style={{ display: "flex", alignItems: "center" }}>
      <Switch.Root className="SwitchRoot" id="airplane-mode">
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
      <p className="ml-3 text-neutral-500 text-base font-normal font-['Open Sans'] leading-snug">
        Allow property owners to contact you
      </p>
    </div>
  </form>
);

export default SimpleSwitch;
