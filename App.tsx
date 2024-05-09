import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Navigation from './src/navigation/Navigation';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/navigation/Navigation';

export default function App() {

  const [loaded] = useFonts({
    FreemanRegular: require("./assets/fonts/Freeman-Regular.ttf")
  })

  if (!loaded) {
    return null;
  }

  return (

      <NavigationContainer>
        <StackNavigation />
        <StatusBar style='auto' />
      </NavigationContainer>
  );
}
