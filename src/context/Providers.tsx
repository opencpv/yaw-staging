import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
