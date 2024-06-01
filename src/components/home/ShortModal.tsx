import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ShortModal = () => {
  return (
    <View>
      <View className='bg-gray-400 w-14 mx-auto mt-2 h rounded-xl' style={styles.dash}>
        <Text></Text>
      </View>
      <View className='mx-5 mt-4'>
        <View className='flex-row items-center gap-7 mb-3'>
          <MaterialIcons name="outlined-flag" size={27} color="black" />
          <Text className='text-lg'>Report</Text>
        </View>
        <View className='flex-row items-center gap-7 mb-3'>
        <MaterialCommunityIcons name="cancel" size={27} color="black" />
          <Text className='text-lg'>Not interested</Text>
        </View>
        <View className='flex-row items-center gap-7'>
        <AntDesign name="exclamationcircleo" size={27} color="black" />
          <Text className='text-lg'>Send feedback</Text>
        </View>
      </View>
    </View>
  )
}

export default ShortModal

const styles = StyleSheet.create({
  dash: {
    height: 5
  }
})