import { View, Text, TouchableWithoutFeedback } from "react-native"
import { DocumentDTO } from "../../../../@types/entity/DocumentDTO"
import { styles } from "./styles"
import RightArrowIcon from "../../../assets/icons/doc/RightArrowIcon"
import { SuccessIcon } from "../../../assets/icons/doc"

type Props = {
  document: DocumentDTO,
  onClick?: () => void;
}

const VerificationCard = ({ document, onClick }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <View style={[styles.iconContainer, document.isSuccess && { backgroundColor: "#D9EFE0" }]}>
            {document.isSuccess ? <SuccessIcon /> : document.icons}
          </View>
          <View style={{ gap: 2 }}>
            <Text style={styles.header}>{document.title}</Text>
            <Text style={[styles.label, document.isSuccess && { color: "#0075CA" }]}>
              {document.isSuccess ? "Фото загружено" : document.description}
            </Text>
          </View>
        </View>
        <RightArrowIcon />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default VerificationCard