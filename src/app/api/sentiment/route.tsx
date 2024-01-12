import { NextResponse } from "next/server";
import withErrorHandler from "@/app/api/withErrorHandler";
import getSentiment from "@/app/api/sentiment/getSentimet";
import { SentimentResponse } from "../../../../interfaces";
import countItemInArray from "@/lib/utils/countItemInArray";

interface PostProps {
  text: string;
}

export const POST = withErrorHandler(async (request: Request) => {
  // const requestBody = await request.json(); // To read request data

  const res: PostProps = await request.json(); // res now contains body
  const text = res.text;

  const sentiments_res: any = await getSentiment(
    "An exhilarating cinematic journey, 'Inception' captivates with its mind-bending plot and stunning visuals. Christopher Nolan's masterful direction combines with a stellar ensemble cast, led by Leonardo DiCaprio, delivering a thrilling exploration of dreams within dreams. The intricate narrative and exceptional special effects make it a groundbreaking and unforgettable experience",
  );
  const sentiments: any[] = sentiments_res.sentiments;
  const emotions_only = sentiments.map((sentiment: any) => sentiment.value);
  const pos_num = countItemInArray(emotions_only, "POS");
  const negative_num = countItemInArray(emotions_only, "NEG");
  if (pos_num > negative_num) {
    return NextResponse.json({
      sentiment: "POSITIVE",
    });
  } else {
    return NextResponse.json({
      sentiment: "NEGATIVE",
    });
  }
});

export async function GET(request: Request) {
  // Returning the query params & body
  return NextResponse.json({
    message: "working",
  });
}
