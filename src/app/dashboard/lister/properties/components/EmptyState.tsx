import { LinkButton } from "@/components/__shared/ui/button/Button";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaPlus } from "react-icons/fa6";

const ListingModal = dynamic(
  () => import("../../overview/components/steps/ListingModal"),
);

const EmptyState = () => {
  const { images } = useAssets();

  return (
    <div className="flex justify-center lg:mt-20">
      <div className="flex flex-col items-center gap-6">
        <Image
          src={images.Clipboard}
          alt="clipboard"
          width={250}
          className="w-[70px] sm:w-[100px]"
        />
        <p className="font-semibold sm:text-2xl">No listings available</p>
        <ListingModal>
          <LinkButton href={`/dashboard/lister/overview/create`}>
            <FaPlus />
            Create New Listing
          </LinkButton>
        </ListingModal>
      </div>
    </div>
  );
};

export default EmptyState;
