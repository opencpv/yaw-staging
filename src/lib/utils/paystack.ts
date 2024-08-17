import axios from "axios";
import { headers } from "next/headers";

const paystack = () => {
  const secretkey = process.env.PAYSTACK_API_KEY;

  const initializePayment = (
    form: any,
    myCallback: (error: any, data: any) => void,
  ) => {
    const options = {
      url: "https://api.paystack.co/transaction/initialize",
      headers: {
        authorization: secretkey,
        "content-type": "application/json",
        "cache-control": "no-cache",
      },
      form,
    };
    const callback = (error: any, response: any, body: any) => {
      console.log(body);
      return myCallback(error, body);
    };

    return axios.post(options.url, form, {
      headers: {
        Authorization: secretkey,
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
    });
  };

  //   const verifyPayment = (ref, myCallback) => {
  //     const options = {
  //       url: "https://api.paystack.co/transaction/initialize",
  //       headers: {
  //         authorization: secretkey,
  //         "content-type": "application/json",
  //         "cache-control": "no-cache",
  //       },
  //     };
  //   };
};

export default paystack;
