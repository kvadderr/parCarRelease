import { View, Text, TouchableWithoutFeedback } from "react-native"
import { styles } from "./styles"
import { Camera, CameraType } from 'react-native-camera-kit';
import { CaptureIcon, FlashIcon, SwitchIcon, CameraOverlay, CloseIcon } from "../../shared/assets/icons/camera";
import { useState } from "react";

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SharedElementStackParamList } from '../../app/routes/ClientStack';

const CameraPage = () => {

  const [isFlash, setIsFlash] = useState(false)
  const [isBack, setIsBack] = useState(false)
  const navigation = useNavigation<NativeStackNavigationProp<SharedElementStackParamList>>();

  return (
    <View style={styles.container}>
      <Camera
        cameraType={isBack ? CameraType.Back : CameraType.Front}
        flash={isFlash ? "on" : "off"}
        torchMode={isFlash ? "on" : "off"}
        style={{ flex: 1 }}
      />
      <CameraOverlay >
      </CameraOverlay>
      <View style={{ position: 'absolute', marginTop: 40, marginLeft: 16 }}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <CloseIcon />
        </TouchableWithoutFeedback>
      </View>
      <View style={{ bottom: 70, gap: 8, position: 'absolute', alignItems: 'center', alignSelf: 'center' }}>
        <Text style={styles.headerText}>Выровняйте лицо посередине</Text>
        <Text style={styles.labelText}>Убедитесь, что ваше лицо находится внутри области снимка, и сделайте фотографию</Text>
        <View style={{ flexDirection: "row", gap: 70, alignItems: 'center', marginTop: 24 }}>
          <TouchableWithoutFeedback onPress={() => setIsBack(!isBack)}>
            <SwitchIcon />
          </TouchableWithoutFeedback>
          <CaptureIcon />
          <TouchableWithoutFeedback style={{ padding: 10 }} onPress={() => setIsFlash(!isFlash)}>
            <FlashIcon />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  )
}

export default CameraPage