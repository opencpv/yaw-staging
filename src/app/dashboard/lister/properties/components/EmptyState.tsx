import Button from "@/components/__shared/ui/button/Button";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import dynamic from "next/dynamic";

const ListingModal = dynamic(() => import("../../overview/components/steps/ListingModal")); 

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
        <p className="font-semibold sm:text-2xl">
          No listings available
        </p>
        <ListingModal>
          <Button href={`/dashboard/lister/overview/create`} color="primary">
            Create New Listing
          </Button>
        </ListingModal>
      </div>
    </div>
  );
};

export default EmptyState;
