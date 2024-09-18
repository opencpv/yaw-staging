import React from "react";
import style from "../Template.module.css";

function PropertyDetailsTTK({ listing }: { listing: Property }) {
  return (
    <section className={style.detailWrapper}>
      <h2 className={style.detailHeading}>Things To Know</h2>
      <p>{listing?.renter_knowledge}</p>
    </section>
  );
}

export default PropertyDetailsTTK;
