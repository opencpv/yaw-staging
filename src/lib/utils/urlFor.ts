import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./sanityClient";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(sanityClient);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source: any) {
  return builder.image(source);
}

export default urlFor;