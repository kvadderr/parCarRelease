import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import IconRus from "../../../../assets/svg-components/IconCountry";

type Props = {
  title: string;
  numberCar: string;
  time: string;
};

const InfoCar: FC<Props> = ({ title, numberCar, time }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.infoCar}>
        <View>
          <Text style={styles.subTitle}>Гос.номер авто</Text>
          <View style={styles.numberCar}>
            <IconRus />
            <Text style={[styles.infoCarText, styles.numberText]}>
              {numberCar}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.subTitle}>Время бронирования</Text>
          <View>
            <Text style={styles.timeText}>{time}</Text>
          </View>
        </View>
      </View>
      <View style={styles.statusCar}>
        <Text style={styles.statusCarText}>
          Бесплатное бронирование 20 минут, далее 8 ₽/мин
        </Text>
      </View>
    </View>
  );
};

export default InfoCar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginBottom: 16,
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 30,
    textAlign: "center",
    color: "#000000",
  },
  infoCar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subTitle: {
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 18,
  },
  numberCar: {
    flexDirection: "row",
    backgroundColor: "#F0F2F5",
    padding: 8,
    borderRadius: 8,
  },
  numberText: {
    marginLeft: 5,
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 18,
    color: "#000000",
  },
  infoCarText: {},
  timeText: {
    marginLeft: 5,
    fontFamily: "Inter",
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 38,
    color: "#000000",
  },
  statusCar: {
    marginTop: 12,
    borderRadius: 16,
    backgroundColor: "rgba(0, 117, 202, 0.1);",
    padding: 12,
    overflow: "hidden",
  },
  statusCarText: {
    marginLeft: 5,
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 18,
    color: "#0075CA",
  },
});
