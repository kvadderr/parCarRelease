import { View, Image, Text, ActivityIndicator } from "react-native"
import { BaseHeader } from "../../shared/components/header"
import { styles } from "./styles"
import { profileIcon } from "../../shared/assets/icons/doc"
import MainButton from "../../shared/components/buttons/mainButton/MainButton"
import VerificationCard from "../../shared/components/cards/verificationCard/VerificationCard"
import { documentList } from "../../shared/constants/documentList"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { SharedElementStackParamList } from "../../app/routes/ClientStack"

const VerifyPage = () => {

  const navigation = useNavigation<NativeStackNavigationProp<SharedElementStackParamList>>();
  const onClick = (isSuccess: boolean, index: number) => {
    if (isSuccess === true) {
      navigation.navigate('Status', { status: index === 0 ? 'REJECTED' : 'VERIFY_WAITING' })
    } 
    else navigation.navigate('Camera')
  }
  return (
    <View style={styles.container}>
      <BaseHeader onClick={() => { }} label="Верификация" />
      <Image source={profileIcon} style={{ alignSelf: 'center' }} />
      <Text style={styles.header}>Подтвердите свою личность с помощью документов</Text>
      <View style={{ gap: 8 }}>
        {documentList.map((document, index) => (
          <VerificationCard document={document} key={index} onClick={() => onClick(document.isSuccess, index)} />
        ))}
      </View>
      <MainButton onClick={() => navigation.navigate('CardAdd')} label="Отправить на проверку" />
    </View>
  )
}

export default VerifyPage