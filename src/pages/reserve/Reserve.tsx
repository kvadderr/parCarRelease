import { useCallback, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import InfoCar from "./components/info-car/InfoCar";
import DetailInfoCar from "./components/detail-info-car";

const Reserve = () => {
  const [fullInfo, setFullInfo] = useState<boolean>(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleSheetChanges = useCallback((index: number) => {
    setFullInfo(index === 1);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        // enableDynamicSizing={true}
        animateOnMount={true}
        snapPoints={["28", "82"]}
      >
        <BottomSheetView style={styles.contentContainer}>
          {!fullInfo && (
            <InfoCar
              time="22:31"
              title="Tesla Model X"
              numberCar="V 932 RC 198"
            />
          )}
          {fullInfo && <DetailInfoCar />}
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});

export default Reserve;
