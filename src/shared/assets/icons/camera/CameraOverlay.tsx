import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Rect, Defs, ClipPath, Use } from 'react-native-svg';

const { width, height } = Dimensions.get('window');
const maskWidth = width - 32;
const maskHeight = 374;
const maskX = (width - maskWidth) / 2;
const maskY = (height - maskHeight) / 2 - 50;
type Props = {
  children?: React.ReactNode
}
const CameraOverlay = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" viewBox={`0 0 ${width} ${height}`}>
        <Defs>
          <ClipPath id="clip">
            <Rect x="0" y="0" width={width} height={height} />
            <Rect
              x={maskX}
              y={maskY}
              width={maskWidth}
              height={maskHeight}
              rx={14}
            />
          </ClipPath>
        </Defs>
        <Rect
          x="0"
          y="0"
          width={width}
          height={height}
          fill="rgba(0, 0, 0, 0.5)"
          clipPath="url(#clip)"
        >
        </Rect>
        {children}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }
});

export default CameraOverlay;
