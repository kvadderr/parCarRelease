import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import IconRus from "../../../../shared/assets/icons/basic/IconCountry";
import { styles } from "./styles";

type Props = {
  title: string;
  numberCar: string;
  time: string;
  showTitle?: boolean;
};

const InfoCar: FC<Props> = ({ title, numberCar, time, showTitle = true }) => {
  return (
    <View style={styles.container}>
      {showTitle && <Text style={styles.title}>{title}</Text>}
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
          <Text style={styles.timeText}>{time}</Text>
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
