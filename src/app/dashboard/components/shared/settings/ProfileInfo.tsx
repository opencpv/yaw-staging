import { styled } from "@stitches/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AiFillInstagram, AiOutlineLink } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "@/components/__shared/ui/loader";
import { useAppStore } from "@/store/dashboard/AppStore";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import InputPhoneNumber from "@/components/__shared/ui/form/InputPhoneNumber";
import { E164Number } from "libphonenumber-js/core";
import { useRouter } from "next/navigation";
import { Button } from "@/components/__shared/ui/button";
import { createClient } from "@/lib/utils/supabase/auth/client";
import { RiPhoneFill, RiTwitterXFill, RiWhatsappFill } from "react-icons/ri";
import { CheckboxNoFormik as Checkbox } from "@/components/__shared/ui/form/checkbox";
import ProfilePicture from "./ProfilePicture";
import CountryInput from "@/components/__shared/ui/form/CountryInput";
import toast from "react-hot-toast";

interface Props {
  icon: any;
  label: string;
  type: any;
  name: string;
  className: string;
  placeholder: string;
  defaultValue?: string;
}

const IconField = ({
  icon,
  label,
  type,
  name,
  className,
  placeholder,
  defaultValue,
}: Props) => {
  return (
    <div className="form-div relative">
      <div className="relative flex items-center">
        <div className="absolute left-0 top-0">{icon}</div>
        <label className="pl-8">{label}</label>
      </div>
      <AiOutlineLink className="link-icon absolute" size={16} color="#737373" />
      <Field
        type={type}
        name={name}
        className={`form-input ${className}`}
        style={{ paddingInline: "2.5rem" }}
        placeholder={placeholder}
      />

      <ErrorMessage name={name} />
    </div>
  );
};

const ProfileInfo = () => {
  const [countries, setCountries] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false);
  const user = useAppStore((state) => state.user);
  const { phone, handlePhone, handleCountryChange } = usePhoneInputDisclosure();
  const {
    phone: whatsApp,
    handlePhone: handleWhatsApp,
    handleCountryChange: handleWhatsAppCountryChange,
  } = usePhoneInputDisclosure();
  const [sameAsPhone, setSameAsPhone] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const initialValues = {
    firstName: user?.firstname,
    lastName: user?.lastname,
    email: user?.email,
    user,
    country: user?.country || "Ghana",
    twitter: user?.twitter,
    facebook: user?.facebook,
    linkedIn: user?.linkedin,
    whatsapp: user?.whatsapp,
    bio: user?.bio,
    phone: user?.phone,
  };

  return (
    <Root>
      {user && (
        <>
          <div className="py-8 pt-6">
            <h3 className="text-shade-300">Update Profile Picture</h3>
            <ProfilePicture />
          </div>
          {user?.id == undefined ? (
            <Loader />
          ) : (
            <Formik
              key={JSON.stringify(user)}
              initialValues={initialValues}
              onSubmit={async (values) => {
                const whatsApp = sameAsPhone ? values.phone : values.whatsapp;
                setSubmitLoading(true);
                try {
                  const { data, error } = await supabase
                    .from("profiles")
                    .update({
                      firstname: values.firstName,
                      lastname: values.lastName,
                      country: values.country,
                      twitter: values.twitter,
                      facebook: values.facebook,
                      linkedin: values.linkedIn,
                      whatsapp: whatsApp,
                      phone: values.phone,
                      bio: values.bio,
                      full_name: `${values.firstName} ${values.lastName}`,
                    })
                    .eq("id", user.id)
                    .select();

                  if (data) {
                    toast.success("Profile updated successfully");
                    router.refresh();
                  }
                  if (error) throw error;
                } catch (error) {
                  toast.error("Error updating profile");
                } finally {
                  setSubmitLoading(false);
                }
              }}
              enableReinitialize={true}
            >
              {({ handleChange, handleBlur, values, isSubmitting }) => (
                <Form className="border-t-2 pt-8">
                  <div className="grid grid-cols-1 gap-x-20 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
                    {/* My Profile Summary */}
                    <div className="col-span-1">
                      <h3 className="mb-5 text-shade-300">
                        My Profile Summary
                      </h3>
                      <div className="flex flex-col gap-x-5 gap-y-8">
                        <div className="form-div">
                          <label>First Name</label>
                          <Field
                            name="firstName"
                            placeholder="Jane"
                            className="form-input"
                          />
                          <ErrorMessage name="firstName" />
                        </div>
                        <div className="form-div">
                          <label>Last Name</label>
                          <Field
                            name="lastName"
                            placeholder="Doe"
                            className="form-input"
                          />
                          <ErrorMessage name="lastName" />
                        </div>
                        <div className="form-div">
                          <label>Email Address</label>
                          <Field
                            type="email"
                            name="email"
                            placeholder="johndoe@gmail.com"
                            disabled
                            className="form-input"
                          />
                          <ErrorMessage name="email" />
                        </div>
                        <div className="form-div">
                          <CountryInput
                            name="country"
                            value={values.country}
                            label="I Live In"
                          />
                          <ErrorMessage
                            name="country"
                            component="div"
                            className="error"
                          />
                        </div>
                        <div className="form-div">
                          <div className="relative flex items-center">
                            <RiPhoneFill
                              className="absolute left-0 top-0"
                              size={24}
                              color="black"
                            />
                            <label className="pl-8">Phone</label>
                          </div>
                          <InputPhoneNumber
                            name="phone"
                            value={values.phone as E164Number}
                            onChange={(val) => {
                              handlePhone(val);
                              handleChange({
                                target: { name: "phone", value: val },
                              });
                            }}
                            onBlur={handleBlur}
                            onCountryChange={handleCountryChange}
                          />
                        </div>
                      </div>
                    </div>
                    {/* My Social Media Accounts */}
                    <div className="col-span-1">
                      <h3 className="mb-5 text-shade-300">
                        My Social Media Accounts
                      </h3>
                      <div className="flex flex-col gap-x-5 gap-y-8">
                        <IconField
                          icon={<AiFillInstagram size={26} color="black" />}
                          name={"instagram"}
                          className={"form-input"}
                          label={"Instagram"}
                          type={"text"}
                          placeholder="https://instagram.com/username"
                        />

                        <IconField
                          icon={<RiTwitterXFill size={24} color="black" />}
                          name={"twitter"}
                          className={"form-input"}
                          label={"X"}
                          type={"text"}
                          placeholder="https://twitter.com/abcd"
                        />
                        <IconField
                          icon={<FaFacebook size={24} color="black" />}
                          name={"facebook"}
                          className={"form-input"}
                          label={"Facebook"}
                          type={"text"}
                          placeholder="https://facebook.com/abcd"
                        />
                        <IconField
                          icon={<FaLinkedin size={24} color="black" />}
                          name={"linkedIn"}
                          className={"form-input"}
                          label={"LinkedIn"}
                          type={"text"}
                          placeholder="https://linkedin.com/abcd"
                        />

                        <div className="form-div">
                          <div className="flex items-center justify-between gap-5">
                            <div className="relative flex items-center">
                              <RiWhatsappFill
                                className="absolute left-0 top-0"
                                size={24}
                                color="black"
                              />
                              <label className="pl-8">Whatsapp</label>
                            </div>
                            <Checkbox
                              label="Same as phone"
                              onCheckedChange={(checked) =>
                                setSameAsPhone(checked as boolean)
                              }
                            />
                          </div>
                          {sameAsPhone ? (
                            <InputPhoneNumber
                              name="phone"
                              value={values.phone as E164Number}
                              onChange={(val) => {
                                handlePhone(val);
                                handleChange({
                                  target: { name: "phone", value: val },
                                });
                              }}
                              onBlur={handleBlur}
                              onCountryChange={handleCountryChange}
                            />
                          ) : (
                            <InputPhoneNumber
                              name="whatsapp"
                              value={values.whatsapp as E164Number}
                              onChange={(val) => {
                                handleWhatsApp(val);
                                handleChange({
                                  target: { name: "whatsapp", value: val },
                                });
                              }}
                              onBlur={handleBlur}
                              onCountryChange={handleWhatsAppCountryChange}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Bio */}
                    <div className="col-span-full md:col-span-1">
                      <h3 className="invisible mb-5 text-shade-300 max-2xl:hidden">
                        Bio
                      </h3>
                      <div className="form-div">
                        <label>About me</label>
                        <Field
                          as="textarea"
                          id="bio"
                          name="bio"
                          placeholder="Share a little about yourself. Where do you live? What are your hobbies? What is important to you? What do you do? Visitors to your profile page will be able to read this information."
                          className="form-textarea text-[#737373]"
                          rows="10"
                          cols="50"
                        />
                      </div>
                      <>
                        <Button
                          variant="accent"
                          type="submit"
                          className="mt-8"
                          isLoading={isSubmitting}
                        >
                          Update Profile
                        </Button>
                      </>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </>
      )}
    </Root>
  );
};

const Root = styled("div", {
  " .form-div": {
    display: "flex",
    flexDirection: "column",
    gap: "0.875rem",
    color: "#6A6968",
  },

  ".form-input option": {
    backgroundColor: "white",
  },
  ".form-input option:hover": {
    backgroundColor: "#DDB771",
  },
  "& .link-icon": {
    top: "75%",
    transform: "translateY(-75%)",
    left: "1rem",
  },
});

export default ProfileInfo;
