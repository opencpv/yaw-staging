import React from "react";

function PropertyDetailsDescription({ listing }: { listing: Property }) {
  return <section>{listing?.description}</section>;
}

export default PropertyDetailsDescription;
