import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import { E164Number } from "libphonenumber-js/core";
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
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import CustomErrorMessage from "@/components/__shared/ui/states/ErrorMessage";
import capitalizeName from "@/lib/utils/stringManipulation";
import { useRouter } from "next/navigation";
import { generateString } from "@/lib/utils";
import slugify from "@/lib/utils/slugify";
import axios from "axios";
import { toast } from "react-hot-toast";
import Button from "@/components/__shared/ui/button/Button";
import { UploadFile } from "../UploadFile";

type Props = {};

const FormAdvertise = (props: Props) => {
  const {
    activeTab,
    file,
    formRef,
    loading,
    setLoading,
    tableName,
    handleFileUpload,
    handleFileRemove,
    validate,
    contactFormSession,
    handleSessionChange,
  } = useContactForm();

  const { phone, setPhone, handleCountryChange, handlePhone } =
    usePhoneInputDisclosure();

  const router = useRouter();

  return (
    <Formik
      initialValues={{
        contactType: "",
        companyName: contactFormSession.companyName,
        fullname: contactFormSession.fullname,
        email: contactFormSession.email,
        message: contactFormSession.message,
        phone: contactFormSession.phone,
        fileUrl: contactFormSession.fileUrl,
      }}
      validationSchema={ContactSchema}
      validate={(values) => validate(values, contactFormSession.phone)}
      onSubmit={async (values, { resetForm }) => {
        setLoading(true);

        values.contactType = capitalizeName(activeTab);
        const newFilename: string =
          generateString(8) + "-" + slugify(file?.name || "");
        var newFile = new File([file as File], newFilename, {
          type: file?.type,
        });
        let fileUrl = "";
        setLoading(true);
        const fileForm = new FormData();
        fileForm.append("file", newFile);
        const fileUploadPromise: Promise<any>[] = [];
        fileUploadPromise.push(
          axios
            .post(`${location.origin}/api/file-upload`, fileForm, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then(() => {
              fileUrl = `${process.env.NEXT_PUBLIC_DO_CDN_URL}${newFilename}`;
            })
            .catch(() => {
              toast.error(`Image upload unavailable.`);
            }),
        );
        Promise.all([...fileUploadPromise])
          .then(() => {
            sendContactUsEmail(formRef.current);
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
                  company_name: values.companyName,
                },
              ])
              .select()
              .then(({ data, error }) => {
                if (error) {
                  toast.error("Something went wrong.");
                  setLoading(false);
                } else {
                  resetForm();
                  sessionStorage.removeItem("contactFormSession");
                  setPhone(undefined);
                  toast.success("Successfully submitted.");
                  router.refresh();
                  setLoading(false);
                }
              });
          })
          .catch(() => {
            toast.error("Something went wrong.");
          });
      }}
      className=""
    >
      {({ handleBlur, handleChange, values, errors }) => (
        <Form ref={formRef} className="flex-1 pt-8">
          <div className="gap-5 ">
            <div className={``}>
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
                  <TextInput
                    name="companyName"
                    value={values.companyName}
                    label="Company Name"
                    onChange={(e) => {
                      handleChange(e);
                      handleSessionChange("companyName", e.target.value);
                    }}
                    onBlur={handleBlur}
                    className="p-3 py-7"
                  />
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
                    value={values.message}
                    className="w-full min-w-full"
                    error={errors.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <CustomErrorMessage className="mt-2" error={errors.message}>
                    <ErrorMessage name="message" error={errors.message} />
                  </CustomErrorMessage>
                </div>
                <UploadFile
                  file={file as File}
                  handleFileUpload={handleFileUpload}
                  handleFileRemove={handleFileRemove}
                />
                <Button
                  className="max-w-full xs:max-w-fit"
                  color="accent"
                  isLoading={loading}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
          {/* {loading ? <Loader /> : <Button color="accent">Submit</Button>} */}
        </Form>
      )}
    </Formik>
  );
};

export default FormAdvertise;
