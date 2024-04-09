import { styled } from "@stitches/react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import { AiFillInstagram, AiOutlineLink } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Loader from "@/components/__shared/loader/Loader";
import { useAppStore } from "@/store/dashboard/AppStore";
import {
  usePhoneInputDisclosure,
  useToastDisclosure,
} from "@/lib/custom-hooks/useCustomDisclosure";
import InputPhoneNumber from "@/components/__shared/form/InputPhoneNumber";
import { useRouter } from "next/navigation";
import Button from "@/components/__shared/ui/button/Button";
import { createClient } from "@/lib/utils/supabase/auth/client";

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
        <label className="pl-8">{label}:</label>
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
  const [loading, setLoading] = useState(true);
  const { onOpen } = useToastDisclosure();
  const { phone, handlePhone, handleCountryChange } = usePhoneInputDisclosure();
  const router = useRouter();
  const supabase = createClient();

  const firstName = useMemo(() => {
    // try to get firstname from full_name
    if (user?.full_name) {
      return user?.full_name.split(" ")[0];
    }
  }, [user?.full_name]);

  const lastName = useMemo(() => {
    // try to get lastname from full_name
    if (user?.full_name) {
      return user?.full_name.split(" ").slice(1).join(" ");
    }
  }, [user?.full_name]);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

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
    firstName: user?.firstname || firstName,
    lastName: user?.lastname || lastName,
    email: user?.email,
    user,
    country: user?.country,
    twitter: user?.twitter,
    facebook: user?.facebook,
    linkedIn: user?.linkedin,
    whatsapp: user?.whatsapp,
    bio: user?.bio,
    phone: user?.phone,
  };

  return (
    <Root>
      {loading ? (
        <Loader />
      ) : (
        <>
          {user && (
            <>
              <div className="py-8 pt-6">
                <h3 className="text-shade-300">Update Profile Picture</h3>
                <div className="relative mt-5 aspect-video w-60 rounded-xl">
                  {user?.avatar_url !== undefined ? (
                    <Image
                      src={user?.avatar_url as string}
                      placeholder="blur"
                      objectFit="cover"
                      loading="eager"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAHPAzcDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APJAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAACAAAAIqAAAIqAAAAAIqAAAAAAAIqAAAAAAAoAAAAAAACooAAAAAAAAAAKAAAAAAADQAAAAAAACoAoAAAAAAAAAAAAAAAAAAAAAAAAAAACKgAAAACKgAAAACKgAACKgAAAACKgAAAAAACAAAAAAACiKAAAAAAAACgAAAAAAAAAKgCgAAAAA0AAAAAAAAAAqAKIoAAAAAAAAAAAAAAAAAAAAAICoAAAAAAIAAAAAACAAAAgAAAAAIAAAAAAACAAAAAAAAKgCgAAAAAAAKigAAAAAAAAAAAAAAogDYAAAAAAAAAAAAAAAKIAogCiAKIoAICiAKIAogCoAAAAAAAAgAAAAAAAgAAAIqAAAAAAgAAAAAACKgAAAAAAAAAAKIoAAAAAAAAKIAoAAAAAAAAAAAAANgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAIAAAAAIAAAAAAgAAAAAAAIAAAAAAAAAAAAAACiAKAAAAAAAAqAKIAoAAAAAAAAANiAKIAogCiAKIAogCiAKAAAAAAAACAogCiAKIAogAAAAAAAAAIAqAAAACAqAAAAAACAAAAAAAAgAAAAAAAAAAAAAAAAAACoAoigAAAAAAAAAAAAKgCiAKIA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAogCoAAAAAAICoAAAAAAAAgAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAKgCiAKAAAAAAAAAAAAADYAAAAAAAAAAAAAAAAAAAAAAgCiAKIAAAAAAAAACAKIAAAAAAAAACAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACiAKIAogCiAOgAAAAAAAAgCiAKIAqAAAAAAAAAAAAAAIAogAAAAAAAAAAAIAqAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2AAAAAAAAAAAAAAAAAACAogCiAAAAAAAAAAAAICiAAAAAAAAAAAAgCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANgAAAAAAAAAAgKIAogAAAAAAAAAAAAACAogAAAAAAAAAAAIAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYgCiAKIAAAAAAAAAAAAAAAAAAACAKgAAAAAAAAAAgKIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAKIAogCiAKIAogCiANgAAAAAAAAAAAAAAAAAAAAgKgAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICiAKIAqAAAAAAAAAAAAAAAAAAAAADYAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAioAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAogCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANgAAAAAAAAAAAAACAAAAAAAAAAAAAAAAACKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYgCiAKIAogCiAKgAAAAAAAAAAAAAAAAAAAAAAAgqAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoCCgIKAgoCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgqAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgqAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgqAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAACooAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAigIAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAKIoAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAIqAAAAAAAAAAAAAAAAAAAAAAAAAAAKgCgAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICoAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACiAKAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACiAKIAogCgAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAioAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q=="
                      alt="User picture"
                      fill
                      className="rounded-[inherit]"
                    />
                  ) : (
                    <Loader />
                  )}
                </div>
              </div>
              {user?.id == undefined ? (
                <Loader />
              ) : (
                <Formik
                  key={JSON.stringify(user)}
                  initialValues={initialValues}
                  onSubmit={async (values) => {
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
                          whatsapp: values.whatsapp,
                          phone: values.phone,
                          bio: values.bio,
                          full_name: `${values.firstName} ${values.lastName}`,
                        })
                        .eq("id", user.id)
                        .select();

                      if (data) {
                        onOpen("Profile updated successfully", "success");
                        router.refresh();
                      }
                      if (error) throw error;
                    } catch (error) {
                      console.log("Error updating profile:", error);
                      onOpen("Error updating profile", "error");
                    } finally {
                      setSubmitLoading(false);
                    }
                  }}
                  enableReinitialize={true}
                >
                  {({ handleChange, handleBlur, values }) => (
                    <Form className="border-t-2 pt-8">
                      <div className="grid grid-cols-1 gap-x-5 gap-y-16 sm:grid-cols-2 xl:grid-cols-3">
                        {/* My Profile Summary */}
                        <div className="col-span-1">
                          <h3 className="mb-5 text-shade-300">
                            My Profile Summary
                          </h3>
                          <div className="flex flex-col gap-x-5 gap-y-8">
                            <div className="form-div">
                              <label>First Name:</label>
                              <Field
                                name="firstName"
                                placeholder="Jane"
                                className="form-input"
                              />
                              <ErrorMessage name="firstName" />
                            </div>
                            <div className="form-div">
                              <label>Last Name:</label>
                              <Field
                                name="lastName"
                                placeholder="Doe"
                                className="form-input"
                              />
                              <ErrorMessage name="lastName" />
                            </div>
                            <div className="form-div">
                              <label>Email Address:</label>
                              <Field
                                type="email"
                                name="email"
                                placeholder="johndoe@gmail.com"
                                disabled
                                className="form-input"
                              />
                              <ErrorMessage name="email" />
                            </div>
                            {/* <div className="form-div">
                              <label>Country:</label>
                              <Field
                                as="select"
                                id="country"
                                name="country"
                                className="form-input bg-white"
                              >
                                {countries.map((country: any, index) => (
                                  <option
                                    key={index}
                                    value={country.name.common}
                                    className="py-5"
                                  >
                                    {country.name.common}
                                  </option>
                                ))}
                              </Field>

                              <ErrorMessage
                                name="country"
                                component="div"
                                className="error"
                              />
                            </div> */}
                            <div className="form-div">
                              <label>WhatsApp:</label>
                              <InputPhoneNumber
                                name="phone"
                                value={values.phone as string}
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
                              icon={<FaTwitter size={24} color="black" />}
                              name={"twitter"}
                              className={"form-input"}
                              label={"Twitter"}
                              type={"text"}
                              placeholder="https://twitter.com/abcd"
                            />
                            <IconField
                              icon={<FaLinkedin size={24} color="black" />}
                              name={"linkedIn"}
                              className={"form-input"}
                              label={"LinkedIn"}
                              type={"text"}
                              placeholder="https://linkedin.com/abcd"
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
                              icon={<AiFillInstagram size={26} color="black" />}
                              name={"whatsapp"}
                              className={"form-input"}
                              label={"Instagram"}
                              type={"text"}
                              placeholder="https://instagram.com/username"
                            />
                          </div>
                        </div>
                        {/* Bio */}
                        <div className="col-span-full md:col-span-1">
                          <h3 className="mb-5 text-shade-300">Bio</h3>
                          <div className="form-div">
                            <label className="hidden xl:invisible xl:block">
                              Bio
                            </label>
                            <Field
                              as="textarea"
                              id="bio"
                              name="bio"
                              placeholder="Share a little bit about yourself"
                              className="form-textarea text-[#737373]"
                              rows="10"
                              cols="50"
                            />
                          </div>
                          <>
                            {submitLoading ? (
                              <div className="mt-8 flex justify-center">
                                <div className="relative py-4">
                                  <Loader />
                                </div>
                              </div>
                            ) : (
                              <Button
                                color="accent"
                                type="submit"
                                className="mt-8"
                              >
                                Update Profile
                              </Button>
                            )}
                          </>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              )}
            </>
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
