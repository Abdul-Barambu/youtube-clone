import { View, Text, Platform, TouchableOpacity, ScrollView, Image, StyleSheet, } from 'react-native'
import React, { useState } from 'react'
import GlobalComponent from '../components/GlobalComponent'
import { Ionicons } from '@expo/vector-icons';
import { optionTexts } from '../data';
import { DrawerActions } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import YoutubeIframe from 'react-native-youtube-iframe';
import HomeShortsVideos from '../components/home/HomeShortsVideos';
import HomeYoutubeVideos from '../components/home/HomeYoutubeVideos';

const HomeScreen = ({ navigation }: any) => {

  const [activeSort, setActiveSort] = useState('All');

  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer);
  }

  const text = 'Udemy - Free courses on udemy'
  const text2 = 'to help you reach your potential'
  const text3 = 'www.udemy.com/online-courses/programming'

  return (
    <View className='flex-1 bg-white'>

      <GlobalComponent />

      <ScrollView>
        <View style={{ paddingTop: Platform.OS === 'android' ? 20 : 0 }}>
          {/* options */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            <View className='flex-row items-center gap-2' style={{ marginLeft: 1.5 }}>
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

        {/* ads */}
        <View className='mt-2'>
          {/* video */}
          <View>
            <View className='relative'>
              <YoutubeIframe videoId='9JSYB59QmZw' height={225} />
            </View>
            <View className='absolute bg-black p-1 bottom-9 right-2'>
              <Fontisto name="checkbox-active" size={24} color="white" />
            </View>
          </View>
          {/* text */}
          <View className='flex-row justify-between mx-4'>
            {/* logo */}
            <View className='relative'>
              <View>
                <FontAwesome name="chevron-up" size={24} color="#A32CC4" />
              </View>
              <View className='absolute' style={{ bottom: Platform.OS === 'ios' ? 19 : 12 }}>
                <Text className='font-black m-0 p-0 bottom-0' style={{ fontSize: Platform.OS === 'ios' ? 30 : 36 }}>U</Text>
              </View>
            </View>
            {/* texts */}
            <View>
              <Text className='text-lg m-0 p-0'>{text}</Text>
              <Text className='text-lg'>{text2.slice(0, 28)}. . .</Text>
              <Text className='text-xs'><Text className='font-bold'>Sponsored . </Text> {text3.slice(0, 28)} . . .</Text>
            </View>
            {/* dots */}
            <View className='mt-2'>
              <MaterialCommunityIcons name="dots-vertical" size={25} color="gray" />
            </View>
          </View>
          {/* buttons */}
          <View className='flex-row ml-4 mr-5 mt-3'>
            <TouchableOpacity className='w-1/2 border border-gray-300 py-1 rounded-full items-center'>
              <Text className='text-blue-600 font-medium text-base tracking-wide'>Watch</Text>
            </TouchableOpacity>
            <TouchableOpacity className='w-1/2 ml-1 bg-blue-600 py-1 rounded-full items-center'>
              <Text className='text-white font-bold text-lg tracking-wide'>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* end */}

        {/* 1 video */}
        <View className='mt-16'>
          {/* video */}
          <View className='relative'>
            <View>
              <YoutubeIframe videoId='fjeczXPnIHg' height={230} />
            </View>
            {/* time */}
            <View className='absolute bottom-5 right-2 px-2 py-1 rounded' style={styles.background}>
              <Text className='text-white font-bold'>4:30</Text>
            </View>

          </View>
          {/* logo and text */}
          <View className='flex-row justify-between mx-3'>
            <Image source={require('../../assets/images/zakir.jpeg')} className='w-10 h-10 rounded-full' />
            {/* Text */}
            <View>
              <View>
                <Text className='text-base'>Music in islam - Dr Zakir Naik</Text>
              </View>
              <View className='flex-row items-center justify-center'>
                <Text className='text-neutral-500 text-sm'>Dr Zakir Naik</Text>
                <Entypo name="dot-single" size={10} color="gray" />
                <Text className='text-neutral-500 text-sm'> 1.4K views </Text>
                <Entypo name="dot-single" size={10} color="gray" />
                <Text className='text-neutral-500 text-sm'> 4 months ago</Text>
              </View>
            </View>
            {/* dots */}
            <View>
              <MaterialCommunityIcons name="dots-vertical" size={20} color="black" />
            </View>
          </View>
        </View>
        {/* end */}


        {/* SHORTS */}
        <View className='mt-16'>
          {/* text */}
          <View className='ml-7 flex-row items-center'>
            <Fontisto name="flash" size={33} color="red" />
            <Text className='ml-3 text-xl font-bold'>Shorts</Text>
          </View>
          {/* shorts videos */}
          <View className='mx-2'>
            <HomeShortsVideos />
          </View>
        </View>
        
        {/* Youtube videos */}
        <View>
          <HomeYoutubeVideos />
        </View>
        {/* end */}

      </ScrollView>

    </View >
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#1f2937',
    opacity: 0.7,
  },
});