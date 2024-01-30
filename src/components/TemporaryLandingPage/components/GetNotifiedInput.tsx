import { Button } from "@nextui-org/react";
import { Form, Formik } from "formik";

function GetNotifiedInput() {
  return (
    <div className="flex flex-col gap-4">
      <Formik initialValues={{}} onSubmit={() => console.log('first')}>
        <Form className="flex items-center gap-2">
          <input type="text" placeholder="Your email or phone number"  className="w-full max-w-[330px] rounded-[4px] bg-[#F9F9F9] border-[1px] p-[15px]"/>

          <Button className="text-white font-semibold px-10 py-[15px] rounded-lg bg-[#396261] h-[52px]">
            Subscribe
          </Button>
        </Form>
      </Formik>
      <p className="text-[#B0780B] font-semibold">Get notified when we go live</p>
    </div>
  );
}

export default GetNotifiedInput;
