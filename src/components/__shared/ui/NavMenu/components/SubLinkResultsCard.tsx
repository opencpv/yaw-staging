import Link from "next/link";

type Props = {
  listing: any; //correct this
};

function SubLinkResultsCard({ listing }: Props) {
  return (
    <Link
      href={`/properties`}
      className="main-menu-link relative flex aspect-[242/212] w-full min-w-[212px] max-w-[212px] cursor-pointer flex-col justify-start overflow-hidden rounded-lg bg-cover bg-no-repeat text-white transition-all hover:scale-[1.02]"
      style={{ backgroundImage: `url(${listing?.images?.[0]})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0000006E] to-[#0000006E]" />

      <div className="z-10 flex w-full flex-col items-start justify-center px-4 pt-[50%]">
        <p className="font-semibold">
          {listing?.bedrooms} Bedroom {listing?.propertyType}
        </p>
        <p className="text-sm 2xl:text-base">{listing?.subtitle}</p>
      </div>
    </Link>
  );
}

export default SubLinkResultsCard;
