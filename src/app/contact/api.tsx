import emailjs from "@emailjs/browser";

export const sendContactUsEmail = (element:  HTMLFormElement | null) => {
  emailjs
    .sendForm(
      "service_ft1rqqu",
      "template_sjcqizd",
      element,
      "qXvfKUtuslfUz23se"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
};

