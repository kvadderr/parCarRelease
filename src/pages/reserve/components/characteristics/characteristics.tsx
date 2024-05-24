import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextButton } from "../../../../shared/components/buttons";
const LIST_CHARACTERISTICS: { label: string; value: string }[] = [
  {
    label: "Бренд",
    value: "Tesla",
  },
  {
    label: "Тип кузова",
    value: "Седан",
  },
  {
    label: "Привод",
    value: "Передний",
  },
  {
    label: "Каробка передач ",
    value: "АКПП",
  },
  {
    label: "Цвет",
    value: "Белый",
  },
];

const Characteristics = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Характеристики авто</Text>
      {[
        LIST_CHARACTERISTICS.map((item) => (
          <View style={styles.row}>
            <Text style={styles.rowLeft}>{item.label}</Text>
            <Text style={styles.rowRight}>{item.value}</Text>
          </View>
        )),
      ]}
      <TextButton label="Все характеристики" onClick={() => {}} />
    </View>
  );
};

export default Characteristics;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#ffffff",
    marginTop: 12,
  },
  title: {
    marginBottom: 16,
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
    textAlign: "left",
    color: "#000000",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 2,
  },
  rowLeft: {
    width: "50%",
  },
  rowRight: {
    width: "50%",
    color: "#000000",
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 24,
  },
});
