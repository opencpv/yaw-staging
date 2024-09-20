import React from "react";
import style from "../Template.module.css";

function PropertyDetailsIncentives({ listing }: { listing: Property }) {
  if (listing?.incentives?.length)
    return (
      <section className={style.detailWrapper}>
        <h2 className={style.detailHeading}>Special Offers</h2>
        <ul className="flex gap-3 text-shade-200">
          {listing?.incentives?.map((incentive) => (
            <li key={incentive} className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-primary" />
              {incentive}
            </li>
          ))}
        </ul>
      </section>
    );
}

export default PropertyDetailsIncentives;
