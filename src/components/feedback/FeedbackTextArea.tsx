import { cn } from "@/lib/utils";
import { useField } from "formik";
import React, { useEffect } from "react";

type Props = {
  name: string;
  thumbsDownChecked: boolean;
  thumbsUpChecked: boolean;
  // handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
};

const FeedbackTextArea = ({
  thumbsDownChecked,
  thumbsUpChecked,
  name,
  placeholder,
}: Props) => {
  const [field, meta, helpers] = useField(name);
  const { onChange, value } = field;
  const { setValue } = helpers;

  useEffect(() => {
    setValue("");
  }, [setValue]);

  return (
    <textarea
      name={name}
      onChange={onChange}
      cols={12}
      rows={6}
      className={cn(
        "pointer-events-none mx-auto h-0 w-full rounded-md border border-neutral-300 p-4 text-base text-neutral-500 opacity-0 duration-400 transition-height placeholder:text-neutral-400 focus:border-primary-800 focus:ring-primary-800 sm:w-10/12",
        {
          "pointer-events-auto h-auto opacity-100 duration-400 transition-height":
            thumbsDownChecked || thumbsUpChecked,
        },
      )}
      placeholder={placeholder}
    ></textarea>
  );
};

export default FeedbackTextArea;
