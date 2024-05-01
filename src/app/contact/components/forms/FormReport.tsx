import { ErrorMessage, Form, Formik } from "formik";
import React, { useEffect } from "react";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { sendContactUsEmail } from "../../api";
import TextInput from "@/components/__shared/ui/form/TextInput";
import Loader from "@/components/__shared/ui/loader/Loader";
import ContactSchema from "./lib/contactSchema";
import { useContactForm } from "./hooks/useContactForm";
import ContactMessageField from "./ContactMessageField";
import ContactUploadField from "./ContactUploadField";
import ContactSubmitButton from "./ContactSubmitButton";
import ContactFullNameField from "./ContactFullNameField";
import ContactPhoneField from "./ContactPhoneField";
import {
  usePhoneInputDisclosure,
  useToastDisclosure,
} from "@/lib/custom-hooks/useCustomDisclosure";
import CustomErrorMessage from "@/components/__shared/ui/states/ErrorMessage";
import capitalizeName from "@/lib/utils/stringManipulation";
import { useContactStore } from "@/store/contact/useContactStore";
import { useRouter } from "next/navigation";
import { generateString } from "@/lib/utils";
import slugify from "@/lib/utils/slugify";
import axios from "axios";
import { toast } from "react-toastify";

type Props = {};

const FormReport = (props: Props) => {
  const {
   
    activeTab,
   
    file,
   
    formRef,
   
    loading,
   
    setLoading,
   
    tableName,
   
    handleFileUpload,
    validate,
 ,
    contactFormSession, handleSessionChange,
  } = useContactForm();

  const { phone, setPhone, handleCountryChange, handlePhone } =
    usePhoneInputDisclosure();

  const { onOpen } = useToastDisclosure();

  const { reportIssueHref, setReportIssueHref } = useContactStore();
  const router = useRouter();

  useEffect(() => {
    return () => {
      setReportIssueHref("");
    };
  }, []);

  return (
    <Formik
      initialValues={{
        contactType: "Report",
        fullname: contactFormSession.fullname,
        email: contactFormSession.email,
        phone: contactFormSession.phone,
        message: contactFormSession.message,
        fileUrl: contactFormSession.fileUrl,
        reportLink: reportIssueHref || contactFormSession.reportLink,
      }}
      validationSchema={ContactSchema}
      validate={(values) => validate(values, contactFormSession.phone)}
      onSubmit={async (values, { resetForm }) => {
        values.contactType = capitalizeName(activeTab);
        values.fileUrl = file?.name as string;
        const newFilename: string =
          generateString(8) + "-" + slugify(file?.name || "");
        var newFile = new File([file as File], newFilename, {
          type: file?.type,
        });
        const fileForm = new FormData();
        fileForm.append("file", newFile);
        const fileUrl = `https://rentright.nyc3.cdn.digitaloceanspaces.com/${newFilename}`;
        const uploadRes = await axios.post(
          `${location.origin}/api/file-upload`,
          fileForm,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
        sendContactUsEmail(formRef.current);
        setLoading(true);
        supabase
          .from(tableName)
          .insert([
            {
              contact_type: values.contactType,
              fullname: values.fullname,
              email: values.email,
              phone: values.phone,
              message: values.message,
              file_url: fileUrl,
              report_link: values.reportLink,
            },
          ])
          .select()
          .then(({ error }) => {
            setLoading(false);
            if (error) {
              console.log(error);
              onOpen("Something went wrong", "error");
            } else {
              toast.success("Your message has been sent");
              resetForm();
              sessionStorage.removeItem("contactFormSession");
              setReportIssueHref("");
              setPhone(undefined);
              onOpen("Successfully sent", "success");
              router.refresh();
            }
          });
      }}
      className=""
    >
      {({ handleBlur, handleChange, values, errors }) => (
        <Form ref={formRef} className="flex-1 pt-8">
          <div className="flex flex-col gap-10">
            <div className="form-div">
              <ContactFullNameField
                value={values.fullname}
                handleBlur={handleBlur}
                handleChange={handleChange}
                error={errors.fullname}
              />
              <CustomErrorMessage className="mt-5" error={errors.fullname}>
                <ErrorMessage name="fullname" error={errors.fullname} />
              </CustomErrorMessage>
            </div>
            <div className="form-div">
              <ContactPhoneField
                phone={values.phone}
                handleBlur={handleBlur}
                handleChange={handleChange}
                handlePhone={handlePhone}
                handleCountryChange={handleCountryChange}
              />
            </div>
            <div>
              <ContactMessageField
                className="w-full min-w-full"
                error={errors.message}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <CustomErrorMessage className="mt-2" error={errors.message}>
                <ErrorMessage name="message" error={errors.message} />
              </CustomErrorMessage>
            </div>
            <ContactUploadField />

            <div className="form-div" title="Paste URL link here (optional)">
              <TextInput
                name="reportLink"
                value={contactFormSession.reportLink || values.reportLink}
                onChange={(e) => {
                  handleChange(e);
                  handleSessionChange("reportLink", e.target.value);
                }}
                placeholder="Paste URL link here (optional)"
                className="p-3 py-7 placeholder:text-neutral-400"
              />
            </div>
          </div>
          {loading ? <Loader /> : <ContactSubmitButton />}
        </Form>
      )}
    </Formik>
  );
};

export default FormReport;
