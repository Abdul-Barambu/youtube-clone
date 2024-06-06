import { View, Text, Platform, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import GlobalComponent from '../components/GlobalComponent'
import { optionSub, subs } from '../data'
import HomeYoutubeVideos from '../components/home/HomeYoutubeVideos'

const Subscription = () => {

  const [activeSort, setActiveSort] = useState('All');

  return (
    <View className='flex-1 bg-white'>

      <GlobalComponent />

      <ScrollView>
        <View style={{ paddingTop: Platform.OS === 'android' ? 15 : 0 }}>
          {/* channels image */}
          <View className='flex-row'>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {
                subs.map((sub, index) => {
                  return (
                    <View key={index}>
                      <Image source={sub.image} className='w-14 h-14 rounded-full ml-4' />
                      <Text className='text-xs ml-4'>{sub.name.slice(0, 8)}...</Text>
                    </View>
                  )
                })
              }
            </ScrollView>
            <View className='px-5 justify-center mb-4'>
              <TouchableOpacity>
                <Text className='text-blue-600 font-medium text-sm'>All</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* scroll texts */}
          <View className='mt-5'>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {
                optionSub.map((option, index) => {
                  let isActive = option.text === activeSort;
                  let isActiveButtonClass = isActive ? 'bg-black' : 'bg-gray-100';
                  let textColorClass = isActive ? 'text-white' : 'text-black';
                  return (
                    <TouchableOpacity key={index} onPress={() => setActiveSort(option.text)}>
                      <View className={`rounded-lg px-3 py-2 mx-1 ${isActiveButtonClass} ${option.text === 'All' ? 'ml-4' : ''}`}>
                        <Text className={`${textColorClass} text-md font-medium`}>{option.text}</Text>
                      </View>
                    </TouchableOpacity>
                  )
                })
              }

              <View className='px-5 mt-1'>
                <TouchableOpacity>
                  <Text className='text-blue-600 font-medium text-sm'>Settings</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>

          {/* subs channels videos */}
          <View>
            <HomeYoutubeVideos />
          </View>

        </View>
      </ScrollView>
    </View>
  )
}

export default Subscription