"use client";
import React from "react";
import { Button } from "@/components/__shared/ui/button/Button";
import { deleteScheduleCookie } from "../../actions";

type Props = {
  previousPath: string;
};

const GoHomeBtn = (props: Props) => {
  const [loading, setLoading] = React.useState(false);
  return (
    <Button
      onClick={() => {
        setLoading(true);
        deleteScheduleCookie(props.previousPath);
      }}
      isLoading={loading}
    >
      Go home
    </Button>
  );
};

export default GoHomeBtn;
