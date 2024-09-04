import { useLocalStorage } from "@uidotdev/usehooks";
import style from "../../../index.module.css";
import Callout from "../../../../../../../components/__shared/ui/callout/callout";
import { useField } from "formik";
import { ListingDefaultValues } from "@/store/dashboard/ListingStepsStore";
import { cn } from "@/lib/utils";

const data = [
  {
    name: "Furnished",
    description:
      "Renters will enjoy a fully furnished retreat, complete with all the comfort and conveniences needed for a relaxing stay.",
  },
  {
    name: "Semi-Furnished",
    description:
      "Renters will enjoy a fully furnished retreat, complete with all the comfort and conveniences needed for a relaxing stay.",
  },
  {
    name: "Unfurnished",
    description:
      "Renters can look forward to a blank canvas, allowing them to create their own unique environment in an unfurnished place.",
  },
];

export default function FurnishLevel() {
  const [field, meta, helpers] = useField("furnish_level");

  const [ListingCreationSteps, setListingCreationSteps] = useLocalStorage<
    typeof ListingDefaultValues
  >("listing-creation-steps");

  const handleFurnishClick = (r: { name: string }) => {
    helpers.setValue(r.name);
    setListingCreationSteps({
      ...ListingCreationSteps,
      furnish_level: r.name,
    });
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.titleCallOutContainer}>
          <h2 className={`${style.titleNoMargin}`}>
            What type of place will the renter have?{" "}
            <span className={style.asterisk}>*</span>
          </h2>
          <Callout content="You may select more than one response" />
        </div>

        <div className="flex w-full flex-col items-start gap-5">
          {data.map((r, index: number) => (
            <Furnish
              key={r?.name}
              n={index}
              name={r?.name}
              description={r?.description}
              selected={field.value === r?.name}
              onClick={() => handleFurnishClick(r)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

const Furnish = (props: {
  name: string;
  description: string;
  selected: boolean;
  onClick: () => void;
  n: number;
}) => {
  return (
    <button
      className={cn(
        "!hover:scale-50 fade-in-top items-start space-y-5 p-3 text-left !transition-all",
        {
          "w-full rounded-xl border bg-white pt-5 shadow-md transition-all duration-1000":
            props.selected,
        },
      )}
      style={{ animationDelay: `0.${props.n + 6}s` }}
      onClick={props.onClick}
    >
      <h3
        className={cn({
          "text-shade-200": !props.selected,
        })}
      >
        {props.name}
      </h3>
      <p className="text-shade-200">{props.description}</p>
    </button>
  );
};
