import { useCallback, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import InfoCar from "./components/info-car/InfoCar";
import DetailInfoCar from "./components/detailInfoCar";
import { MainButton, TextButton } from "../../shared/components/buttons";

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
        snapPoints={["28", "83"]}
        backgroundStyle={{ backgroundColor: "#F0F2F5" }}
        handleStyle={styles.handleStyle}
      >
        <View style={styles.wrapScroll}>
          <BottomSheetScrollView>
            <View style={{ borderRadius: 16, overflow: "hidden" }}>
              {!fullInfo && (
                <InfoCar
                  time="22:31"
                  title="Tesla Model X"
                  numberCar="V 932 RC 198"
                />
              )}
              {fullInfo && <DetailInfoCar />}
            </View>
          </BottomSheetScrollView>
        </View>

        {fullInfo && (
          <View style={styles.buttonPanel}>
            <MainButton label="Начать осмотр авто" onClick={() => {}} />
            <TextButton label="Отменить бронь" onClick={() => {}} />
          </View>
        )}
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapScroll: {
    flex: 1,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: "hidden",
  },
  buttonPanel: {
    paddingHorizontal: 16,
    paddingTop: 16,
    marginTop: 10,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  handleStyle: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});

export default Reserve;
