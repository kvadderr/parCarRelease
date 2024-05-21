import { useState } from "react"
import { ActivityIndicator, View } from "react-native"
import { RouteProp } from "@react-navigation/native";
import { SharedElementStackParamList } from "../../app/routes/ClientStack";
import { styles } from "./styles"
import SimpleHeader from "../../shared/components/header/simpleHeader/SimpleHeader"
import MainButton from "../../shared/components/buttons/mainButton/MainButton"
import Notification from "../../widgets/notify/Notification"
import { DocumentStatus } from "../../shared/enum/DocumentStatus"
import BottomModal from "../../widgets/modals/BottomModal"
import CentralModal from "../../widgets/modals/CentralModal"
import { TextButton } from "../../shared/components/buttons";

type StatusScreenRouteProp = RouteProp<SharedElementStackParamList, 'Status'>;

type Props = {
  route: StatusScreenRouteProp
}
const DocumentStatusPage = ({ route }: Props) => {
  const { status } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [centralModalVisible, setCentralModalVisible] = useState(false);
  const close = () => {
    setModalVisible(false)
  }
  const centralClose = () => {
    setCentralModalVisible(false)
  }

  const handleMainButtonClick = () => {
    setCentralModalVisible(true);
    setTimeout(() => {
      setCentralModalVisible(false);
      setModalVisible(true);
    }, 2000); // 2 секунды задержки
  }

  const RenderBtn = () => {
    switch (status) {
      case 'VERIFY_WAITING':
        return <MainButton label="Проверить текущий статус" onClick={handleMainButtonClick} />
      case 'REJECTED':
        return <View style={{ gap: 8 }}>
          <MainButton label="Пройти повторно" onClick={() => { }} />
          <TextButton label="Изменить номер" onClick={() => { }} />
        </View>
      case 'CARD_REJECTED':
        return <View style={{ gap: 8 }}>
          <MainButton label="Попробовать снова" onClick={() => { }} />
          <TextButton label="Служба поддержки" onClick={() => { }} />
        </View>
      default:
        break;
    }
  }

  return (
    <View style={styles.container}>
      <View style={[{ gap: 64 }, status !== 'VERIFY_WAITING' && { marginTop: 80 }]}>
        {status === "VERIFY_WAITING" && <SimpleHeader label="Статус документа" />}
        <Notification status={status} />
      </View>
      <RenderBtn />
      <BottomModal isVisible={modalVisible} onClose={close}>
        <View style={{ gap: 48 }}>
          <Notification status={'WAITING'} />
          <MainButton label="Понятно" onClick={close} />
        </View>
      </BottomModal>
      <CentralModal isVisible={centralModalVisible} onClose={centralClose}>
        <ActivityIndicator size={"large"} color="#818C99" />
      </CentralModal>
    </View>
  )
}

export default DocumentStatusPage