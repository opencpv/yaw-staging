import { ChangeEvent } from "react";

interface InputProps {
  handleChange: (e: ChangeEvent<any>) => void;
  handleBlur: (e: any) => void;
  values: any;
  errors: any;
  touched: any;
  name: string;
  type: string;
  label: string;
  placeholder?: string;
}
const CustomInputComponent = ({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  type,
  name,
  label,
  placeholder,
}: InputProps) => {
  return (
    <fieldset className="mb-4">
      {label == "" ? null : <label className="text-[#6A6968] ">{label}</label>}
      <input
        type={type}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values}
        placeholder={placeholder ? placeholder : ""}
        className="mt-4 w-full rounded-md border-[1px] p-4 text-[13px] text-[#B4B2AF] outline-none  "
      />
      <p className="text-[10px] text-green-700">{errors && touched}</p>
    </fieldset>
  );
};

export default CustomInputComponent;
