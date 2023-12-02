import Button from "@/components/__shared/Button";
import Feature from "../../components/Feature";
import { FaCaretDown } from "react-icons/fa";
import AOSWrapper from "@/components/__shared/AOSWrapper";

type Props = {
  features: FeatureInterface[];
};

const PropertyDetailsFeatures = ({ features }: Props) => {
  return (
    <section className="px-5 mx-auto my-10 max-w-screen-2xl sm:px-10">
      <h2 className="text-neutral-800 font-[600] text-2xl">
        Features and Amenities
      </h2>
      <div className="grid justify-between w-full mt-8 gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <AOSWrapper key={idx+1} duration="600" animation="fade-right" delay={`${idx+1}00`}>
            <Feature label={feature.label} />
          </AOSWrapper>
        ))}
      </div>
      <Button
        variant="ghost"
        className="flex items-center ml-auto text-sm gap-1 text-[#305A61] mt-10"
      >
        Show more <FaCaretDown className="text-neutral-800" />
      </Button>
    </section>
  );
};

export default PropertyDetailsFeatures;
