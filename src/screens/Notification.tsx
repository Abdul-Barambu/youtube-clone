import { View, Text, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import NotGloCom from '../components/notification/NotGloCom'
import NotificationsList from '../components/notification/NotificationsList'

const Notification = () => {

  const [all, setAll] = useState(true)
  const [mention, setMention] = useState(false)

  const handleAll = () => {
    setAll(true)
    setMention(false)
  }

  const handleMention = () => {
    setAll(false)
    setMention(true)
  }

  return (
    <View className='flex-1 bg-white'>

      <NotGloCom />

      <View className='mx-4' style={{marginTop: Platform.OS === 'ios' ? 0 : 40}}>
        <View className='flex-row items-center gap-2'>
          <TouchableOpacity onPress={handleAll}>
            <Text className={`${all ? 'bg-black text-white' : 'bg-gray-300 text-black'} px-4 py-1 rounded-lg text-lg font-medium`}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMention}>
            <Text className={`${mention ? 'bg-black text-white' : 'bg-gray-300 text-black'} px-4 py-1 rounded-lg text-lg font-medium`}>Mentions</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* notification */}
      <ScrollView>
        <NotificationsList />
      </ScrollView>
    </View>
  )
}

export default Notification