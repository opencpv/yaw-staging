import images from "@/enum/temp/images";
import { getListingProps } from "@/lib/enum";
import { useAppStore } from "@/store/dashboard/AppStore";
import Link from "next/link";

type Props = {
  listing: Property;
};

function SubLinkResultsCard({ listing }: Props) {
  const { user } = useAppStore();
  return (
    <Link
      href={getListingProps(listing, user as UserType)?.href}
      className="main-menu-link relative flex aspect-[242/212] w-full min-w-[212px] max-w-[212px] cursor-pointer flex-col justify-start overflow-hidden rounded-lg bg-cover bg-no-repeat text-white transition-all hover:scale-[1.02]"
      style={{ backgroundImage: `url(${images[0]})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0000006E] to-[#0000006E]" />

      <div className="z-10 flex w-full flex-col items-start justify-center px-4 pt-[50%]">
        <p className="font-semibold">
          {listing?.property_type} - {listing?.city}
        </p>
      </div>
    </Link>
  );
}

export default SubLinkResultsCard;
