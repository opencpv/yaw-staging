import {NextResponse} from "next/server";
import getSummary from "@/app/api/summary/getSummary";
import withErrorHandler from "@/app/api/withErrorHandler";
import {NextApiRequest} from "next";

interface PostProps {
    text:string
}
export const POST = withErrorHandler(async (request: Request) => {

    // const requestBody = await request.json(); // To read request data

    const res :PostProps= await request.json() // res now contains body
    const text = res.text

    if (text.split(" ").length<80){
        return NextResponse.json({
            summary:text,
            message:"text less than 100 words"
        });
    }
    else {
        const summary_res:any = await getSummary("An exhilarating cinematic journey, 'Inception' captivates with its mind-bending plot and stunning visuals. Christopher Nolan's masterful direction combines with a stellar ensemble cast, led by Leonardo DiCaprio, delivering a thrilling exploration of dreams within dreams. The intricate narrative and exceptional special effects make it a groundbreaking and unforgettable experience")
        return NextResponse.json({
            summary:summary_res.summary.text,
            message:"text summarized"
        });
    }






});


export async function GET(request: Request) {



    // Returning the query params & body
    return NextResponse.json({
        message:"working"
    });

}