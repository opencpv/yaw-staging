import React from "react";
import * as Switch from "@radix-ui/react-switch";
import { styled } from "@stitches/react";

type Props = {
  label: string;
  onChange: (checked: boolean) => void;
};

const FormSwitch = ({ label, onChange }: Props) => (
  <form>
    <div className="flex items-center  gap-5">
      <SwitchRoot id="switch" onCheckedChange={onChange}>
        <SwitchThumb />
      </SwitchRoot>
      <p className="text-[#6A6968] text-[16px]">{label}</p>
    </div>
  </form>
);

const SwitchRoot = styled(Switch.Root, {
  all: "unset",
  width: 45,
  height: 25,
  backgroundColor: "white",
  borderRadius: "9999px",
  position: "relative",
  boxShadow: `0 2px 2px #DDB771`,
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  border: "1px solid #DDB771",
  '&[data-state="checked"]': { backgroundColor: "#DDB771" },
});

const SwitchThumb = styled(Switch.Thumb, {
  display: "block",
  width: 20,
  height: 20,
  backgroundColor: "#D0D0D0",
  borderRadius: "9999px",
  boxShadow: `0 2px 2px #DDB771`,
  transition: "transform 100ms",
  transform: "translateX(2px)",
  willChange: "transform",
  '&[data-state="checked"]': {
    transform: "translateX(22px)",
    backgroundColor: "White",
  },
});

export default FormSwitch;
