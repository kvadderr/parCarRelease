import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import InfoCar from "../info-car/InfoCar";
import TextButton from "../../../../shared/components/buttons/textButton/TextButton";
import { MainButton } from "../../../../shared/components/buttons";
import { lightning } from "../../../../shared/assets/icons/basic";
import { car } from "../../../../shared/assets/img";
import LightIcon from "../../../../shared/assets/icons/basic/lightIcon";
import VolumeIcon from "../../../../shared/assets/icons/basic/volumeIcon";

function DetailInfoCar() {
  return (
    <>
      <View>
        <Text style={styles.title}>Tesla Model X</Text>
        <View style={styles.totalInfo}>
          <View style={[styles.grayBlock, styles.speed]}>
            <Image source={lightning} style={styles.lightning} />
            <Text style={styles.speedText}> 420</Text>
            <Text style={styles.speedTextGrey}>км</Text>
            <Text style={styles.speedDot} />
            <Text style={styles.speedText}>67</Text>
            <Text style={styles.speedTextGrey}>%</Text>
          </View>
          <View style={[styles.blueBlock, styles.class]}>
            <Text style={styles.classText}>Эконом</Text>
          </View>
        </View>
        <ImageBackground source={car} style={styles.imageCar} />
        <InfoCar
          time="22:31"
          title="Tesla Model X"
          numberCar="V 932 RC 198"
          showTitle={false}
        />
        <View style={styles.actions}>
          <View style={[styles.grayBlock, styles.actionsItem]}>
            <LightIcon />
            <Text style={styles.actionsText}>Поморгать авто</Text>
          </View>
          <View style={[styles.grayBlock, styles.actionsItem]}>
            <VolumeIcon />
            <Text style={styles.actionsText}>Подать сигнал</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttomPanel}>
        <MainButton label="Начать осмотр авто" onClick={() => {}} />
        <TextButton label="Отменить бронь" onClick={() => {}} />
      </View>
    </>
  );
}

export default DetailInfoCar;

const styles = StyleSheet.create({
  title: {
    marginBottom: 16,
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 30,
    textAlign: "center",
    color: "#000000",
  },
  grayBlock: {
    flexDirection: "row",
    borderRadius: 8,
    backgroundColor: "#F0F2F5",
    paddingHorizontal: 12,
    paddingVertical: 12,
    overflow: "hidden",
  },
  blueBlock: {
    borderRadius: 8,
    backgroundColor: "#0075CA",
    paddingHorizontal: 12,
    paddingVertical: 12,
    overflow: "hidden",
    marginLeft: 8,
  },
  classText: {
    color: "#ffffff",
    fontFamily: "Inter",
    fontSize: 12,
    lineHeight: 12,
    fontWeight: "700",
  },
  totalInfo: {
    flexDirection: "row",
    justifyContent: "center",
  },
  speed: {
    flexDirection: "row",
    alignItems: "center",
  },
  speedText: {
    marginHorizontal: 3,
    fontFamily: "Inter",
    fontSize: 12,
    lineHeight: 12,
    fontWeight: "700",
    color: "#000000",
  },
  speedDot: {
    width: 4,
    height: 4,
    backgroundColor: "#000000",
    borderRadius: 50,
    marginHorizontal: 3,
  },
  speedTextGrey: {
    color: "#98A2B3",
    lineHeight: 12,
    fontSize: 12,
  },
  lightning: {
    width: 8,
    height: 12,
  },
  imageCar: {
    marginTop: 20,
    marginBottom: 30,
    width: "100%",
    height: 120,
  },
  actions: {
    marginVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  actionsText: {
    marginLeft: 3,
    fontFamily: "Inter",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    color: "#000000",
  },
  actionsItem: {
    width: "48%",
    alignItems: "center",
    borderRadius: 16,
  },
});
