const axios = require('axios');

const verifyOtp = async (requestId: string, code: string, prefix: string) => {
    const response = await axios.post(
        `https://api-devp-otp-2704.hubtel.com/otp/verify`,
        {
            requestId,
            prefix,
            code
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Basic ' + Buffer.from(`${process.env.HUBTEL_CLIENT_ID}:${process.env.HUBTEL_CLIENT_SECRET}`).toString('base64')
            }
        }
    );


}

export default verifyOtp