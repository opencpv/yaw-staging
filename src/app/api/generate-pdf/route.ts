import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import withErrorHandler from "../withErrorHandler";

interface PostProps {}

export const POST = withErrorHandler(async (request: NextRequest) => {
  const { htmlContent } = await request.json(); // res now contains body
  console.log(htmlContent);
  if (!htmlContent) {
    return new NextResponse(
      JSON.stringify({ message: "HTML content is required" }),
      {
        status: 400,
      },
    );
  }

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent);
    const pdfBuffer = await page.pdf({ format: "A4" });

    await browser.close();

    const response = new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=generated.pdf",
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "An error occurred while generating the PDF" }),
      {
        status: 500,
      },
    );
  }
});
