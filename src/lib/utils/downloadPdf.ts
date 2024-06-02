// @ts-ignore
import html2pdf from "html2pdf.js";

type Params = {
  title: string;
  className: string;
  /** Format in inches. e.g. letter, ledger, [595.28, 841.89] */
  format?: string | number[];
};

function downloadPdf({ title, className, format = "letter" }: Params) {
  const content = document.querySelector(`.${className}`);
  const opt = {
    margin: 1,
    filename: `${title}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    jsPDF: { unit: "in", format, orientation: "portrait" },
  };

  html2pdf().set(opt).from(content).save();
}

export default downloadPdf;
