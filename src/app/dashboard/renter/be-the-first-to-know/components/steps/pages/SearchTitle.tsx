import { useLocalStorage } from "@uidotdev/usehooks";
import style from "../../../index.module.css";
import { Input } from "@/components/__shared/ui/form/input";
import { BTFTKDefaultValues } from "@/store/dashboard/BTFTKStepsStore";

const SearchTitle = () => {
  const [BTFTKCreationSteps, setBTFTKCreationSteps] = useLocalStorage<
    typeof BTFTKDefaultValues
  >("btftk-creation-steps");

  return (
    <div className="relative lg:top-32">
      <h2 className={`${style.title}`}>
        Search Title <span className={style.asterisk}>*</span>
      </h2>
      <div className="max-w-sm">
        <Input
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
