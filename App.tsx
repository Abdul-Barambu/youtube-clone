import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigation, StackNavigation } from './src/navigation/Navigation';

export default function App() {

  const [loaded] = useFonts({
    FreemanRegular: require("./assets/fonts/Freeman-Regular.ttf")
  })

  if (!loaded) {
    return null;
  }

  return (

      <NavigationContainer>
        <DrawerNavigation />
        <StatusBar style='auto' />
      </NavigationContainer>
  );
}
