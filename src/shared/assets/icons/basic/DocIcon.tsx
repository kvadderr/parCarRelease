import * as React from "react";
import Svg, { Path } from "react-native-svg";

function DocIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path
        d="M12.5 2.083v1.25c0 1.179 0 1.768.366 2.134.366.366.956.366 2.134.366h1.25"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.334 13.334V6.667c0-2.357 0-3.536.732-4.268.732-.732 1.911-.732 4.268-.732h3.476c.34 0 .511 0 .664.063.153.064.274.184.515.425l3.19 3.19c.241.241.362.362.425.515.063.153.063.323.063.664v6.81c0 2.357 0 3.535-.732 4.267-.732.733-1.91.733-4.268.733H8.334c-2.357 0-3.536 0-4.268-.733-.732-.732-.732-1.91-.732-4.267z"
        fill="#000"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.666 9.167h6.667m-6.667 2.5h6.667m-6.667 2.5h3.476"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default DocIcon;
