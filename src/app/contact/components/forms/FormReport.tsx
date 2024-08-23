import { ErrorMessage, Form, Formik } from "formik";
import React, { useEffect } from "react";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { sendContactUsEmail } from "../../api";
import TextInput from "@/components/__shared/ui/form/TextInput";
import ContactSchema from "./lib/contactSchema";
import { useContactForm } from "./hooks/useContactForm";
import ContactMessageField from "./ContactMessageField";
import ContactFullNameField from "./ContactFullNameField";
import ContactPhoneField from "./ContactPhoneField";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import CustomErrorMessage from "@/components/__shared/ui/states/ErrorMessage";
import capitalizeName from "@/lib/utils/stringManipulation";
import { useContactStore } from "@/store/contact/useContactStore";
import { useRouter } from "next/navigation";
import { generateString } from "@/lib/utils";
import slugify from "@/lib/utils/slugify";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Button } from "@/components/__shared/ui/button";
import { UploadFile } from "../UploadFile";
import { E164Number } from "libphonenumber-js/core";

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
    handleFileRemove,
    validate,
    contactFormSession,
    handleSessionChange,
  } = useContactForm();

  const { phone, setPhone, handleCountryChange, handlePhone } =
    usePhoneInputDisclosure();

  const { reportIssueHref, setReportIssueHref } = useContactStore();
  const router = useRouter();

  useEffect(() => {
    return () => {
      setReportIssueHref("");
    };
  }, [setReportIssueHref]);

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
      validate={(values) =>
        validate(values, contactFormSession.phone as E164Number)
      }
      onSubmit={async (values, { resetForm }) => {
        setLoading(true);
        values.contactType = capitalizeName(activeTab);
        values.fileUrl = file?.name as string;
        const newFilename: string =
          generateString(8) + "-" + slugify(file?.name || "");
        var newFile = new File([file as File], newFilename, {
          type: file?.type,
        });
        let fileUrl = "";
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
                  report_link: values.reportLink,
                },
              ])
              .select()
              .then(({ error }) => {
                setLoading(false);
                if (error) {
                  setLoading(false);
                  toast.error("Something went wrong.");
                } else {
                  resetForm();
                  sessionStorage.removeItem("contactFormSession");
                  setReportIssueHref("");
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
          <div className="flex flex-col gap-10">
            <div className="form-div">
              <ContactFullNameField
                value={values.fullname}
                handleBlur={handleBlur}
                handleChange={handleChange}
                error={errors.fullname}
              />
              <CustomErrorMessage className="mt-5" error={errors.fullname}>
                {/* @ts-ignore */}
                <ErrorMessage name="fullname" error={errors.fullname} />
              </CustomErrorMessage>
            </div>
            <div className="form-div">
              <ContactPhoneField
                phone={values.phone as E164Number}
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
                {/* @ts-ignore */}
                <ErrorMessage name="message" error={errors.message} />
              </CustomErrorMessage>
            </div>
            <UploadFile
              file={file as File}
              handleFileUpload={handleFileUpload}
              handleFileRemove={handleFileRemove}
            />

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
            <Button
              className="max-w-full xs:max-w-fit"
              variant="accent"
              isLoading={loading}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormReport;
