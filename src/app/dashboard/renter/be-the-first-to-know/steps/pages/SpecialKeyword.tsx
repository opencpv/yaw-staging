import CustomTextAreaInput from "@/components/__shared/ui/form/CustomTextAreaInput";
import styles from "../../index.module.css";
import TextFieldInput from "@/components/__shared/ui/form/TextFieldInput";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import InputPhoneNumber from "@/components/__shared/ui/form/InputPhoneNumber";
import Toggle from "@/components/__shared/ui/Toggle";
import Checkbox from "@/app/dashboard/components/shared/ui/Checkbox";
import OptionFilterTabs from "@/components/__shared/ui/OptionFilterTabs";
import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import { useField } from "formik";

const SpecialKeyword = () => {
  const { handlePhone, handleCountryChange, phone } = usePhoneInputDisclosure();

  const [field, meta, helpers] = useField("preferredMethodOfContact");

  return (
    <div className="space-y-10">
      <div className="space-y-1">
        <h2 className={`${styles.titleNoMargin}`}>Describe your home</h2>
        <p className="text-shade-300">
          What words would you use to describe your search? Separate each word
          with a comma.
        </p>
      </div>
      <div className="">
        <CustomTextAreaInput
          placeholder="e.g. Tema, Community 1, 2 bedroom, private bathroom"
          name="specialKeyword"
          classes="h-40"
        />
      </div>
      <div className="max-w-sm space-y-4">
        <label className="text-shade-300">
          How would you like to be notified?
        </label>
        <div className="w-fit rounded-full bg-primary-600/5 p-2">
          <OptionFilterTabs
            options={[
              {
                label: "Email",
                icon: <MdOutlineMailOutline />,
              },
              {
                label: "WhatsApp",
                icon: <MdOutlineWhatsapp />,
              },
            ]}
            selectedKey={field.value}
            onSelectionChange={(key) => {
              helpers.setValue(key as any);
            }}
            radius="large"
            padding="medium"
            cursorAnimation
          />
        </div>
        {/* email */}
        <div className={field.value === "whatsapp" ? "hidden" : "block"}>
          <TextFieldInput
            name="email"
            type="email"
            placeholder="Enter your email address"
          />
        </div>
        {/* whatsapp */}
        <div className={field.value === "whatsapp" ? "block" : "hidden"}>
          <InputPhoneNumber
            name="phone"
            value={phone}
            onChange={handlePhone}
            onCountryChange={handleCountryChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialKeyword;
