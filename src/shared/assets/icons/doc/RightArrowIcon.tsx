import * as React from "react";
import Svg, { Path } from "react-native-svg";
const RightArrowIcon = (props: any) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.29291 4.29289C7.68343 3.90237 8.31659 3.90237 8.70712 4.29289L13.7071 9.29289C13.8947 9.48043 14 9.73478 14 10C14 10.2652 13.8947 10.5196 13.7071 10.7071L8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071C6.90237 15.3166 6.90237 14.6834 7.29289 14.2929L11.5858 10L7.29291 5.70711C6.90238 5.31658 6.90238 4.68342 7.29291 4.29289Z"
      fill="#818C99"
    />
  </Svg>
);
export default RightArrowIcon;
