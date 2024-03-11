import ErrorMessage from "@/components/__shared/ui/ErrorMessage";
import { Textarea } from "@/components/ui/textarea";
import { styled } from "@stitches/react";
import { useField } from "formik";

type Props = {
  rows?: number;
  classes: string;
  onChange?: (e: any) => void;
  placeholder: string;
  label?: string;
  name?: string;
  initialValues?: string;
};

const CustomTextAreaInput = ({
  label,
  classes,
  onChange,
  placeholder,
  name,
  initialValues,
}: Props) => {
  const [field, meta, helpers] = useField(name as string);

  return (
    <Root className="text-[#6A6968]">
      {label && <label htmlFor="">{label}</label>}

      <textarea
        className={`form-input hidden-scrollbar pb-5 hover:border-black/50 focus:outline-accent-50 ${classes}`}
        placeholder={placeholder}
        onChange={(e) => {
          onChange && onChange(e);
          field.onChange(e);
        }}
        name={field.name}
        value={field.value}
        defaultValue={initialValues}
      />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </Root>
  );
};

const Root = styled("div", {
  fontSize: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.9375rem",
  ".form-input": {
    padding: "15px",
    fontSize: " 0.8125rem",
    border: "1px solid #a3a3a3",
    borderRadius: "4px",
  },
});

export default CustomTextAreaInput;
