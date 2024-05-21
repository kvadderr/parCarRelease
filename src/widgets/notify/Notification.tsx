import { View, Text, Image } from "react-native"
import { notificationStatus } from "../../shared/constants/notificationStatus";
import { DocumentStatus } from "../../shared/enum/DocumentStatus";
import { styles } from "./styles";

// Определение интерфейса для Props
type Props = {
  status: keyof typeof DocumentStatus;
}

const Notification = ({ status }: Props) => {
  const statusValue = DocumentStatus[status as keyof typeof DocumentStatus];
  const statusData = notificationStatus.find(item => item.status === statusValue);
  
  return (
    <View style={styles.container}>
      <Image source={statusData?.icon} />
      <View style={{ gap: 16, paddingHorizontal: 22 }}>
        <Text style={styles.title}>{statusData?.title}</Text>
        <Text style={styles.label}>{statusData?.label}</Text>
      </View>
    </View>
  )
}

export default Notification