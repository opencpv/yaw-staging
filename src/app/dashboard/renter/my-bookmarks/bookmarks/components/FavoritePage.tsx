import { boolean } from "yup";
import SimpleSwitch from "./SimpleSwitch";
import { useState } from "react";
import PropertiesListing from "@/app/properties/components/PropertiesListing";
import ListingCard from "@/components/__shared/listing/ListingCard";
import images from "@/enum/temp/images";
import FavoriteListingCard from "./FavoriteListingCard";

const FavoritePage = () => {
  const listing = {
    id: "adsadad1",
    key: 1,
    property_id: 1,
    city: "kumasi",
    property_name: "2 beadromm house at Kasoa",
    monthly_amount: 2000,
    description: "The road ahead is good.",
  };
  const [allowContact, setallowContact] = useState<boolean>(false);
  return (
    <div>
      <h2 className="font-['Open Sans'] mb-4 text-xl font-semibold leading-7 text-zinc-800">
        Favourite
      </h2>
      <SimpleSwitch onChange={(state) => setallowContact(state)} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
        <FavoriteListingCard
          key={listing.id as string}
          cardType="2"
          href={`/properties/${listing.property_id}`}
          propertyName={listing.property_name as string}
          city={listing.city as string}
          images={images} // TODO: check database
          liked={false} // TODO: check implementation
          guarantee={"Certified" as GuaranteeTag} // TODO: check database
          monthlyAmount={listing.monthly_amount as number}
          paymentStructure={"Bi-Annually" as PaymentStructure} // TODO: check database
          propertyDescription={listing.description as string}
          rating={4.5} // TODO: check database
          ratingCount={105} // TODO: check database
          hint={"Best Value" as HintTag} // TODO: check database
        />
        <FavoriteListingCard
          key={listing.id as string}
          cardType="2"
          href={`/properties/${listing.property_id}`}
          propertyName={listing.property_name as string}
          city={listing.city as string}
          images={images} // TODO: check database
          liked={false} // TODO: check implementation
          guarantee={"Certified" as GuaranteeTag} // TODO: check database
          monthlyAmount={listing.monthly_amount as number}
          paymentStructure={"Bi-Annually" as PaymentStructure} // TODO: check database
          propertyDescription={listing.description as string}
          rating={4.5} // TODO: check database
          ratingCount={105} // TODO: check database
          hint={"Best Value" as HintTag} // TODO: check database
        />
        <FavoriteListingCard
          key={listing.id as string}
          cardType="2"
          href={`/properties/${listing.property_id}`}
          propertyName={listing.property_name as string}
          city={listing.city as string}
          images={images} // TODO: check database
          liked={false} // TODO: check implementation
          guarantee={"Certified" as GuaranteeTag} // TODO: check database
          monthlyAmount={listing.monthly_amount as number}
          paymentStructure={"Bi-Annually" as PaymentStructure} // TODO: check database
          propertyDescription={listing.description as string}
          rating={4.5} // TODO: check database
          ratingCount={105} // TODO: check database
          hint={"Best Value" as HintTag} // TODO: check database
        />
      </div>
    </div>
  );
};

export default FavoritePage;
