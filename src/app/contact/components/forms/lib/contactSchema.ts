import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  fullname: Yup.string().required("Full Name is required"),
  message: Yup.string().required("Message is required"),
  preferredContactMethod: Yup.string(),
  phone: Yup.string().when("preferredContactMethod", {
    is: "WhatsApp",
    then: (schema) => schema.required("WhatsApp Number is required"),
  }),
  email: Yup.string().when("preferredContactMethod", {
    is: "Email",
    then: (schema) => schema.email().required("Email must be valid"),
  }),
});

export default ContactSchema;
