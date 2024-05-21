import { View, Text, TouchableWithoutFeedback } from "react-native"
import { BackIcon } from "../../../assets/icons/basic"
import { styles } from "./styles"

const SimpleHeader = (props: HeaderProps) => {
  const { label } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

export default SimpleHeader