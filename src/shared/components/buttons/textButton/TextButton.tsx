import { Text, TouchableWithoutFeedback, View } from "react-native"
import { styles } from "./styles";

const TextButton = (props: ButtonProps) => {
  const { onClick, label } = props;
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>)
}

export default TextButton