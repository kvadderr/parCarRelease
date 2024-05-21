import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SuccessIcon = (props: any) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.6663 7.99992C14.6663 4.31802 11.6815 1.33325 7.99967 1.33325C4.31777 1.33325 1.33301 4.31802 1.33301 7.99992C1.33301 11.6818 4.31777 14.6666 7.99967 14.6666C11.6815 14.6666 14.6663 11.6818 14.6663 7.99992Z"
      fill="#40B869"
      stroke="#40B869"
      strokeWidth={1.5}
    />
    <Path
      d="M5.33301 8.33333L6.99967 10L10.6663 6"
      stroke="#DAE7F1"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SuccessIcon;
