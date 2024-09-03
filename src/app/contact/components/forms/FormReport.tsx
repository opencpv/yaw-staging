import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { sendContactUsEmail } from "../../api";
import { Input } from "@/components/__shared/ui/form/input";
import ContactSchema from "./lib/contactSchema";
import { useContactForm } from "./hooks/useContactForm";
import ContactMessageField from "./ContactMessageField";
import ContactFullNameField from "./ContactFullNameField";
import ContactPhoneField from "./ContactPhoneField";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import capitalizeName from "@/lib/utils/stringManipulation";
import { tag, useContactStore } from "@/store/contact/useContactStore";
import { generateString } from "@/lib/utils";
import slugify from "@/lib/utils/slugify";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Button } from "@/components/__shared/ui/button/Button";
import { UploadFile } from "../UploadFile";

const FormReport = () => {
  const {
    file,
    formRef,
    loading,
    setLoading,
    tableName,
    handleFileUpload,
    handleFileRemove,
    contactFormSession,
    handleSessionChange,
  } = useContactForm();

  const { handleCountryChange } = usePhoneInputDisclosure();

  const { reportIssueHref, setReportIssueHref } = useContactStore();

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
      onSubmit={async (values, { resetForm }) => {
        if (!tag) return;
        setLoading(true);
        values.contactType = capitalizeName(tag);
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
                  toast.success("Successfully submitted.");
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
      <Form ref={formRef} className="w-full pt-8">
        <div className="flex flex-col gap-10">
          <div className="form-div">
            <ContactFullNameField />
          </div>
          <div className="form-div">
            <ContactPhoneField handleCountryChange={handleCountryChange} />
          </div>
          <div>
            <ContactMessageField />
          </div>
          <UploadFile
            file={file as File}
            handleFileUpload={handleFileUpload}
            handleFileRemove={handleFileRemove}
          />

          <div className="form-div" title="Paste URL link here (optional)">
            <Input
              name="reportLink"
              onChange={(e) => {
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
    </Formik>
  );
};

export default FormReport;
