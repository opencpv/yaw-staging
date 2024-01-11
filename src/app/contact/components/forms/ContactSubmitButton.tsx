import React from "react";

type Props = {};

const ContactSubmitButton = (props: Props) => {
  return (
    <button
      className="bg-[#DDB771] rounded-[8px] w-full h-[52px] flex items-center justify-center text-white mt-5 hover:scale-[1.05] xs:w-[135px]"
      type="submit"
    >
      Submit
    </button>
  );
};

export default ContactSubmitButton;
