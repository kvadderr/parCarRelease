import { Text, TouchableWithoutFeedback, View } from "react-native"
import { styles } from "./styles";

const MainButton = (props: ButtonProps) => {
  const { onClick, label, isDisable } = props;
  return (
    <TouchableWithoutFeedback onPress={isDisable ? undefined : onClick}>
      <View style={[styles.container, isDisable && { backgroundColor: '#0075CA7A' }]}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>)
}

export default MainButton