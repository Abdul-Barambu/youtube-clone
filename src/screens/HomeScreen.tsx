import { View, Text, Platform } from 'react-native'
import React from 'react'
import GlobalComponent from '../components/GlobalComponent'

const HomeScreen = () => {
  return (
    <View className='flex-1 bg-white'>

      <GlobalComponent />

      <View style={{ paddingTop: Platform.OS === 'android' ? 20 : 0 }}>
        <Text>HomeScreen</Text>
      </View>
    </View>
  )
}

export default HomeScreen