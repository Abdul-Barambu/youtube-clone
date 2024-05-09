import { View, Text, Platform } from 'react-native'
import React from 'react'

const ShortsScreen = () => {
  return (
    <View className='flex-1 bg-white' style={{paddingTop: Platform.OS === 'android' ? 20 : 0}}>
      <Text>ShortsScreen</Text>
    </View>
  )
}

export default ShortsScreen