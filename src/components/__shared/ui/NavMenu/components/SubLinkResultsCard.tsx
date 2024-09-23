import images from "@/enum/temp/images";
import { getListingProps } from "@/lib/enum";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import Link from "next/link";

type Props = {
  listing: Property;
};

function SubLinkResultsCard({ listing }: Props) {
  const { user } = useAppStore();
  const { setToggle } = useMenuStore();

  return (
    <Link
      href={getListingProps(listing, user as UserType)?.href}
      className="main-menu-link fade-in relative line-clamp-3 flex aspect-[242/212] w-full min-w-[212px] max-w-[212px] cursor-pointer items-end rounded-lg bg-cover bg-no-repeat text-white transition-all hover:scale-[1.02]"
      onClick={() => setToggle(false)}
      style={{ backgroundImage: `url(${images[0]})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0000006E] to-[#0000006E]" />

      <div className="z-10 flex w-full flex-col justify-center p-4">
        <p className="font-semibold">
          <span className="line-clamp-3">{listing?.property_name}</span>{" "}
          <span>-</span> <span>{listing?.city}</span>
        </p>
      </div>
    </Link>
  );
}

export default SubLinkResultsCard;
