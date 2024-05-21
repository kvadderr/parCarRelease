import { View, Text, Linking } from "react-native"
import { styles } from "./styles"

const CheckboxItem = () => {

  const onPress = () => {
    Linking.openURL('https://google.com')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Я согласен c условиями компании</Text>
      <Text style={styles.label}>Прочитал и ознокомлен с <Text onPress={onPress} style={{ textDecorationLine: 'underline', color: '#0075CA', }}> политикой конфиденциальности</Text> компании</Text>
    </View>
  )
}

export default CheckboxItem