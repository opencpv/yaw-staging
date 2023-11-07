import React, { useEffect, useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { useLocalStorage } from "@uidotdev/usehooks";

type Data = {
  name: string;
  value: string;
};
type Props = {
  data: Data[];
  onChange: any;
};
const CustomCheckBoxes = ({ data, onChange }: Props) => {
  const [selected, setSelected] = useState([]);
  const [listingFormData, setlistingFormData] = useLocalStorage(
    "listing-form",
    {
      advancePaymentDuration: [],
    }
  );

  useEffect(() => {
    if (selected) {
      onChange && onChange(selected);
    }
  }, [selected?.length]);

  const handleChange = (r: any) => {
    if (selected.includes(r?.name)) {
      setSelected(selected.filter((item: any) => item !== r?.name));
    } else {
      setSelected([...selected, r?.name]);
    }
  };

  useEffect(() => {
    if (listingFormData?.advancePaymentDuration) {
      setSelected(listingFormData?.advancePaymentDuration);
    }
  }, []);

  return (
    <form className="flex flex-wrap gap-5 w-full">
      {data.map((r: any, index: number) => (
        <div className="flex items-center gap-3 w-fit" key={index}>
          <Checkbox.Root
            checked={selected?.includes(r?.name)}
            onCheckedChange={() => handleChange(r)}
            className="shadow-blackA4 hover:bg-violet3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white border-[1px] border-[#DCDCDC]"
            id="c1">
            <Checkbox.Indicator className="text-violet11">
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label
            className=" leading-none text-[#737373] font-[400] text-[16px]"
            htmlFor="c1">
            {r?.name}
          </label>
        </div>
      ))}
    </form>
  );
};

export default CustomCheckBoxes;
