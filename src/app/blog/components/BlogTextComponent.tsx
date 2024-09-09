import * as React from "react";
import { PortableText } from "@portabletext/react";

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
