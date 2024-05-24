import * as React from "react";
import Svg, { Path } from "react-native-svg";

function VolumeIcon() {
  return (
    <Svg width={21} height={20} viewBox="0 0 21 20" fill="none">
      <Path
        d="M12.166 12.345v-4.69c0-2.62 0-3.931-.771-4.257-.771-.326-1.679.6-3.494 2.454-.94.96-1.476 1.172-2.813 1.172-1.17 0-1.755 0-2.175.287-.872.595-.74 1.758-.74 2.69 0 .93-.132 2.094.74 2.689.42.286 1.005.286 2.175.286 1.337 0 1.873.213 2.813 1.173 1.815 1.853 2.723 2.78 3.494 2.453.771-.326.771-1.636.771-4.257z"
        fill="#98A2B3"
        stroke="#98A2B3"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.666 7.5c.521.683.833 1.553.833 2.5 0 .947-.312 1.817-.833 2.5M17.166 5.833c1.042 1.139 1.667 2.589 1.667 4.167 0 1.579-.625 3.028-1.667 4.167"
        stroke="#98A2B3"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default VolumeIcon;
