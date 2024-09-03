import { Button } from "@/components/__shared/ui/button/Button";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
  label?: string;
};

const ContactSubmitButton = (props: Props) => {
  return (
    <Button
      variant="accent"
      className={cn("mt-5 max-w-full xs:max-w-fit", props.className)}
      type="submit"
    >
      {props.label ?? "Submit"}
    </Button>
  );
};

export default ContactSubmitButton;
