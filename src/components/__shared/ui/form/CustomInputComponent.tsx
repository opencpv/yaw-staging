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
        value={values[name] as string}
        placeholder={placeholder ? placeholder : ""}
        className="mt-4 w-full p-4 text-[13px] border-[1px] rounded-md outline-none text-[#B4B2AF]  "
      />
      <p className="text-[10px] text-green-700">
        {" "}
        {errors[name] && touched[name] && errors[name]}
      </p>
    </fieldset>
  );
};

export default CustomInputComponent;
