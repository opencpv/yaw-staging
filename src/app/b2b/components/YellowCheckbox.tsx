import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

type Props = {
  id?: string;
};

const YellowCheckBox = ({ id }: Props) => (
  <form className="flex items-center justify-center">
    <div className="flex items-center">
      <Checkbox.Root
        className="shadow-blackA4 hover:bg-violet3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white -none focus:bg-[#DDA948] data-[state=checked]:bg-[#DDA948] data-[state=unchecked]:bg-white data-[state=unchecked]:border-2"
        defaultChecked
        id={id}>
        <Checkbox.Indicator className="text-white">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <label
        className="pl-[15px] text-[15px] leading-none text-white hidden"
        htmlFor={id}>
        Accept terms and conditions.
      </label>
    </div>
  </form>
);

export default YellowCheckBox;
