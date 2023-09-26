import { PortableText, PortableTextComponents } from "@portabletext/react";
import React from "react";

const RichTextRenderer = ({ content }: { content: any }) => {
  const components: PortableTextComponents = {
    types: {
      paragraph: ({ value }) => (
        <p style={{ color: "blue", fontSize: "18px" }}>{value}</p>
      ),
      heading: ({ value }) => (
        <h1 style={{ color: "red", fontSize: "24px" }}>{value}</h1>
      ),
    },
  };

  return <PortableText value={[content]} components={components} />;
};

export default RichTextRenderer;
