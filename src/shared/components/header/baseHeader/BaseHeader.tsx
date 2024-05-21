import { View, Text, TouchableWithoutFeedback } from "react-native"
import { BackIcon } from "../../../assets/icons/basic"
import { styles } from "./styles"

const BaseHeader = (props: HeaderProps) => {
  const { onClick, label } = props;
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <BackIcon />
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default BaseHeader