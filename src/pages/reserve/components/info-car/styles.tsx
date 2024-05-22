import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {},
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
    marginTop: 5,
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
    textAlign: "right",
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
