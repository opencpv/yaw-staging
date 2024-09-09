import { Textarea } from "@/components/__shared/ui/form/textarea";
import style from "../../../index.module.css";
import { BTFTKDefaultValues } from "@/store/dashboard/BTFTKStepsStore";
import { useLocalStorage } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";
import ContactMethodSwitch from "@/app/contact/components/forms/ContactMethodSwitch";

const SpecialKeyword = () => {
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
        <ContactMethodSwitch />
      </div>
    </div>
  );
};

export default SpecialKeyword;
