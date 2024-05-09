import { View, Text, Platform, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Navigation';

type NetworkScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Network'>;

const GlobalComponent = () => {

  const navigation = useNavigation<NetworkScreenNavigationProp>()

  const handleNetworkScreen = () => {
    navigation.navigate("Network")
  }

  return (
    <SafeAreaView style={{ marginTop: Platform.OS === 'ios' ? 40 : 0, backgroundColor: 'white' }}>
      <View className='mt-3 mx-5 flex-row justify-between items-center'>
        {/* logo */}
        <View className='flex-row items-center gap-1'>
          <AntDesign name="youtube" size={40} color="red" />
          <Text style={styles.youtubeText} className='text-xl'>YouTube</Text>
        </View>
        {/* icons */}
        <View className='flex-row gap-4'>
          <MaterialCommunityIcons onPress={handleNetworkScreen} name="access-point-network" size={27} color="black" />
          <Ionicons name="notifications-outline" size={27} color="black" />
          <EvilIcons name="search" size={27} color="black" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default GlobalComponent

const styles = StyleSheet.create({
  youtubeText: {
    fontFamily: 'FreemanRegular'
  }
})