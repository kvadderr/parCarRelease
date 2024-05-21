import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthPage from '../../pages/auth/AuthPage';
import VerifyPage from '../../pages/verify/VerifyPage';
import DocumentStatusPage from '../../pages/documentStatus/DocumentStatusPage';
import CardAddPage from '../../pages/card/CardAdd';
import CameraPage from '../../pages/camera/CameraPage';
import SmsPage from '../../pages/sms/SmsPage';
import Reserve from '../../pages/reserve/Reserve.tsx';

import {DocumentStatus} from '../../shared/enum/DocumentStatus';

export type SharedElementStackParamList = {
  Auth: undefined;
  Audio: undefined;
  Code: undefined;
  Verify: undefined;
  Modal: undefined;
  Status: {status: keyof typeof DocumentStatus};
  Camera: undefined;
  CardAdd: undefined;
  Reserve: undefined;
};

export const ClientStack = () => {
  const Stack = createNativeStackNavigator<SharedElementStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
      <Stack.Screen name="Reserve" component={Reserve} />
      <Stack.Screen name="Auth" component={AuthPage} />
      <Stack.Screen name="Verify" component={VerifyPage} />
      <Stack.Screen name="Status" component={DocumentStatusPage} />
      <Stack.Screen name="CardAdd" component={CardAddPage} />
      <Stack.Screen name="Camera" component={CameraPage} />
      <Stack.Screen name="Code" component={SmsPage} />
    </Stack.Navigator>
  );
};
