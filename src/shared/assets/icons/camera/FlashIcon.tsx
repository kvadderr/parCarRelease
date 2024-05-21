import * as React from "react";
import Svg, { Path } from "react-native-svg";
const FlashIcon = (props: any) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.5039 16.8981H10.8919C8.91361 16.8981 7.92445 16.8981 7.50282 16.2459C7.08119 15.5937 7.48293 14.6851 8.28639 12.8678L10.7019 7.40431C11.4324 5.752 11.7977 4.92584 12.5063 4.46292C13.2149 4 14.1142 4 15.913 4H18.6989C20.8839 4 21.9765 4 22.3885 4.7138C22.8006 5.4276 22.2586 6.38117 21.1745 8.28831L19.7453 10.8025C19.2063 11.7506 18.9369 12.2247 18.9406 12.6127C18.9455 13.117 19.2137 13.5816 19.6469 13.836C19.9802 14.0319 20.5233 14.0319 21.6095 14.0319C22.9827 14.0319 23.6694 14.0319 24.027 14.2696C24.4915 14.5784 24.7347 15.1309 24.6495 15.6843C24.5839 16.1101 24.1221 16.6208 23.1983 17.6423L15.8182 25.8031C14.3686 27.406 13.6438 28.2075 13.1571 27.9539C12.6704 27.7001 12.9041 26.6429 13.3715 24.5283L14.2873 20.3861C14.6431 18.776 14.8211 17.9709 14.3931 17.4345C13.9651 16.8981 13.1447 16.8981 11.5039 16.8981Z"
      fill="white"
      stroke="white"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Svg>
);
export default FlashIcon;
