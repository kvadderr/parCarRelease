import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import DocIcon from "../../../../shared/assets/icons/basic/DocIcon";
import RightArrowIcon from "../../../../shared/assets/icons/doc/RightArrowIcon";

const DownloadDocs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Документы</Text>
      <TouchableOpacity style={styles.rowBlock}>
        <DocIcon />
        <View style={styles.rowContent}>
          <Text style={styles.rowContentTitle}>Скачать документ</Text>
          <Text>Акт приемки автомобиля</Text>
        </View>
        <RightArrowIcon />
      </TouchableOpacity>
    </View>
  );
};

export default DownloadDocs;

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
  rowBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    borderRadius: 12,
    backgroundColor: "#F0F2F5",
    overflow: "hidden",
    alignItems: "center",
    padding: 9,
  },
  rowContent: {
    flex: 1,
    marginLeft: 10,
  },
  rowContentTitle: {
    fontFamily: "Inter",
    fontSize: 14,
    lineHeight: 20,
    color: "#000000",
  },
});
