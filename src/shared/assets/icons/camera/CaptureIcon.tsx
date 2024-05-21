import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const CaptureIcon = (props: any) => (
  <Svg
    width={73}
    height={72}
    viewBox="0 0 73 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={36.5} cy={36} r={32} fill="white" />
    <Circle cx={36.5} cy={36} r={35} stroke="white" strokeWidth={2} />
  </Svg>
);
export default CaptureIcon;
