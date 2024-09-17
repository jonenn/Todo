const CheckIcon = ({ color, size, onClick }) => {
   return (
      <svg
         width={size}
         height={size}
         viewBox="0 0 37 30"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         onClick={onClick}
      >
         <g clip-path="url(#clip0_271_3530)">
            <path
               d="M13.8352 24.0998L29.1079 5.90022"
               stroke={color}
               stroke-width="2.7"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
            <path
               d="M8.69995 18.7783L13.17 24.0998"
               stroke={color}
               stroke-width="2.7"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
         </g>
         <defs>
            <clipPath id="clip0_271_3530">
               <rect
                  width="24"
                  height="21.7916"
                  fill="white"
                  transform="translate(6.90393 4.10422)"
               />
            </clipPath>
         </defs>
      </svg>
   );
};

export default CheckIcon;
