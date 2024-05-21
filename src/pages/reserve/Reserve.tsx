import { useCallback, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import InfoCar from "./components/InfoCar";

const Reserve = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        enableDynamicSizing={true}
        animateOnMount={true}
        // snapPoints={[240, "90%"]}
      >
        <BottomSheetView style={styles.contentContainer}>
          <InfoCar
            time="22:31"
            title="Tesla Model X"
            numberCar="V 932 RC 198"
          />
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
