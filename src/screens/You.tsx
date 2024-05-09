import { View, Text, Platform } from 'react-native'
import React from 'react'
import GlobalAccountComponent from '../components/GlobalAccountComponent'

const You = () => {
  return (
    <View className='flex-1 bg-white'>

      <GlobalAccountComponent />

      <View style={{ paddingTop: Platform.OS === 'android' ? 20 : 0 }}>
        <Text>HomeScreen</Text>
      </View>
    </View>
  )
}

export default You