import CustomInputComponent from "@/components/__shared/ui/form/CustomInputComponent";
import PhoneNumberInputv2 from "@/components/__shared/ui/form/PhoneInputv2";
import { Formik } from "formik";
import { ChangeEvent, useEffect, useState } from "react";
import PaymentButton from "./PaymentButton";
import axios from "axios";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import useCartStore from "@/store/cart/useCartStore";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { usePaystackPayment } from "react-paystack";
import { object, string } from "yup";
import { toast } from "react-toastify";
import { error } from "console";
import supabase from "@/lib/utils/supabase/supabaseClient";

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

interface Props {
  amount?: number;
}
const BillingForm = ({ amount }: Props) => {
  const [firstname, setfirstname] = useState<string>();
  const [lastname, setlastname] = useState<string>();
  const [email, setemail] = useState<string>();
  const [address, setaddress] = useState<string>();
  const [address2, setaddress2] = useState<string>();
  const [phone, setphone] = useState<string>("");
  const [saved, setsaved] = useState<boolean>(false);
  const [loading, setloading] = useState(false);
  const { items, discountCode, getTotalPrice } = useCartStore();
  const [paymentRef, seyPaymentRef] = useState<string>();
  const [paid, setpaid] = useState(false);
  const router = useRouter();
  const supabaseClient = createClientComponentClient();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const config = {
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_API_KEY as string,
    currency: "GHS",
  };
  const tax = items.reduce(
    (acc, item) => acc + (item.tax_rate / 100) * item.cost,
    0,
  );
  const initializePayment = usePaystackPayment(config);

  const paymentSchema = object({
    firstname: string().required("Firstname is required"),
    lastname: string().required("Lastname is reqquired"),
    email: string().required("Email is required").email("Invalid email"),
    address: string().required("Address is required"),
    phone: string().required("Phone number is required"),
  });

  const onSuccess = (reference: string) => {
    console.log(reference);
    setloading(true);
    supabaseClient
      .from("payments")
      .insert({
        firstname: firstname,
        lastname: lastname,
        email: email,
        address: address,
        address2: address2,
        phone,
        amount,
        status: "PAID",
        reference,
        cart_items: JSON.stringify({ data: items }),
      })
      .then(({ error }) => {
        if (error) {
          toast.error(error.message, { toastId: "toast" });
          setloading(false);
          return;
        } else {
          const invoices_id = items.map((item) => item.invoiceId);
          supabaseClient
            .rpc("update_invoices_is_paid_and_reference", {
              invoice_ids: invoices_id,
              new_is_paid: true,
              new_payment_reference: reference,
            })
            .then(({ error: invoiceError }) => {
              if (invoiceError) {
                toast.error(invoiceError.message, { toastId: "toast" });
                setloading(false);
              } else {
                setloading(false);
                localStorage.setItem("cart", "[]");
                setpaid(true);
                supabase
                  .from("customer_discounts")
                  .insert({ email, code: discountCode.code })
                  .then(() => {
                    window.history.go(-2);
                  });
              }
            });
        }
      });
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const handlePayment = async () => {
    if (saved) {
      localStorage.setItem(
        "payment_details",
        JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          email: email,
          address: address,
          address2: address2,
          phone,
        }),
      );
    }

    try {
      const parsedSchema = await paymentSchema.validate({
        firstname,
        lastname,
        email,
        address,
        phone,
      });
      initializePayment({
        onSuccess,
        onClose,
        config: {
          reference: new Date().getTime().toString(),
          email: "payment@rentrightgh.com",
          amount:
            getTotalPrice(items, discountCode) +
            (discountCode.code ? (1 - discountCode.rate) * tax : tax),
        },
      });
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <fieldset>
          {<label className="text-[#6A6968] ">Firstname</label>}
          <input
            type="text"
            placeholder="Enter your firstname"
            className="mt-4 w-full rounded-md border-[1px] p-4 text-[13px] text-[#B4B2AF] outline-none  "
            onChange={(e) => setfirstname(e.target.value)}
          />
        </fieldset>
        <fieldset>
          {<label className="text-[#6A6968] ">Lastname</label>}
          <input
            type="text"
            placeholder="Enter your lastname"
            className="mt-4 w-full rounded-md border-[1px] p-4 text-[13px] text-[#B4B2AF] outline-none  "
            onChange={(e) => setlastname(e.target.value)}
          />
        </fieldset>
      </div>
      <fieldset className="mb-4">
        {<label className="text-[#6A6968] ">Email address</label>}
        <input
          type="email"
          placeholder="Emter your email"
          className="mt-4 w-full rounded-md border-[1px] p-4 text-[13px] text-[#B4B2AF] outline-none  "
          onChange={(e) => setemail(e.target.value)}
        />
      </fieldset>
      <fieldset className="mb-4">
        {<label className="text-[#6A6968] ">Address</label>}
        <input
          type="text"
          placeholder="Emter your address"
          className="mt-4 w-full rounded-md border-[1px] p-4 text-[13px] text-[#B4B2AF] outline-none  "
          onChange={(e) => setaddress(e.target.value)}
        />
      </fieldset>
      <fieldset className="mb-4">
        {<label className="text-[#6A6968] ">Address 2(Optional)</label>}
        <input
          type="text"
          placeholder="Enter your second address"
          className="mt-4 w-full rounded-md border-[1px] p-4 text-[13px] text-[#B4B2AF] outline-none  "
          onChange={(e) => setaddress2(e.target.value)}
        />
      </fieldset>
      <fieldset className="mb-4 flex">
        <PhoneNumberInputv2
          label="Phone"
          onChange={(selection) => {
            setphone(selection);
          }}
          onChange2={(selection) => {}}
          placeholder="Select your country"
        />
      </fieldset>
      <fieldset className="mb-4 flex items-center gap-3">
        <input
          type="checkbox"
          onChange={(e: any) => {
            setsaved(e.target.checked);
          }}
          className="h-6 w-6 rounded-md border-[1px] border-[#DCDCDC] "
        />
        <p className="text-[#737373]">Save this Information</p>
      </fieldset>
      <Button
        isLoading={loading}
        disabled={paid}
        size="lg"
        color={paid ? "success" : "default"}
        className="w-full rounded-md py-4 font-semibold text-white"
        onClick={async () => await handlePayment()}
      >
        {paid ? "Payment Verified" : " Proceed to Payment"}
      </Button>
    </div>
  );
};

export default BillingForm;
