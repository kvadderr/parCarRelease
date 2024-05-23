import * as React from "react";
import Svg, { Path } from "react-native-svg";

function LightIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.074 12.5a5.717 5.717 0 01-.491-2.33c0-3.086 2.425-5.587 5.417-5.587 2.991 0 5.416 2.501 5.416 5.588 0 .83-.175 1.62-.49 2.328"
        fill="#98A2B3"
      />
      <Path
        d="M5.074 12.5a5.717 5.717 0 01-.491-2.33c0-3.086 2.425-5.587 5.417-5.587 2.991 0 5.416 2.501 5.416 5.588 0 .83-.175 1.62-.49 2.328"
        stroke="#98A2B3"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M10 1.666v.833M18.333 9.999H17.5M2.5 9.999h-.833M15.892 4.106l-.59.59M4.698 4.697l-.59-.59"
        stroke="#98A2B3"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.098 16.088c.842-.272 1.18-1.043 1.275-1.818.028-.232-.163-.424-.396-.424H7.064a.402.402 0 00-.406.445c.093.773.328 1.339 1.22 1.797m4.22 0h-4.22 4.22zm0 0c-.101 1.62-.57 2.263-2.092 2.245-1.628.03-2.003-.764-2.128-2.245"
        fill="#98A2B3"
      />
      <Path
        d="M12.098 16.088c.842-.272 1.18-1.043 1.275-1.818.028-.232-.163-.424-.396-.424H7.064a.402.402 0 00-.406.445c.093.773.328 1.339 1.22 1.797m4.22 0h-4.22m4.22 0c-.101 1.62-.57 2.263-2.092 2.245-1.628.03-2.003-.764-2.128-2.245"
        stroke="#98A2B3"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default LightIcon;
