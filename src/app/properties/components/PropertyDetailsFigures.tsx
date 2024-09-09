import ReportIssue from "@/components/__shared/ui/links/report-issue";
import { formatPrice } from "@/lib/utils/numberManipulation";
import capitalizeName, {
  caseInsensitiveCompare,
  convertNumWithoutPlus,
  wordifyNumber,
} from "@/lib/utils/stringManipulation";
import React from "react";
import { CiWallet } from "react-icons/ci";
import { LiaBedSolid } from "react-icons/lia";
import { MdOutlinePhotoSizeSelectSmall, MdOutlineShower } from "react-icons/md";

type Props = {
  listing: Property;
};

const PropertyDetailsFigures = ({ listing }: Props) => {
  const advancePeriod = caseInsensitiveCompare(
    listing?.payment_terms,
    "monthly",
  )
    ? "No Advance"
    : capitalizeName(
        wordifyNumber(
          convertNumWithoutPlus(listing?.lease_duration?.slice(0, 1) as string),
        ),
      ) + " Year Advance";
  return (
    <section className="space-y-5">
      <div
        className="grid gap-5"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr)" }}
      >
        <FigureCard
          title="Monthly Rent"
          icon={<CiWallet size={24} />}
          value={formatPrice(
            listing?.monthly_amount as number,
            true,
            listing?.currency as string,
          )}
          tag={advancePeriod}
        />
        <FigureCard
          title="Bedroom"
          icon={<LiaBedSolid size={24} />}
          value={listing?.bedrooms}
        />
        <FigureCard
          title="Bathroom"
          icon={<MdOutlineShower size={32} />}
          value={listing?.bathrooms}
        />
        <FigureCard
          title="Sq/m"
          icon={<MdOutlinePhotoSizeSelectSmall size={24} />}
          value={listing?.property_size}
        />
      </div>
      <ReportIssue />
    </section>
  );
};

const FigureCard = (props: {
  title: string;
  icon: React.ReactNode;
  value?: string | number | null;
  tag?: string;
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-3 rounded-lg border p-4">
      {props.tag && (
        <div className="absolute left-0 top-0 w-full max-w-[150px] rounded-lg bg-info-bg p-1 text-center text-xs font-semibold text-info">
          {props.tag}
        </div>
      )}
      {props.icon}
      <p className="text-base">{props.title}</p>
      <p className="font-bold text-primary">{props.value || " - "}</p>
    </div>
  );
};

export default PropertyDetailsFigures;
