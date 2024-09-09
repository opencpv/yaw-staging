import React from "react";
import { Textarea } from "@/components/__shared/ui/form/textarea";
import { useSessionStorage } from "@uidotdev/usehooks";

const FaqMessageField = () => {
  const [faqFormSession, setFaqFormSession] = useSessionStorage(
    "faqFormSession",
    {
      message: "",
    },
  );
  return (
    <div className="form-div">
      <Textarea
        name="message"
        placeholder={"How can we help you?"}
        onChange={(e) => {
          setFaqFormSession({
            ...faqFormSession,
            message: e.currentTarget.value,
          });
        }}
      />
    </div>
  );
};

export default FaqMessageField;

//<textarea
//        id="message"
//        name="message"
//        value={props.value}
//        placeholder={props.placeholder ? props.placeholder + " *" : "Message *"}
//        className={cn(
//          `${
//style.requiredPlaceholder
//} form-field-border w-full rounded-md border p-4 text-base shadow-sm outline-none transition-all hover:border-black/50 focus:border-2 focus:border-accent-50 focus:outline-none ${
//props.error && "border-neutral-500"
//}`,
//          props.className,
//        )}
//        rows={8}
//        cols={50}
//        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
//          props.onChange?.(e);
//        }}
//        onBlur={props.onBlur}
//      ></textarea>
