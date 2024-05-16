import { View, Text, Platform, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import GlobalComponent from '../components/GlobalComponent'
import { Ionicons } from '@expo/vector-icons';
import { optionTexts } from '../data';
import { DrawerActions } from '@react-navigation/native';

const HomeScreen = ({navigation}: any) => {

  const [activeSort, setActiveSort] = useState('All');

  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer);
  }

  return (
    <View className='flex-1 bg-white'>

      <GlobalComponent />

      <View style={{ paddingTop: Platform.OS === 'android' ? 20 : 0 }}>
        {/* options */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <View className='flex-row items-center gap-2' style={{marginLeft: 1.5}}>
            <TouchableOpacity onPress={handleOpenDrawer}>
              <View className={'bg-gray-100 px-2 py-1 mr-2 rounded'}>
                <Ionicons name="compass-outline" size={25} color="black" />
              </View>
            </TouchableOpacity>

            {/* option texts */}
            {
              optionTexts.map((option, index) => {
                let isActive = option.text === activeSort;
                let isActiveButtonClass = isActive ? 'bg-black' : 'bg-gray-100';
                let textColorClass = isActive ? 'text-white' : 'text-black';
                return (
                  <TouchableOpacity key={index} onPress={() => setActiveSort(option.text)}>
                    <View className={`rounded-lg px-3 py-2 ${isActiveButtonClass}`}>
                      <Text className={`${textColorClass} text-md font-medium`}>{option.text}</Text>
                    </View>
                  </TouchableOpacity>
                )
              })
            }

            <View className='px-5'>
              <TouchableOpacity>
                <Text className='text-blue-600 text-md font-medium text-base'>Send feedback</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>

      </View>
    </View>
  )
}

export default HomeScreen