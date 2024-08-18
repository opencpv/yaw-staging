const axios = require("axios");

const resend = async (requestId: string) => {
  const response = await axios.post(
    `https://api-devp-otp-2704.hubtel.com/otp/resend`,
    { requestId },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          Buffer.from(
            `${process.env.HUBTEL_CLIENT_ID}:${process.env.HUBTEL_CLIENT_SECRET}`,
          ).toString("base64"),
      },
    },
  );
};

export default resend;
