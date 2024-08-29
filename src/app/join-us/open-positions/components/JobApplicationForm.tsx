"use client";

import CustomFileInput from "@/components/__shared/ui/form/CustomFileInput";
import TextFieldInput from "@/components/__shared/ui/form/TextFieldInput";
import { Form, Formik } from "formik";
import InputPhoneNumber from "@/components/__shared/ui/form/InputPhoneNumber";
import { useContactForm } from "@/app/contact/components/forms/hooks/useContactForm";
import CallOut from "@/components/__shared/ui/callout";
import { useJoinUsPageStore } from "../../components/useJoinUsPageStore";
import { useState } from "react";
import {
  generateString,
  isPdf,
  isValidMobileNumber,
  updateFilename,
} from "@/lib/utils";
import { toast } from "react-hot-toast";
import axios from "axios";
import routes from "@/lib/utils/route";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/__shared/ui/button";
import JoinUsButtons from "../../components/JoinUsButtons";
import { BsInfoCircle } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import slugify from "@/lib/utils/slugify";
import dynamic from "next/dynamic";
const Tooltip = dynamic(() =>
  import("@/components/__shared/ui/tooltip").then((mod) => mod.Tooltip),
);

type Props = {
  variant: "application" | "resume";
  position?: string;
};

type errorProp = {
  firstname?: string;
  lastname?: string;
  link?: string;
  coverLetter?: string;
  resume?: string;
  email?: string;
  phone?: string;
};
function JobApplicationForm({ variant, position }: Props) {
  const searchParams = useSearchParams();
  const job = searchParams?.get("job");

  const { handleCountryChange, handlePhone, phone, phoneInputPlaceholder } =
    useContactForm();
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [coverLetter, setCoverLetter] = useState<File | null>(null);
  const [resume, setResume] = useState<File | null>(null);
  const [link, setLink] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { isScrolling } = useJoinUsPageStore();
  const router = useRouter();
  const validate = () => {
    const errors: errorProp = {};
    if (!firstname || firstname.length < 1) {
      errors.firstname = "Please enter your firstname";
    } else if (!lastname || lastname.length < 1) {
      errors.lastname = "Please enter your lastname ";
    } else if (!email || email.length < 1) {
      errors.email = "Please enter your email ";
    } else if (isValidMobileNumber(phone!.toString()) || phone!.length < 1) {
      errors.phone = "Enter 10 digit mobile number";
    } else if (coverLetter && !isPdf(coverLetter)) {
      errors.coverLetter = "Upload PDF cover letter";
    } else if (!resume) {
      errors.resume = "Upload a PDF  resume ";
    } else if (!isPdf(resume)) {
      errors.coverLetter = "Upload PDF resume";
    }
    return errors;
  };

  const addApplicant = (form: FormData) => {
    axios
      .post(routes.applicant, form, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        setLoading(false);
        emailjs
          .send(
            "service_ft1rqqu",
            "template_pw9kxnn",
            {
              title: "New job application",
              subtitle: "Job Application",
              message: `Applicant name: ${firstname} ${lastname} `,
            },
            "qXvfKUtuslfUz23se",
          )
          .then(() => {
            router.push("/join-us/open-positions/submitted");
          });
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };
  return (
    <div className="flex flex-col gap-4 px-5 pt-5 lg:px-20">
      <JoinUsButtons
        href="/join-us/open-positions"
        variant="text-yellow-accent"
        content="Go back"
        icon
        iconType="arrow-left"
        reverseIcon
        className={`absolute top-5 ${
          isScrolling ? "z-[11]" : "z-[9999]"
        } mt-6 hidden justify-start gap-2.5 lg:flex`}
      />
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          coverLetter: null,
          resume: null,
          phone: "",
          email: "",
        }}
        validate={(values) => {
          const errors: errorProp = {};
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {}}
      >
        {({ handleBlur, handleChange, values, errors }) => (
          <Form>
            <div className="flex flex-col gap-4 pt-8 lg:pt-16">
              <p className="hidden pt-5 text-[1.9375rem] font-semibold text-[#333] lg:flex">
                {variant == "application" && "Application"}
                {variant == "resume" && "Resume Bank"}
              </p>

              {variant == "resume" && (
                <div className="lg:pt-5">
                  <CallOut content="Unlock your potential and join our dynamic team where innovation meets opportunity!" />
                </div>
              )}

              <div
                className={`flex flex-col gap-6 ${
                  variant == "resume" ? "pt-4" : "pt-8"
                }`}
              >
                <p className="text-[1.25rem] font-[600] text-shade-300">
                  Contact Information{" "}
                </p>
                <div className="flex flex-col gap-5 lg:flex-row">
                  <TextFieldInput
                    required
                    onChange={(e) => setFirstname(e.target.value)}
                    label="First Name"
                    placeholder="Enter your first name"
                    type="text"
                    name="first_name"
                  />
                  <TextFieldInput
                    required
                    onChange={(e) => setLastname(e.target.value)}
                    label="Last Name"
                    placeholder="Enter your last name"
                    type="text"
                    name="last_name"
                  />
                </div>
                <div className="flex flex-col gap-5 lg:flex-row">
                  <TextFieldInput
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                    placeholder="Enter your email"
                    type="text"
                    name="email"
                  />
                  <InputPhoneNumber
                    required
                    label="Phone"
                    id="phone"
                    name="phone"
                    value={phone}
                    placeholder={"Phone number"}
                    onChange={handlePhone}
                    onInput={handleChange}
                    onCountryChange={handleCountryChange}
                    showError={false}
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-6">
              <p className="text-[1.25rem] font-[600] text-shade-300">
                Professional Profile
              </p>
              <div className="flex flex-col gap-5">
                <CustomFileInput
                  label="Upload Cover Letter as PDF"
                  variant="green"
                  handleFile={setCoverLetter}
                />
                <CustomFileInput
                  label="Upload Resume as PDF"
                  required
                  variant="green"
                  handleFile={setResume}
                />
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2.5">
                    <p className="text-[#6A6968]">Additional Information</p>
                    <Tooltip content="Add other relevant information to highlight your skillset (e.g. personal website, work portfolio, etc)">
                      <BsInfoCircle className="text-accent" size={20} />
                    </Tooltip>
                  </div>
                  <input
                    placeholder="Paste your link here"
                    type="text"
                    onChange={(e) => setLink(e.target.value)}
                    className="form-field-border h-[52px] w-full rounded-[4px] px-4 focus:outline-accent-50"
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-center pb-10 lg:pb-16">
              <Button
                variant="accent"
                isLoading={loading}
                size={"full"}
                type="submit"
                onClick={() => {
                  const errors: errorProp = validate();
                  const objKeys = Object.keys(errors);
                  if (objKeys.length > 0) {
                    objKeys.forEach((element: any) => {
                      toast.error(`${errors[element as keyof typeof errors]}`);
                    });
                  } else {
                    setLoading(true);
                    const formData = new FormData();
                    formData.append("first_name", firstname);
                    formData.append("last_name", lastname);
                    formData.append("email", email);
                    formData.append("phone", phone!.toString());
                    formData.append("link", link);
                    formData.append(
                      "job",
                      job ? (job as string) : "resume bank",
                    );
                    const newFilename: string =
                      generateString(4) + "-" + slugify(resume?.name || "");
                    var renamedResumeFile = new File(
                      [resume as File],
                      newFilename,
                      {
                        type: resume?.type,
                      },
                    );
                    const fileUploadPromise: Promise<any>[] = [];
                    const fileFormData = new FormData();
                    fileFormData.append("file", renamedResumeFile as File);
                    fileUploadPromise.push(
                      axios
                        .post(
                          `${location.origin}/api/file-upload`,
                          fileFormData,
                          {
                            headers: {
                              "Content-Type": "multipart/form-data",
                            },
                          },
                        )
                        .then(() => {
                          formData.append(
                            "resume_url",
                            `${process.env.NEXT_PUBLIC_DO_CDN_URL}${newFilename}`,
                          );
                        })
                        .catch(() => {
                          toast.error(`resume  upload unavailable`);
                        }),
                    );
                    if (coverLetter) {
                      const coverLetterFormData = new FormData();
                      const coverLetterNamePrepend = generateString(4);
                      const newCoverLetterFilename = `${coverLetterNamePrepend}-${
                        coverLetter!.name
                      }`;
                      coverLetterFormData.append(
                        "file",
                        updateFilename(
                          coverLetter as File,
                          newCoverLetterFilename,
                        ),
                      );
                      fileUploadPromise.push(
                        axios
                          .post(
                            `${location.origin}/api/file-upload`,
                            coverLetterFormData,
                            {
                              headers: {
                                "Content-Type": "multipart/form-data",
                              },
                            },
                          )
                          .then(() => {
                            formData.append(
                              "cover_letter_url",
                              `${process.env.NEXT_PUBLIC_DO_CDN_URL}${newCoverLetterFilename}`,
                            );
                          })
                          .catch(() => {
                            toast.error(`cover letter upload unavailable`, {});
                          }),
                      );
                    }
                    Promise.all(fileUploadPromise).then(() => {
                      // setLoading(false);
                      addApplicant(formData);
                    });
                  }
                }}
              >
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default JobApplicationForm;
