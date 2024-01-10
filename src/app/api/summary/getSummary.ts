import OneAI from "oneai";

const getSummary =  async (text:string)=>{

    const one_ai = new OneAI(process.env.ONE_AI_API_KEY, {
        multilingual: {
            enabled: true
        }});

    const conversation =text;

    const pipeline = new one_ai.Pipeline(
        one_ai.skills.summarize(),
    );

    const pipeline_response = await pipeline.run(conversation)
    console.log(pipeline_response)
    return pipeline_response

}
export  default  getSummary