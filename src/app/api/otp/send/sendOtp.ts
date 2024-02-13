const axios = require('axios');

const sendOtp = async (phone: string, code: string) => {
    const response = await axios.post(
        'https://api-devp-otp-2704.hubtel.com/otp/send',
        {
            senderId: 'ksadams',
            phoneNumber: phone,
            countryCode: code
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

export default sendOtp