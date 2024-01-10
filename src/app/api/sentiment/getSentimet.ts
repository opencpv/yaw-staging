import OneAI from "oneai";

const getSentiment =  async (text:string)=>{

    const one_ai = new OneAI(process.env.ONE_AI_API_KEY, {
        multilingual: {
            enabled: true
        }});

    const conversation =text;

    const pipeline = new one_ai.Pipeline(
        one_ai.skills.sentiments()
    );

    const pipeline_response = await pipeline.run(conversation)
    console.log(pipeline_response)
    return pipeline_response

}
export  default  getSentiment