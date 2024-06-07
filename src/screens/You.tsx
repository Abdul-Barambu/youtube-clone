import { View, Text, Platform } from 'react-native'
import React from 'react'
import GlobalAccountComponent from '../components/GlobalAccountComponent'
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const You = () => {
  return (
    <View className='flex-1 bg-white'>
      <StatusBar style='dark' />
      <GlobalAccountComponent />

      <View style={{ paddingTop: Platform.OS === 'android' ? 20 : 0 }}>
        <View>
          <MaterialIcons name="account-circle" size={22} color={""} />
        </View>
      </View>
    </View>
  )
}

export default You