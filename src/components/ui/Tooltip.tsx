import React from "react";
import { Tooltip as NextUITooltip } from "@nextui-org/react";

type Props = {
  content: string;
  children: React.ReactNode;
};

const Tooltip = ({ children, content }: Props) => {
  return (
    <NextUITooltip
      classNames={{ base: "z-[9999]" }}
      content={content}
      closeDelay={200}
    >
      {children}
    </NextUITooltip>
  );
};

export default Tooltip;
