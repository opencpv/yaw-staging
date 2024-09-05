"use client";

import FileInput from "@/components/__shared/ui/form/file-input";
import { Input } from "@/components/__shared/ui/form/input";
import { Form, Formik } from "formik";
import PhoneNumberInput from "@/components/__shared/ui/form/phone-number-input";
import { useContactForm } from "@/app/contact/components/forms/hooks/useContactForm";
import Callout from "@/components/__shared/ui/callout/callout";
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
import { Button, LinkButton } from "@/components/__shared/ui/button/Button";
import JoinUsButtons from "../../components/JoinUsButtons";
import { BsInfoCircle } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import slugify from "@/lib/utils/slugify";
import dynamic from "next/dynamic";
import CaJoinUsIconLeft from "./icons/CaJoinUsIconLongLeft";
const Tooltip = dynamic(() =>
  import("@/components/__shared/ui/tooltip/tooltip").then((mod) => mod.Tooltip),
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
      <LinkButton
        variant={"ghost"}
        size="sm"
        color="accent"
        href="/join-us/open-positions"
        className={`absolute top-5 ${
          isScrolling ? "z-[11]" : "z-[9999]"
        } mt-6 hidden justify-start gap-2.5 lg:flex`}
      >
        <CaJoinUsIconLeft />
        Go back
      </LinkButton>
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
              <h2 className="hidden pt-5 text-shade-500 lg:flex">
                {variant == "application" && "Application"}
                {variant == "resume" && "Resume Bank"}
              </h2>

              {variant == "resume" && (
                <div className="lg:pt-5">
                  <Callout content="Unlock your potential and join our dynamic team where innovation meets opportunity!" />
                </div>
              )}

              <div
                className={`flex flex-col gap-6 ${
                  variant == "resume" ? "pt-4" : "pt-8"
                }`}
              >
                <h3 className="text-shade-300">Contact Information</h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Input
                    required
                    onChange={(e) => setFirstname(e.target.value)}
                    label="First Name"
                    placeholder="Enter your first name"
                    name="first_name"
                  />
                  <Input
                    required
                    onChange={(e) => setLastname(e.target.value)}
                    label="Last Name"
                    placeholder="Enter your last name"
                    name="last_name"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Input
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                  />
                  <PhoneNumberInput
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
              <h3 className="text-shade-300">Professional Profile</h3>
              <div className="flex flex-col gap-5">
                <FileInput
                  label="Upload Cover Letter as PDF"
                  handleFile={setCoverLetter}
                />
                <FileInput
                  label="Upload Resume as PDF"
                  required
                  handleFile={setResume}
                />

                <Input
                  name="link"
                  label="Additional Information"
                  placeholder="Paste your link here"
                  onChange={(e) => setLink(e.target.value)}
                  tooltip="Add other relevant information to highlight your skillset (e.g. personal website, work portfolio, etc)"
                />
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
