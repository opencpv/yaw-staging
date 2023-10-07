import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  // Wrap NextUIProvider at the root of your app
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;