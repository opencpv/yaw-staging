import { styled } from "@stitches/react";
import { Field } from "formik";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type OptionTypes = {
  name: string;
  value: string;
};
type Props = {
  placeholder?: string;
  label: string;
  options: OptionTypes[];
  onChange: (value: any) => void;
  fadeText?: boolean;
};

const CustomSelect = ({
  label,
  options,
  onChange,
  placeholder,
  fadeText,
}: Props) => {
  return (
    <Root className="w-full text-[#6A6968] ">
      <label>{label}</label>
      <Select onValueChange={onChange}>
        <SelectTrigger className={`w-full form-input capitalize ${fadeText && "text-[#B4B2AF]"}`}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="">
          {options.map((r, index) => (
            <SelectItem key={index} value={r?.value} className="capitalize">
              {r?.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Root>
  );
};

const Root = styled("div", {
  fontSize: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.9375rem",
  ".form-input": {
    backgroundColor: "white",
    height: "52px",
    padding: "15px",
    fontSize: " 0.8125rem",
    border: "1px solid #E6E6E6",
    borderRadius: "4px",
    option: {
      minHeight: "50px",
    },
  },
});

export default CustomSelect;
