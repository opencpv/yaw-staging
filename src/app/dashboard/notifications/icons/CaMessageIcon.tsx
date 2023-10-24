import React from "react";

type Props = {
    width:string
}

function MessageIcon({width}:Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#DCA847"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
      ></path>
    </svg>
  );
}

export default MessageIcon;
