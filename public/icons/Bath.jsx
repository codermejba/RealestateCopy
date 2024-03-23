import React from "react";

const Bath = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      id="Bathtub"
    >
      {/* Bathtub body */}
      <line
        x1="15.62"
        x2="-0.07"
        y1="29.52"
        y2="29.52"
        stroke="#00a34a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <line
        x1="64.08"
        x2="30.33"
        y1="29.52"
        y2="29.52"
        stroke="#00a34a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <rect
        width="29.67"
        height="6.03"
        x="30.33"
        y="29.52"
        fill="none"
        stroke="#00a34a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <rect
        width="11.61"
        height="6.03"
        x="4"
        y="29.52"
        fill="none"
        stroke="#00a34a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        transform="rotate(180 9.81 32.535)"
      />
      <polygon
        fill="none"
        stroke="#00a34a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        points="30.34 42.52 15.62 42.52 15.62 35.55 15.62 27.02 30.34 27.02 30.34 35.55 30.34 42.52"
      />
      <polygon
        fill="none"
        stroke="#00a34a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        points="30.34 42.52 15.62 42.52 15.62 35.55 15.62 27.02 30.34 27.02 30.34 35.55 30.34 42.52"
      />
      
      {/* Faucet and drainage */}
      <line
        x1="51.08"
        x2="43.08"
        y1="13.93"
        y2="13.93"
        stroke="#00a34a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        fill="none"
        stroke="#00a34a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M47.08,13.55V10.83a6.47,6.47,0,0,1,6.46-6.46h0A6.46,6.46,0,0,1,60,10.83V29.52"
      />
      <line
        x1="47.2"
        x2="48.39"
        y1="55.2"
        y2="59.63"
        stroke="#00a34a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />

      {/* Bathtub edges */}
      <line
        x1="51.08"
        x2="51.08"
        y1="18.56"
        y2="21.19"
        stroke="#00a34a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <line
        x1="43.08"
        x2="43.08"
        y1="21.19"
        y2="18.56"
        stroke="#00a34a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <line
        x1="47.08"
        x2="47.08"
        y1="21.19"
        y2="18.56"
        stroke="#00a34a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />

      {/* Overflowing water */}
      <line
        x1="16.8"
        x2="15.61"
        y1="55.2"
        y2="59.63"
        stroke="#00a34a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        fill="none"
        stroke="#00a34a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M30.33,35.55H60v4a16,16,0,0,1-16,16H20a16,16,0,0,1-16-16v-4H15.62"
      />
    </svg>
  );
};

export default Bath;
