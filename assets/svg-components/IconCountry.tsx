import * as React from "react";
import Svg, { G, Mask, Path, Defs, ClipPath, Rect } from "react-native-svg";

function IconRus() {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <G clipPath="url(#clip0_285_1353)">
        <Mask
          id="a"
          style={{
            maskType: "luminance",
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={16}
          height={16}
        >
          <Path fill="#fff" d="M0 0H16V16H0z" />
        </Mask>
        <G mask="url(#a)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0v16h16V0H0z"
            fill="#3D58DB"
          />
          <Mask
            id="b"
            style={{
              maskType: "luminance",
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={16}
            height={16}
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0v16h16V0H0z"
              fill="#fff"
            />
          </Mask>
          <G mask="url(#b)" fillRule="evenodd" clipRule="evenodd">
            <Path d="M0 0v5.333h16V0H0z" fill="#F7FCFF" />
            <Path d="M0 10.666V16h16v-5.334H0z" fill="#C51918" />
          </G>
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_285_1353">
          <Rect width={16} height={16} rx={8} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default IconRus;
