import { View, Text, Platform } from 'react-native'
import React from 'react'
import GlobalComponent from '../components/GlobalComponent'

const Subscription = () => {
  return (
    <View className='flex-1 bg-white'>

      <GlobalComponent />

      <View style={{ paddingTop: Platform.OS === 'android' ? 20 : 0 }}>
        <Text>SubscriptionScreen</Text>
      </View>
    </View>
  )
}

export default Subscription