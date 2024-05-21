import { Text, View } from "react-native"
import MaskInput, { Masks } from "react-native-mask-input"
import { styles } from "./styles"

type Props = {
  value: string;
  setValue: (value: string) => void;
}

const PhoneInput = (props: Props) => {
  const { value, setValue } = props
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Номер телефона</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}> +7 </Text>
        <View style={{ width: 0.5, height: 36, backgroundColor: '#0000001F' }} />
        <MaskInput
          style={{flex: 1}}
          value={value}
          placeholder='Номер телефона'
          keyboardType='phone-pad'
          mask={Masks.USA_PHONE}
          onChangeText={(masked, unmasked) => {
            setValue(unmasked);
          }}
        />
      </View>
    </View>
  )
}


export default PhoneInput