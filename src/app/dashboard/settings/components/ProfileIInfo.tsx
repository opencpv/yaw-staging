import { styled } from "@stitches/react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AiOutlineLink } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "@/components/__shared/loader/Loader";
import ProfilePhone from "./ProfilePhone";
import { useManageAccountStore } from "@/store/dashboard/propertiesStore";

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

const ProfileInfo = ({
  profileData,
  supabase,
  loading,
}: {
  profileData: any;
  supabase: any;
  loading: boolean;
}) => {
  const [countries, setCountries] = useState([]);
  const [currentData, setCurrentData] = useState<any>({});
  const [phone, setphone] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [submitLoading, setSubmitLoading] = useState(false);

  const handlePhone = (str: string) => {
    setphone(str);
  };

  const handleCode = (str: string) => {
    setCode(str);
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

    setCurrentData(profileData);
  }, [profileData]);

  return (
    <Root>


      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="py-10 pt-6">
            <p>{currentData?.fullname}</p>
            <p>Your Profile Picture</p>
            <div className="max-w-[227px] max-h-[164px] w-full relative aspect-[227/164] rounded-[18px] mt-5 border-">
              <Image
                src={currentData.avatar_url}
                placeholder="blur"
                objectFit="cover"
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
              firstName: currentData.firstname,
              lastName: currentData.lastname,
              email: currentData.email,
              country: currentData.country,
              twitter: currentData.twitter_url,
              facebook: currentData.facebook_url,
              linkedIn: currentData.linkedin_url,
              whatsapp: currentData.whatsapp,
              bio: currentData.bio,
              number: currentData.phone,
            }}
            onSubmit={async (values) => {
              const dto = values;
              delete values.number;
              dto.number = phone;
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
                    phone,
                    code,
                    bio: values.bio,
                  })
                  .select()
                  .eq("id", profileData.id);

                console.log("Response data:", data);
                if (error) throw error;
              } catch (error) {
                console.log("Error updating profile:", error);
              } finally {
                setSubmitLoading(false);
              }
            }}
            enableReinitialize={true}>
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
                      <label>Country:</label>
                      <Field
                        as="select"
                        id="country"
                        name="country"
                        className="form-input bg-white">
                        {countries.map((country: any, index) => (
                          <option
                            key={index}
                            value={country.name.common}
                            className="py-5">
                            {country.name.common}
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
                      <label>Phone:</label>
                      <div className="flex gap-4 max-w-[422px] ">
                        <ProfilePhone
                          phoneChange={handlePhone}
                          codeChange={handleCode}
                          defaultValue={profileData?.country}
                          phone={profileData?.country}
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
                    <label className="mb-5">Bio:</label>
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
                    {submitLoading ? (
                      <div className="flex justify-center mt-8">
                        <div className="py-4 relative">
                          <Loader />
                        </div>
                      </div>
                    ) : (
                      <button
                        type="submit"
                        className="max-w-[160px] max-h-[52px] w-full aspect-[160/52]
                mt-5 bg-[#DDB771] text-[#ffff] rounded-[8px]">
                        Update Profile
                      </button>
                    )}
                  </>
                </div>
              </div>
            </Form>
          </Formik>
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

export default ProfileInfo;
