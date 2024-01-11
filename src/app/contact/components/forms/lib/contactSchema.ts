import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Too Short!")
    .max(255, "Too Long!")
    .required("This field is required"),
  // phone: Yup.string().required("This field is required"),
  message: Yup.string().required("This field is required"),
});

export default ContactSchema;
