import CustomInputComponent from "@/app/components/CustomInputComponent";
import CountryInput from "@/components/__shared/CountryInput";
import CurrencyInput from "@/components/__shared/CurrencyInput";
import PhoneNumberInputv2 from "@/components/__shared/PhoneInputv2";
import { Formik } from "formik";
import { ChangeEvent, useState } from "react";

interface ErrorProps {
  firstname?: string | null;
  lastname?: string | null;
  email?: string | null;
  address?: string | null;
  address2?: string | null;
  country?: string | null;
  phone?: string | null;
  country_code?: string | null;
}

interface InputProps {
  handleChange: (e: ChangeEvent<any>) => void;
  handleBlur: (e: any) => void;
  values: any;
  errors: any;
  touched: any;
  name: string;
  type: string;
  label: string;
  placeholder?: string;
}

const BillingForm = () => {
  const [code, setcode] = useState<string>("");
  const [phone, setphone] = useState<number>(0);
  const [country, setcountry] = useState<string>();
  const [saved, setsaved] = useState<boolean>(false);

  return (
    <Formik
      initialValues={{
        firstname: "",
        latname: "",
        email: "",
        password: "",
        address: "",
        address2: "",
        country: "",
        phone: "",
        country_code: "",
      }}
      validate={(values) => {
        const errors: ErrorProps = { email: null };
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <CustomInputComponent
              type="text"
              name="firstname"
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values}
              errors={errors}
              touched={touched}
              label="First Name"
              placeholder="Enter your first name"
            />
            <CustomInputComponent
              type="text"
              name="lastname"
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values}
              errors={errors}
              touched={touched}
              label="Last Name"
              placeholder="Enter your last name"
            />
          </div>
          <CustomInputComponent
            type="text"
            name="email"
            handleBlur={handleBlur}
            handleChange={handleChange}
            values={values}
            errors={errors}
            touched={touched}
            label="Email address"
            placeholder="Enter your email"
          />
          <CustomInputComponent
            type="text"
            name="address"
            handleBlur={handleBlur}
            handleChange={handleChange}
            values={values}
            errors={errors}
            touched={touched}
            label="Address"
            placeholder="Enter your address"
          />
          <CustomInputComponent
            type="text"
            name="address2"
            handleBlur={handleBlur}
            handleChange={handleChange}
            values={values}
            errors={errors}
            touched={touched}
            label="Address 2(Optional)"
            placeholder="Enter your address"
          />
          <CustomInputComponent
            type="text"
            name="address"
            handleBlur={handleBlur}
            handleChange={handleChange}
            values={values}
            errors={errors}
            touched={touched}
            label="Address"
            placeholder="Enter your address"
          />
          <CountryInput
            label="Country"
            placeholder="Select your country"
            onChange={(selection) => {
              setcountry(selection);
              console.log(selection);
            }}
          />
          <div className="mt-4"></div>
          <div className="flex">
            <PhoneNumberInputv2
              label="Phone"
              onChange={(selection) => {
                setcode(selection);
              }}
              onChange2={(selection) => {
                setphone(selection);
              }}
              placeholder="Select your country"
            />
          </div>
          <div className="mt-4"></div>
          <fieldset className="flex mb-4 gap-3 items-center">
            <input
              type="checkbox"
              onChange={(e: any) => {
                setsaved(e.target.checked);
              }}
              className="h-6 w-6 border-[1px] rounded-md border-[#DCDCDC] "
            />
            <p className="text-[#737373]">Save this Information</p>
          </fieldset>
          <button
            type="submit"
            className="text-white font-semibold py-4 bg-[#DDB771] rounded-md w-full"
          >
            Proceed to Payment
          </button>
        </form>
      )}
    </Formik>
  );
};

export default BillingForm;
