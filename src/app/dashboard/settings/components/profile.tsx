"use client";

import { styled } from "@stitches/react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AiOutlineLink } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import PhoneNumberInput from "@/components/__shared/PhoneInput";
import supabase from "@/lib/utils/supabaseClient";
import Loader from "@/components/__shared/loader/Loader";

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
      <div className="flex gap-2 items-center">
        {icon}
        <label className="text-[#737373]">{label}:</label>
      </div>
      <AiOutlineLink className="link-icon absolute" size="16" color="#737373" />

      <Field
        type={type}
        name={name}
        className={`${className}`}
        style={{ paddingInline: "2.5rem" }}
        placeholder={placeholder}
      />

      <ErrorMessage name={name} />
    </div>
  );
};

const Profile = ({ profileData }: { profileData: any }) => {
  const [countries, setCountries] = useState([]);
  const [data, setData] = useState<any>({});
  const [phone, setphone] = useState("");
  const [loading, setloading] = useState(false);
  const handlePhone = (str: string) => {
    setphone(str);
  };
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    setData(profileData);
    console.log(profileData);
  }, [profileData]);

  return (
    <Root>
      <div className="flex gap-5 mt-3">
        <Navigation type={"active"}>Profile</Navigation>
        <Navigation>Blocking</Navigation>
        <Navigation>Account Setting</Navigation>
      </div>
      <div className="py-10 pt-6">
        <p>{data?.fullname}</p>
        <p>Your Profile Picture</p>
        <div className="max-w-[227px] max-h-[164px] w-full relative aspect-[227/164] rounded-[18px] mt-5 border-">
          <Image
            src={data.avatar_url}
            placeholder="blur"
            loading="eager"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAHPAzcDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APJAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAACAAAAIqAAAIqAAAAAIqAAAAAAAIqAAAAAAAoAAAAAAACooAAAAAAAAAAKAAAAAAADQAAAAAAACoAoAAAAAAAAAAAAAAAAAAAAAAAAAAACKgAAAACKgAAAACKgAACKgAAAACKgAAAAAACAAAAAAACiKAAAAAAAACgAAAAAAAAAKgCgAAAAA0AAAAAAAAAAqAKIoAAAAAAAAAAAAAAAAAAAAAICoAAAAAAIAAAAAACAAAAgAAAAAIAAAAAAACAAAAAAAAKgCgAAAAAAAKigAAAAAAAAAAAAAAogDYAAAAAAAAAAAAAAAKIAogCiAKIoAICiAKIAogCoAAAAAAAAgAAAAAAAgAAAIqAAAAAAgAAAAAACKgAAAAAAAAAAKIoAAAAAAAAKIAoAAAAAAAAAAAAANgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAIAAAAAIAAAAAAgAAAAAAAIAAAAAAAAAAAAAACiAKAAAAAAAAqAKIAoAAAAAAAAANiAKIAogCiAKIAogCiAKAAAAAAAACAogCiAKIAogAAAAAAAAAIAqAAAACAqAAAAAACAAAAAAAAgAAAAAAAAAAAAAAAAAACoAoigAAAAAAAAAAAAKgCiAKIA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAogCoAAAAAAICoAAAAAAAAgAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAKgCiAKAAAAAAAAAAAAADYAAAAAAAAAAAAAAAAAAAAAAgCiAKIAAAAAAAAACAKIAAAAAAAAACAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACiAKIAogCiAOgAAAAAAAAgCiAKIAqAAAAAAAAAAAAAAIAogAAAAAAAAAAAIAqAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2AAAAAAAAAAAAAAAAAACAogCiAAAAAAAAAAAAICiAAAAAAAAAAAAgCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANgAAAAAAAAAAgKIAogAAAAAAAAAAAAACAogAAAAAAAAAAAIAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYgCiAKIAAAAAAAAAAAAAAAAAAACAKgAAAAAAAAAAgKIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAKIAogCiAKIAogCiANgAAAAAAAAAAAAAAAAAAAAgKgAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICiAKIAqAAAAAAAAAAAAAAAAAAAAADYAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAioAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAogCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANgAAAAAAAAAAAAACAAAAAAAAAAAAAAAAACKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYgCiAKIAogCiAKgAAAAAAAAAAAAAAAAAAAAAAAgqAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoCCgIKAgoCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgqAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgqAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgqAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAACooAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAigIAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAKIoAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAIqAAAAAAAAAAAAAAAAAAAAAAAAAAAKgCgAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICoAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACiAKAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACiAKIAogCgAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAioAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q=="
            alt="User picture"
            fill
          />
        </div>
      </div>
      <Formik
        key={JSON.stringify(profileData)}
        initialValues={{
          firstName: data.firstname,
          lastName: data.lastname,
          email: data.email,
          country: data.country,
          twitter: data.twitter_url,
          facebook: data.facebook_url,
          linkedIn: data.linkedin_url,
          whatsapp: data.whatsapp,
          bio: data.bio,
          number: data.phone,
        }}
        onSubmit={(values) => {
          const dto = values;
          delete values.number;
          dto.number = phone;
          setloading(true);
          supabase
            .from("profiles")
            .update({
              firstname: values.firstName,
              lastname: values.lastName,
              country: values.country,
              twitter_url: values.twitter,
              facebook_url: values.facebook,
              linkedin_url: values.linkedIn,
              whatsapp: values.whatsapp,
              phone: values.number,
              bio: values.bio,
            })
            .eq("full_name", profileData.full_name)
            .select()
            .then(({ data, error }) => {
              setloading(false);
              console.log(data);
            });
          console.log(dto);
        }}
        enableReinitialize={true}
      >
        <Form className="border-t-2 border-[#E0E4EC] pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            <div className="col-span-1">
              <p className="mb-5 font-semibold">My Profile Summary</p>
              <div className="flex flex-col gap-5">
                <div className="form-div">
                  <label>First Name:</label>
                  <Field
                    type="text"
                    name="firstName"
                    // placeholder={firstname}
                    className="form-input"
                  />
                  <ErrorMessage name="firstName" />
                </div>
                <div className="form-div">
                  <label>Last Name:</label>
                  <Field
                    type="text"
                    name="lastName"
                    // placeholder="Doe"
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
                <div className="form-div">
                  <label htmlFor="country">Country:</label>
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
                        <div>{country.name.common}</div>
                      </option>
                    ))}
                  </Field>

                  <ErrorMessage
                    name="country"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="form-div">
                  <label htmlFor="phone">Phone:</label>
                  <div className="flex gap-4 max-w-[422px] ">
                    <PhoneNumberInput
                      phoneChange={handlePhone}
                      defaultValue={data.phone}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <p className="font-semibold mb-5">My Social Media Accounts</p>
              <div className="flex flex-col gap-5">
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
                  placeholder="https://facebook.com/abcd"
                />
                <IconField
                  icon={<FaFacebook size={24} color="black" />}
                  name={"facebook"}
                  className={"form-input"}
                  label={"Facebook"}
                  type={"text"}
                  placeholder="https://linkedin.com/abcd"
                />
                <IconField
                  icon={<IoLogoWhatsapp size={24} color="black" />}
                  name={"whatsapp"}
                  className={"form-input"}
                  label={"WhatsApp"}
                  type={"text"}
                  placeholder="https://wa.whatsapp.com/abc"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="form-div">
                <label htmlFor="bio" className="mb-5">
                  Bio:
                </label>
                <Field
                  as="textarea" // Use 'textarea' as the component
                  id="bio"
                  name="bio"
                  placeholder="Enter your bio"
                  className="form-input-textarea px-4 max-w-[422px]
                  border-[#E6E6E6] rounded-[4px] text-[#737373]
                  border py-2"
                  rows="15" // Optional: Set the number of rows for the text area
                  cols="50" // Optional: Set the number of columns for the text area
                />
              </div>
              <>
                {loading ? (
                  <div className="flex justify-center mt-8">
                    <Loader />
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="max-w-[160px] max-h-[52px] w-full aspect-[160/52]
                mt-5 bg-[#DDB771] text-[#ffff] rounded-[8px]"
                  >
                    Update Profile
                  </button>
                )}
              </>
            </div>
          </div>
        </Form>
      </Formik>
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
  " .form-input": {
    maxHeight: "52px",
    padding: "0.9375rem",
    maxWidth: "422px",
    aspectRatio: "422/52",
    border: "1px solid #E6E6E6",
    borderRadius: "4px",
    color: "#737373",
    backgroundColor: "white",
  },

  ".form-input option": {
    backgroundColor: "white",
  },
  ".form-input option:hover": {
    backgroundColor: "green",
  },
  "form-input-textarea": {
    padding: "0.9375rem",
    maxWidth: "541px",
    width: "100%",
    aspectRatio: "541/368",
    border: "1px solid #E6E6E6",
    borderRadius: "4px",
    color: "#737373",
  },
  "& .link-icon": {
    top: "75%",
    transform: "translateY(-75%)",
    left: "1rem",
  },
});

const Navigation = styled("button", {
  fontSize: "16px",
  fontWeight: "400",
  color: "#8A8A8A",
  padding: "0.5rem",
  "&:hover": {
    backgroundColor: "#8a8a8a05",
    color: "black",
  },

  variants: {
    type: {
      active: {
        color: "#307A4A",
        borderBottom: "2px solid #307A4A",
      },
    },
  },
});

export default Profile;
