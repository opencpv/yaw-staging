import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  PDFDownloadLink,
  Image,
  Link,
} from "@react-pdf/renderer";
import { JobType } from "../../types";
import { TypedObject } from "sanity";
import legal from "@/enum/about/legal";
import PDFRichTextRenderer from "@/components/__shared/rich-text/pdf-rich-text-renderer";

type Props = {
  job: JobType | undefined;
};

Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf",
      fontWeight: "normal",
    },
    {
      src: "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1y4nY1M2xLER.ttf",
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontSize: 12,
    color: "#545454",
    padding: 20,
    lineHeight: 1.5,
    flexDirection: "column",
    width: "100vw",
    fontFamily: "Open Sans",
    gap: 8,
    fontWeight: "normal",
  },
  heading: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  description: {
    marginTop: 10,
  },
  description_brief: {
    fontWeight: "normal",
  },
  border: {
    border: "1px solid #eee",
  },
  image: {
    width: 32,
    height: 32,
  },
  bold: {
    fontWeight: "bold",
  },
  normal: {
    fontWeight: "normal",
  },
});

const JoinUsTemplate = ({ job }: Props) => {
  return (
    <Document
      title={job?.title}
      subject={job?.description_brief}
      keywords={`${job?.title}, ${legal.websiteName}`}
    >
      <Page style={styles.page}>
        <View style={styles.heading}>
          <Text style={styles.title}>{job?.title}</Text>
          <Link src={`${legal.websiteUrl}`}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
              src={`https://cdn.sanity.io/images/jmb2nd2r/production/fb888167abb7d253eddca9e8914d951e33c57621-1780x2000.webp`}
              style={styles.image}
            />
          </Link>
        </View>
        <View style={styles.border}></View>
        <Text style={styles.bold}>
          Brief:{" "}
          <Text style={styles.description_brief}>{job?.description_brief}</Text>
        </Text>

        <PDFRichTextRenderer
          value={job?.description as unknown as TypedObject | TypedObject[]}
        />
      </Page>
    </Document>
  );
};

const DownloadJobDescriptionBtn = ({ job }: Props) => {
  return (
    <PDFDownloadLink
      style={{
        backgroundColor: "#DDB771",
        color: "white",
        borderRadius: "0.5rem",
        display: "grid",
        placeItems: "center",
        fontSize: "1rem",
      }}
      className="transition-all hover:scale-[1.02]"
      document={<JoinUsTemplate job={job} />}
      fileName={`${job?.title}-${legal.websiteName}.pdf`}
    >
      {({ loading }) => (
        <span className="flex gap-2">
          {loading ? "Loading..." : "Download"}{" "}
          <HiOutlineDownload
            className="max-xsm:hidden"
            size="24"
            color="white"
          />
        </span>
      )}
    </PDFDownloadLink>
  );
};

export default DownloadJobDescriptionBtn;
