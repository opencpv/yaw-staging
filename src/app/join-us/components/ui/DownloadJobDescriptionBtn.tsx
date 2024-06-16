import Button from '@/components/__shared/ui/button/Button'
import React from 'react'
import { HiOutlineDownload } from 'react-icons/hi'
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
import { JobType } from '../../types';

type Props = {
  job: JobType | undefined
}

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
})


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

const downloadPdf = () => {
<PDFDownloadLink
    document={
      <JoinUsTemplate />
    }
    fileName={`test-jobs.pdf`}
  >
    {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
  </PDFDownloadLink>
}

const JoinUsTemplate = ({job}: Props) => {
  return (
<Document>
      <Page>
        <View>
          <Text>Hi this is the test file to be downloaded {job?.title}</Text>
        </View>
      </Page>

    </Document>
  )
}


const DownloadJobDescriptionBtn = ({job}: Props) => {
  console.log(job)
  return (
<PDFDownloadLink
      style={{backgroundColor: "#DDB771", color: "white", borderRadius: "0.5rem", display: "grid", placeItems: "center"}}
    document={
      <JoinUsTemplate job={job} />
    }
    fileName={`test-jobs.pdf`}
  >
      {({ loading }) => loading ? (<div className="flex gap-2">Downloading... <HiOutlineDownload size="24" color="white" /></div>) : (<div className="flex gap-2">Download <HiOutlineDownload size="24" color="white" /></div>)}
    </PDFDownloadLink>
  ) 
}

export default DownloadJobDescriptionBtn
