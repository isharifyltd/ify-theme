import React from "react";

const BriefcaseIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth={props.strokeWidth ? props.strokeWidth : "1"}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      style={props.style}
      id={props.id}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
};

export default BriefcaseIcon;
