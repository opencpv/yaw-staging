const axios = require('axios');

const makePayment = async (mobileNumber: string, amount: number, title: string, description: string, clientReference: string,) => {

    const response = await axios.post(
        `https://devp-reqsendmoney-230622-api.hubtel.com/request-money/${mobileNumber}`,
        {
            amount,
            title,
            description,
            clientReference,
            callbackUrl: process.env.HUBTEL_CALLBACK_URL,
            cancellationUrl: process.env.HUBTEL_CANCELLATION_URL,
            returnUrl: process.env.HUBTEL_RETURN_URL,
            logo: process.env.LOGO_URL,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Basic ' + Buffer.from(`${process.env.HUBTEL_CLIENT_ID}:${process.env.HUBTEL_CLIENT_SECRET}`).toString('base64')
            }
        }
    );

    console.log(response.data);

}

export default makePayment