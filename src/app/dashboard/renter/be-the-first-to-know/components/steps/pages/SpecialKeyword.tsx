import { Textarea } from "@/components/__shared/ui/form/textarea";
import style from "../../../index.module.css";
import { Input } from "@/components/__shared/ui/form/input";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import PhoneNumberInput from "@/components/__shared/ui/form/phone-number-input";
import { Tabs } from "@/components/__shared/ui/tabs";
import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import { useField } from "formik";
import { BTFTKDefaultValues } from "@/store/dashboard/BTFTKStepsStore";
import { useLocalStorage } from "@uidotdev/usehooks";
import { E164Number } from "libphonenumber-js/core";
import { cn } from "@/lib/utils";

const SpecialKeyword = () => {
  const { handlePhone, handleCountryChange, phone } = usePhoneInputDisclosure();

  const [field, meta, helpers] = useField("preferredMethodOfContact");

  const [BTFTKCreationSteps, setBTFTKCreationSteps] = useLocalStorage<
    typeof BTFTKDefaultValues
  >("btftk-creation-steps");

  return (
    <div className={style.fieldsSectionWrapper}>
      <div className="space-y-1">
        <h2 className={`${style.titleNoMargin}`}>Describe your home</h2>
        <p className="text-shade-300">
          What words would you use to describe your search? Separate each word
          with a comma.
        </p>
      </div>
      <div className="">
        <Textarea
          placeholder="e.g. Tema, Community 1, 2 bedroom, private bathroom"
          name="specialKeywords"
          className="h-40"
          onChange={(e) =>
            setBTFTKCreationSteps({
              ...BTFTKCreationSteps,
              specialKeywords: e.target.value,
            })
          }
        />
      </div>
      <div className={cn("max-w-sm", style.subHeadingFieldsContainer)}>
        <label className="text-shade-300">
          How would you like to be notified?{" "}
          <span className="text-sm text-shade-300">*</span>
        </label>
        <div className="w-fit rounded-full bg-primary-600/5 p-2">
          <Tabs
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
              setBTFTKCreationSteps({
                ...BTFTKCreationSteps,
                preferredMethodOfContact: key as any,
              });
            }}
          />
        </div>
        {/* email */}
        <div
          className={
            field.value?.toLowerCase() === "whatsapp" ? "hidden" : "block"
          }
        >
          <Input
            name="email"
            type="email"
            placeholder="Enter your email address"
            onChange={(e) =>
              setBTFTKCreationSteps({
                ...BTFTKCreationSteps,
                email: e.target.value,
              })
            }
          />
        </div>
        {/* whatsapp */}
        <div
          className={
            field.value?.toLowerCase() === "whatsapp" ? "block" : "hidden"
          }
        >
          <PhoneNumberInput
            name="whatsApp"
            value={phone}
            onChange={(value) => {
              handlePhone(value);

              setBTFTKCreationSteps({
                ...BTFTKCreationSteps,
                whatsApp: value as E164Number,
              });
            }}
            onCountryChange={handleCountryChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialKeyword;
