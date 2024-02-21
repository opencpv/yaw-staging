import { styled } from "@stitches/react";
import { Field } from "formik";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

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
  className?: string;
  value?: string;
};

const CustomSelect = ({
  label,
  options,
  onChange,
  placeholder,
  fadeText,
  value,
  className,
}: Props) => {
  return (
    <Root className={cn("w-full text-[#6A6968] focus:border-0", className)}>
      <label>{label}</label>
      <Select onValueChange={onChange} value={value}>
        <SelectTrigger
          className={`form-input w-full capitalize hover:border-black/50 ${
            fadeText && "text-[#B4B2AF]"
          }`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="z-[1001]">
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
    border: "1px solid #a3a3a3",
    fontSize: " 0.8125rem",
    option: {
      minHeight: "50px",
    },
    "&:focus": {
      border: "2px solid #DDB771",
    },
  },
});

export default CustomSelect;
