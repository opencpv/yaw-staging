import * as React from "react";
import { PortableText } from "@portabletext/react";
import { PortableTextObject } from "sanity";

interface IPortableTextComponentProps {
  value: any;
}

const BlogTextComponent: React.FunctionComponent<
  IPortableTextComponentProps
> = ({ value }) => {
  const components = {};
  return <PortableText value={value} components={components} />;
};

export default BlogTextComponent;
