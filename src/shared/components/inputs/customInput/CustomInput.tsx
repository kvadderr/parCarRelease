import { KeyboardTypeOptions, Text, TextInput, View } from "react-native"
import MaskInput, { MaskArray } from 'react-native-mask-input';
import { styles } from "./styles"
import React from "react";

type Props = {
  value: string;
  icon?: React.ReactNode;
  setValue: (value: string) => void;
  mask?: (string | RegExp)[] | MaskArray;
  label: string
  placeholder: string
  keyboardType: KeyboardTypeOptions | undefined
}

const CustomInput = (props: Props) => {
  const { value, setValue, icon, mask, label, placeholder, keyboardType } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <MaskInput
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          onChangeText={(masked, unmasked) => {
            setValue(unmasked);
          }}
          mask={mask}
        />
        { icon && <View style={{ position: 'absolute', right: 20, justifyContent: 'center', height: '100%', alignItems: 'center' }}>{icon}</View>}
      </View>
    </View>
  )
}


export default CustomInput