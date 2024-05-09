import React from "react";
import jsPDF from "jspdf";
// @ts-ignore
import html2pdf from "html2pdf.js";



function downloadPdf(title:string, className: string ) {
  const content = document.querySelector(`.${className}`);
  const opt = {
    margin: 1,
    filename: `${title}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(opt).from(content).save();
}

export default downloadPdf;
