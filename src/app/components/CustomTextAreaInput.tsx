import { Textarea } from "@/components/ui/textarea"
import { styled } from "@stitches/react"

type Props = {
    label: string
    rows? : number
    classes: string
    onChange : (e: any) => void
    placeholder: string
    name ? : string
    initialValues? :string
}

const CustomTextAreaInput = ({label,  classes, onChange, placeholder, name, initialValues}: Props) => {
    return(
        <Root className="text-[#6A6968]">
            <label htmlFor="">{label}</label>
            <textarea className={`form-input ${classes}`} 
            placeholder={placeholder}
            onChange={onChange} name={name}
            defaultValue={initialValues}
            />
        </Root>
    )
}

const Root = styled("div", {
    fontSize: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.9375rem",
    ".form-input": {
      padding: "15px",
      fontSize: " 0.8125rem",
      border: "1px solid #E6E6E6",
      borderRadius: "4px",
    },
  });

export default CustomTextAreaInput