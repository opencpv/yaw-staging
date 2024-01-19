import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  fullname: Yup.string().required("This field is required"),
  message: Yup.string().required("This field is required"),
});

export default ContactSchema;
