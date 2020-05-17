// vendor
import React from "react";

function Arrow({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13.41"
      height="27.205"
      viewBox="0 0 13.41 27.205"
      {...props}
    >
      <g transform="translate(-22.795 -807)">
        <line
          y2="26"
          transform="translate(29.5 807.5)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="1"
        />
        <line
          x2="6"
          y2="7"
          transform="translate(23.5 826.5)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="1"
        />
        <line
          x1="6"
          y2="7"
          transform="translate(29.5 826.5)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}

export default Arrow;
