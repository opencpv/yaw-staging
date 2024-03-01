import { styled } from "@stitches/react";
import { Field, useField, useFormik } from "formik";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export type OptionTypes = {
  name: string;
  value: string;
};
type Props = {
  placeholder?: string;
  options: OptionTypes[];
  onChange: (value: any) => void;
  label?: string;
  fadeText?: boolean;
  className?: string;
  value?: string;
  name?: string;
  /** A string that shows before the value. Eg: GHS 1000 */
  prefix?: string;
};

const CustomSelect = ({
  label,
  options,
  onChange,
  placeholder,
  fadeText,
  value,
  className,
  prefix,
  name,
}: Props) => {
  const [field, meta, helpers] = useField(name as string);
  const { FormikProvider } = require("formik");

  const formik = useFormik({
    initialValues: {
      [name || ""]: value,
    },
    onSubmit: () => {},
  });

  return (
    <FormikProvider value={formik}>
      <Root className={cn("w-full text-[#6A6968] focus:border-0", className)}>
        {label && <label>{label}</label>}
        <Select
          onValueChange={(value) => {
            helpers.setValue(value);
            onChange && onChange(value);
          }}
          value={field.value || value}
          name={field.name || name}
        >
          <SelectTrigger
            className={`form-input w-full capitalize hover:border-black/50 ${
              fadeText && "text-[#B4B2AF]"
            }`}
          >
            <div className="flex items-center gap-5">
              {prefix && <span>{prefix}</span>}
              <SelectValue placeholder={placeholder} />
            </div>
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
    </FormikProvider>
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
