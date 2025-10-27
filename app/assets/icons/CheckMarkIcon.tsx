import React from "react";

const CheckMarkIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <mask id="path-1-inside-1_2014_7252" fill="white">
        <path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" />
      </mask>
      <path
        d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"
        fill="#A440F1"
      />
      <path
        d="M8 16V15C4.13401 15 1 11.866 1 8H0H-1C-1 12.9706 3.02944 17 8 17V16ZM16 8H15C15 11.866 11.866 15 8 15V16V17C12.9706 17 17 12.9706 17 8H16ZM8 0V1C11.866 1 15 4.13401 15 8H16H17C17 3.02944 12.9706 -1 8 -1V0ZM8 0V-1C3.02944 -1 -1 3.02944 -1 8H0H1C1 4.13401 4.13401 1 8 1V0Z"
        fill="white"
        mask="url(#path-1-inside-1_2014_7252)"
      />
      <path
        d="M6.69267 9.43244L4.96637 7.70614L4.2251 8.4474L6.69267 10.915L11.7814 5.82623L11.0402 5.08496L6.69267 9.43244Z"
        fill="white"
      />
    </svg>
  );
};

export default CheckMarkIcon;
