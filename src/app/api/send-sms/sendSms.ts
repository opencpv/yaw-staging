const axios = require('axios');


const sendSms = async (recipient: string, message: string) => {
    const response = await axios.post(
        `https://devp-sms03726-api.hubtel.com/v1/messages/send`,
        {
            from: "ksadams",
            to: recipient,
            content: message,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Basic ' + Buffer.from(`${process.env.HUBTEL_CLIENT_ID}:${process.env.HUBTEL_CLIENT_SECRET}`).toString('base64')
            }
        }
    );

    return response.data;
}

export default sendSms