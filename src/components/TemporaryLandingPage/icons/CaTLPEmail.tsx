import React from "react";

type Props = {
  active: boolean;
};
function CaTlpEmail({active} : Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 25 25">
      <path
        stroke={active ? "white" : "#545454"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3.5 8.5l7.89 5.26a2 2 0 002.22 0L21.5 8.5m-16 11h14a2 2 0 002-2v-10a2 2 0 00-2-2h-14a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
  );
}

export default CaTlpEmail;
