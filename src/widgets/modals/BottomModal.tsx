import { useState, useEffect, useRef } from "react"
import { View, Text, TouchableOpacity, Animated, Dimensions, Modal, TouchableWithoutFeedback } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { SharedElementStackParamList } from "../../app/routes/ClientStack"
import Notification from "../notify/Notification"
import { DocumentStatus } from "../../shared/enum/DocumentStatus"
import MainButton from "../../shared/components/buttons/mainButton/MainButton"

type Props = {
  isVisible: boolean,
  onClose: () => void,
  children: React.ReactNode
}

const screenHeight = Dimensions.get('window').height;


const BottomModal = (props: Props) => {

  const { isVisible, onClose, children } = props
  const navigation = useNavigation<NativeStackNavigationProp<SharedElementStackParamList>>();
  const animation = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    toggleModal();
  }, [isVisible]);

  const toggleModal = () => {
    if (isVisible) {
      setVisible(true);
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start(() => setVisible(false));
    }
  };

  const modalY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [screenHeight, 20]
  });


  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          justifyContent: 'flex-end'
        }}
        activeOpacity={1}
        onPressOut={onClose}
      >
        <Animated.View
          style={{
            maxHeight: screenHeight - 40,
            transform: [{ translateY: modalY }],
            backgroundColor: 'white',
            borderRadius: 24,
            padding: 16,
            paddingTop: 32,
            marginHorizontal: 10,
            marginBottom:38
          }}
        >
          <TouchableOpacity activeOpacity={1} onPress={(e) => e.stopPropagation}>
            {children}
          </TouchableOpacity>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  )
}

export default BottomModal