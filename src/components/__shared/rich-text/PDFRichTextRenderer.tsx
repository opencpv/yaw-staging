import { Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import {
  PortableText,
  PortableTextComponents,
  PortableTextProps,
} from "@portabletext/react";

const styles = StyleSheet.create({
  paragraph: {
    marginBottom: 10,
    fontSize: 12,
  },
  normal: {
    fontSize: 12,
  },
  bold: {
    fontWeight: "bold",
  },
  italics: {
    fontStyle: "italic",
  },
  lineBreak: {
    marginBottom: 10,
  },
  h1: {
    fontSize: 14,
  },
  h2: {
    fontSize: 12,
  },
});

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <Text style={styles.paragraph}>{children}</Text>,
    h1: ({ children }) => <Text style={styles.h1}>{children}</Text>,
    h2: ({ children }) => <Text style={styles.h2}>{children}</Text>,
    // Add other block types as needed
  },
  marks: {
    strong: ({ children }) => <Text style={styles.bold}>{children}</Text>,
    em: ({ children }) => <Text style={styles.italics}>{children}</Text>,
    span: ({ children }) => <Text>{children}</Text>,
    link: ({ value, children }) => {
      return <Link src={value?.href}>{children}</Link>;
    },
  },
  list: {
    bullet: ({ children }) => <View>{children}</View>,
    number: ({ children }) => <View>{children}</View>,
  },
  listItem: {
    bullet: ({ children }) => <Text>• {children}</Text>,
    number: ({ children }) => <Text>1. {children}</Text>,
  },
  types: {
    // Define custom types as needed
  },
  hardBreak: () => <View style={styles.lineBreak} />,
  unknownMark: () => <View style={styles.paragraph} />,
  unknownType: () => <View style={styles.paragraph} />,
};

const PDFRichTextRenderer = ({ value }: PortableTextProps) => {
  return <PortableText value={value} components={components} />;
};

export default PDFRichTextRenderer;
