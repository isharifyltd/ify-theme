import React from "react";

const ShevronDownIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      style={props.style}
      id={props.id}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
};

export default ShevronDownIcon;
