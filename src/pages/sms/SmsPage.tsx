import { View, Text } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import { styles } from './styles';
import { BaseHeader } from '../../shared/components/header';
import { MainButton, TextButton } from '../../shared/components/buttons';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SharedElementStackParamList } from '../../app/routes/ClientStack';

const SmsPage = () => {

  const [counter, setCounter] = useState(60);
  const [isSendSMS, setIsSendSMS] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<SharedElementStackParamList>>();
  useEffect(() => {
    let interval: any;
    if (isSendSMS) {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isSendSMS]);

  const handleResendClick = () => {
    if (!isSendSMS) { setIsSendSMS(true) }
  };

  return (
    <View style={styles.container}>
      <BaseHeader label='Введите код' onClick={() => { }} />
      <View style={{ marginTop: 64, gap: 16 }}>
        <OtpInputs
          handleChange={() => { }}
          numberOfInputs={4}
          clearTextOnFocus
          autofillFromClipboard={false}
          style={{ flexDirection: 'row', justifyContent: 'center', gap: 8 }}
          inputStyles={styles.otpInput}
          focusStyles={{
            borderWidth: 2,
            borderColor: '#0075CA',
            borderRadius: 13
          }}
        />
        <View>
          <Text style={styles.label}>Введите смс код отправленный на ваш номер</Text>
          <Text style={styles.phoneLabel}>+7 (702) 333 31 31</Text>
        </View>
      </View>
      <View style={{ marginTop: 42, gap: 8 }}>
        <MainButton label='Подтвердить' onClick={() => navigation.navigate('Verify')} />
        <TextButton
          label={`Отправить код повторно${isSendSMS ? ` ${counter} сек` : ''}`}
          onClick={handleResendClick} />
      </View>
    </View>
  )
}

export default SmsPage