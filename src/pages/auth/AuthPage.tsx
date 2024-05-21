import { View } from "react-native"
import { LogoIcon } from "../../shared/assets/icons/basic"
import PhoneInput from "../../shared/components/inputs/phoneInput/PhoneInput"
import MainButton from "../../shared/components/buttons/mainButton/MainButton"
import Checkbox from "../../shared/components/checkbox/Checkbox"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { SharedElementStackParamList } from "../../app/routes/ClientStack"

import { styles } from './styles'
import CheckboxItem from "./checkboxText/CheckboxText"
import { useState } from "react"

const AuthPage = () => {

  const navigation = useNavigation<NativeStackNavigationProp<SharedElementStackParamList>>();
  const [phone, setPhone] = useState('')
  const [isTerm, setIsTerm] = useState(true)

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <LogoIcon />
      </View>
      <View style={{ gap: 16 }}>
        <PhoneInput value={phone} setValue={setPhone} />
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <Checkbox children={<CheckboxItem />} setIsChecked={setIsTerm} />
        </View>
      </View>
      <MainButton isDisable={phone.length !== 10 || isTerm === false} onClick={() => navigation.navigate('Code')} label="Получить код" />
    </View>
  )
}

export default AuthPage