import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalComponent from './src/components/GlobalComponent';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    FreemanRegular: require("./assets/fonts/Freeman-Regular.ttf")
  })

  if(!loaded){
    return null;
  }

  return (
    <View className='flex-1'>
        <GlobalComponent />
        <Navigation />
        <StatusBar style='auto' />
    </View>
  );
}
