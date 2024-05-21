import React, {ActivityIndicator, Text, View} from 'react-native';
import {styles} from './styles';
import SimpleHeader from '../../shared/components/header/simpleHeader/SimpleHeader';
import CustomInput from '../../shared/components/inputs/customInput/CustomInput';
import {useState} from 'react';
import {Masks} from 'react-native-mask-input';
import {MainButton} from '../../shared/components/buttons';
import BottomModal from '../../widgets/modals/BottomModal';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SharedElementStackParamList} from '../../app/routes/ClientStack';
import {VisaIcon} from '../../shared/assets/icons/basic';

const CardAddPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<SharedElementStackParamList>>();

  const [modalVisible, setModalVisible] = useState(false);
  const [card, setCard] = useState('');
  const [name, setName] = useState('');
  const [cardDate, setCardDate] = useState('');
  const [cvv, setCVV] = useState('');

  const MM_YY_MASK = [/\d/, /\d/, '/', /\d/, /\d/]; // MM/YY format
  const CVV_MASK = [/\d/, /\d/, /\d/]; // 3 digits for CVV

  const close = () => {
    setModalVisible(false);
  };

  const handleMainButtonClick = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      navigation.navigate('Status', {status: 'CARD_REJECTED'});
    }, 2000); // 2 секунды задержки
  };

  return (
    <View style={styles.container}>
      <SimpleHeader label="Привязка карты" />
      <View style={{gap: 8}}>
        <CustomInput
          icon={<VisaIcon />}
          keyboardType="numeric"
          label="Номер карты"
          mask={Masks.CREDIT_CARD}
          value={name}
          setValue={setName}
          placeholder="0000 0000 0000 0000"
        />
        <CustomInput
          keyboardType="default"
          label="Имя на карте"
          value={card}
          setValue={setCard}
          placeholder="Иван Иванов"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 8,
          }}>
          <View style={{flex: 1}}>
            <CustomInput
              keyboardType="number-pad"
              mask={MM_YY_MASK}
              label="Месяц / Год"
              value={cardDate}
              setValue={setCardDate}
              placeholder="ММ / ГГ"
            />
          </View>
          <View style={{flex: 1}}>
            <CustomInput
              keyboardType="number-pad"
              mask={CVV_MASK}
              label="CVV"
              value={cvv}
              setValue={setCVV}
              placeholder="000"
            />
          </View>
        </View>
      </View>
      <MainButton label="Привязать карту" onClick={handleMainButtonClick} />
      <BottomModal isVisible={modalVisible} onClose={close}>
        <View style={{gap: 16, marginBottom: 16}}>
          <View style={styles.indicatorContainer}>
            <ActivityIndicator size={'large'} color="#0075CA" />
          </View>
          <View style={{gap: 8, alignItems: 'center'}}>
            <Text style={styles.headerModalText}>
              Идет процесс проверки платежной карты
            </Text>
            <Text style={styles.labelModalText}>
              Среднее время подтверждения 1-3 минуты
            </Text>
          </View>
        </View>
      </BottomModal>
    </View>
  );
};

export default CardAddPage;
