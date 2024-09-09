import emailjs from "@emailjs/browser";

export const sendContactUsEmail = (element: HTMLFormElement | null) => {
  emailjs
    .sendForm(
      "service_ft1rqqu",
      "template_sjcqizd",
      element as HTMLFormElement,
      "qXvfKUtuslfUz23se",
    )
    .then(
      function (response) {},
      function (error) {},
    );
};
