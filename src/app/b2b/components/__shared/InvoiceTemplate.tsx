import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
  PDFDownloadLink,
  Svg,
  Path,
} from "@react-pdf/renderer";
import { formatDateDMY } from "@/lib/utils/stringManipulation";
import { customerStore } from "@/store/payment/customerStore";
import { formatPrice } from "@/lib/utils/numberManipulation";
import legal from "@/enum/about/legal";

Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf",
    },
    {
      src: "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1y4nY1M2xLER.ttf",
      fontWeight: 600,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontSize: 12,
    padding: 20,
    lineHeight: 1.5,
    flexDirection: "column",
    width: "100vw",
    fontFamily: "Open Sans",
  },
  header: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
    marginBottom: 16,
  },
  image: {
    height: 41,
    width: 50,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 600,
  },
  subtitle: {
    fontWeight: 600,
    color: "#262626",
  },
  highlightBody: {
    color: "rgb(138 138 138/1)",
  },
  section: {
    marginBottom: 10,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bold: {
    fontWeight: 600,
  },
  costTitle: { color: "#545454", fontWeight: 600 },
  higlightedSection: {
    backgroundColor: "#F2F4F7",
    padding: 16,
    borderRadius: 8,
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
  },
  itemContainer: {
    width: "50%",
  },
  marginBotttom: {
    marginBottom: 8,
  },
  textRight: {
    textAlign: "right",
  },
  grayBorder: {
    borderBottom: "1pt solid #F2F4F7",
    paddingBottom: 8,
    marginBottom: 8,
  },
  primaryBorder: {
    borderBottom: "1pt solid #DDB771",
    paddingBottom: 8,
    marginBottom: 8,
    color: "$#DDB771",
  },
  primaryColor: {
    color: "$#DDB771",
  },
  lightText: {
    color: "#8A8A8A",
  },
});

export const PDFTemplateObject = ({
  variant,
  data,
  customer,
}: {
  variant: "invoice" | "receipt";
  data: Invoice;
  customer: any;
}) => {
  const subTotal = data.amount;
  const tax = (data.tax_rate / 100) * subTotal;
  const total = subTotal + tax;

  return (
    <Document>
      <Page style={styles.page}>
        <View
          style={[
            styles.header,
            variant === "invoice"
              ? { backgroundColor: "#11605E", color: "white" }
              : { backgroundColor: "#F8F8F8" },
          ]}
        >
          <View style={styles.flexRow}>
            <View>
              <Text style={styles.title}>{variant}</Text>
              {variant === "invoice" && (
                <Text style={styles.bold}>{data.id}</Text>
              )}
            </View>
          </View>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          {variant == "invoice" && (
            <Image
              style={styles.image}
              src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.73b03ab3.png&w=96&q=100"
            />
          )}
        </View>

        <View
          style={[
            styles.section,
            styles.rowContainer,
            styles.higlightedSection,
          ]}
        >
          <Text style={styles.subtitle}>Date issued:</Text>
          <Text style={styles.highlightBody}>
            {formatDateDMY(data.billing_date)}
          </Text>
        </View>

        <View
          style={[
            styles.higlightedSection,
            styles.rowContainer,
            styles.marginBotttom,
          ]}
        >
          <View style={styles.itemContainer}>
            <Text style={[styles.subtitle, styles.marginBotttom]}>To:</Text>
            <Text style={styles.highlightBody}>{customer.company}</Text>
            <Text style={styles.highlightBody}>
              Customer ID: {customer.customer_id}
            </Text>
          </View>
          <View style={[styles.itemContainer, styles.marginBotttom]}>
            <Text style={[styles.subtitle, styles.marginBotttom]}>From:</Text>
            <Text style={[styles.highlightBody, styles.bold]}>
              {legal.companyName}
            </Text>
            <Text style={styles.highlightBody}>{legal.address}</Text>
            <Text style={styles.highlightBody}>{legal.city}</Text>
          </View>
        </View>

        <View
          style={[
            styles.higlightedSection,
            styles.rowContainer,
            styles.marginBotttom,
          ]}
        >
          <Text style={[styles.bold, styles.itemContainer]}>Service</Text>
          <Text style={[styles.bold, styles.itemContainer, styles.textRight]}>
            Total
          </Text>
        </View>
        <View style={[styles.higlightedSection, styles.marginBotttom]}>
          <View style={[styles.rowContainer, styles.marginBotttom]}>
            <Text style={[styles.itemContainer]}>{data.service}</Text>
            <Text
              style={[styles.itemContainer, styles.textRight, styles.lightText]}
            >
              {formatPrice(data.amount)}
            </Text>
          </View>
          <Text style={styles.lightText}>{data.service_description}</Text>
        </View>

        <View
          style={[styles.marginBotttom, styles.rowContainer, { marginTop: 24 }]}
        >
          <View style={styles.itemContainer}></View>
          <View style={styles.itemContainer}>
            <View style={[styles.flexRow, styles.grayBorder]}>
              <Text style={[styles.bold, styles.costTitle]}>SubTotal</Text>
              <View style={styles.rowContainer}>
                <Text style={styles.costTitle}>GHS</Text>
                <Text>{formatPrice(subTotal, false)}</Text>
              </View>
            </View>
            <View style={[styles.flexRow, styles.grayBorder]}>
              <Text style={[styles.bold, styles.costTitle]}>Tax</Text>
              <View style={styles.rowContainer}>
                <Text style={styles.costTitle}>GHS </Text>
                <Text>{formatPrice(tax, false)}</Text>
              </View>
            </View>
            <View style={[styles.flexRow, styles.primaryBorder]}>
              <Text style={[styles.bold, styles.costTitle]}>Total</Text>
              <View style={styles.rowContainer}>
                <Text style={styles.costTitle}>GHS</Text>
                <Text>{formatPrice(total, false)}</Text>
              </View>
            </View>
            <View style={[styles.flexRow, styles.marginBotttom]}>
              <Text
                style={[styles.bold, styles.costTitle, { color: "#DDB771" }]}
              >
                Amount Due
              </Text>
              <View style={[styles.rowContainer, { color: "#DDB771" }]}>
                <Text style={{ fontWeight: 600 }}>GHS</Text>
                <Text>{formatPrice(total, false)}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.section, { fontSize: 12 }]}>
          <Text style={styles.costTitle}>
            Thank you for doing business with us!
          </Text>
          {variant == "invoice" && (
            <View style={[styles.rowContainer, { alignItems: "center" }]}>
              <Svg width="10" height="10" fill="none" viewBox="0 0 10 10">
                <Path
                  fill="#8B919E"
                  fillRule="evenodd"
                  d="M2 0a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H2zm2.722 2.955c0-.172-.14-.315-.311-.29-1.08.16-1.911 1.143-1.911 2.33v2.023c0 .172.14.312.313.312H4.41c.172 0 .312-.14.312-.312V5.602a.313.313 0 00-.312-.312H3.61v-.337c0-.536.34-.989.803-1.13.165-.05.308-.186.308-.358v-.51zm2.778 0c0-.172-.14-.315-.312-.29-1.08.16-1.91 1.143-1.91 2.33v2.023c0 .172.14.312.312.312h1.598c.172 0 .312-.14.312-.312V5.602a.313.313 0 00-.313-.312H6.39v-.337c0-.536.34-.989.803-1.13.165-.05.308-.186.308-.358v-.51z"
                  clipPath="evenodd"
                ></Path>
              </Svg>
              <Text style={styles.highlightBody}>
                Please pay within 15 days of receiving this invoice.
              </Text>
            </View>
          )}
        </View>

        <View
          style={[
            styles.section,
            styles.flexRow,
            styles.highlightBody,
            { marginTop: 24 },
          ]}
        >
          <Text>ESODO LLC</Text>
          <Text>{`(+233) 54 686 3012`}</Text>
          <Text>{legal.email}</Text>
        </View>
      </Page>
    </Document>
  );
};

export const PDFDownload = ({
  variant,
  data,
  customer,
}: {
  variant: "invoice" | "receipt";
  data: Invoice;
  customer: any;
}) => (
  <PDFDownloadLink
    document={
      <PDFTemplateObject variant={variant} data={data} customer={customer} />
    }
    fileName={`${variant}-${data.id}.pdf`}
  >
    {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
  </PDFDownloadLink>
);
