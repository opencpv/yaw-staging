import { useLocalStorage } from "@uidotdev/usehooks";
import styles from "../../../index.module.css";
import TextFieldInput from "@/components/__shared/ui/form/TextFieldInput";
import { BTFTKDefaultValues } from "@/store/dashboard/BTFTKStepsStore";

const SearchTitle = () => {
  const [BTFTKCreationSteps, setBTFTKCreationSteps] = useLocalStorage<
    typeof BTFTKDefaultValues
  >("btftk-creation-steps");

  return (
    <div className="relative lg:top-32">
      <h2 className={`${styles.title}`}>
        Search Title <span className="text-sm text-shade-300">*</span>
      </h2>
      <div className="max-w-sm">
        <TextFieldInput
          type="text"
          name="searchTitle"
          label="Provide a title for your search criteria"
          placeholder="e.g. My Accra Home"
          onChange={(e) =>
            setBTFTKCreationSteps({
              ...BTFTKCreationSteps,
              searchTitle: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};

export default SearchTitle;
