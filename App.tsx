import { SafeAreaView, StatusBar } from 'react-native';
import { ClientStack } from './src/app/routes/ClientStack';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar hidden />
        <ClientStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
