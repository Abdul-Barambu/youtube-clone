import { View, Text, Platform, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalAccountComponent from '../components/GlobalAccountComponent'
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import AccountVideos from '../components/you/AccountVideos';
import AccountVideosPlaylist from '../components/you/AccountVideosPlaylist';

const You = () => {
  return (
    <View className='flex-1 bg-white'>
      <StatusBar style='dark' />
      <GlobalAccountComponent />

      <ScrollView>
        <View style={{ paddingTop: Platform.OS === 'android' ? 20 : 0, marginLeft: 10 }}>
          {/* name */}
          <View className='flex-row items-center gap-2'>
            <View>
              <MaterialIcons name="account-circle" size={75} color={"purple"} />
            </View>
            <View>
              <Text className='text-2xl font-bold mb-1'>Abdulqadir Barambu</Text>
              <View className='flex-row items-center gap-1'>
                <Text className='text-xs text-gray-500'>@abdulqadirbarambu</Text>
                <Entypo name="dot-single" size={12} color="gray" />
                <Text className='text-xs text-gray-500'>View channel</Text>
                <SimpleLineIcons name="arrow-right" size={10} color="gray" />
              </View>
            </View>
          </View>
          {/* accounts */}
          <View className='mt-2 ml-1'>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className='flex-row gap-2'>
              <View className='flex-row items-center gap-1 bg-gray-100 px-3 pb-1 rounded-full'>
                <MaterialCommunityIcons name="account-box-multiple-outline" size={12} color="black" />
                <Text className='text-xs font-bold text-gray-600'>Switch account</Text>
              </View>
              <View className='flex-row items-center gap-1 bg-gray-100 pb-1 px-3 rounded-full'>
                <FontAwesome6 name="google" size={12} color="black" />
                <Text className='text-xs font-bold text-gray-600'>Google Account</Text>
              </View>
              <View className='flex-row items-center gap-1 bg-gray-100 pb-1 px-3 rounded-full'>
                <MaterialCommunityIcons name="incognito" size={12} color="black" />
                <Text className='text-xs font-bold text-gray-600'>Turn on Incognito</Text>
              </View>
            </ScrollView>
          </View>
          {/* History */}
          <View className='ml-1 mt-6'>
            <View className='flex-row items-center justify-between mb-1'>
              <Text className='text-lg font-bold'>History</Text>
              <TouchableOpacity className='border border-gray-300 py-2 px-3 rounded-full mr-3'>
                <Text className='text-xs text-center font-medium'>View all</Text>
              </TouchableOpacity>
            </View>
            <AccountVideos />
          </View>
          {/* Playlist */}
          <View className='ml-1 mt-8'>
            <View className='flex-row items-center justify-between mb-2'>
              <Text className='text-lg font-bold'>Playlists</Text>
              <TouchableOpacity className='border border-gray-300 py-2 px-3 rounded-full mr-3'>
                <Text className='text-xs text-center font-medium'>View all</Text>
              </TouchableOpacity>
            </View>
            <AccountVideosPlaylist />
          </View>

          {/* other infos */}
          <View className='mt-14'>
            {/* your videos and downloads */}
            <View>
              <TouchableOpacity>
                <View className='flex-row items-center gap-4 mb-5'>
                  <MaterialCommunityIcons name="play-box-outline" size={25} color="black" />
                  <Text className='font-normal' style={{ fontSize: 16 }}>Your videos</Text>
                </View>
              </TouchableOpacity>
              <View className='flex-row items-center justify-between mr-4'>
                <TouchableOpacity>
                  <View className='flex-row items-center gap-4'>
                    <AntDesign name="download" size={21} color="black" />
                    <View>
                      <Text className='font-normal' style={{ fontSize: 16 }}>Downloads</Text>
                      <Text className='font-normal text-gray-500'>35 Videos</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <AntDesign name="checkcircle" size={20} color="black" />
              </View>
            </View>
            {/* line */}
            <View className='bg-gray-200 -ml-5 my-7' style={{ height: 1 }}></View>
            {/* premium */}
            <View>
              <View>
                <TouchableOpacity>
                  <View className='flex-row items-center gap-4 mb-6'>
                    <MaterialCommunityIcons name="movie-open-outline" size={25} color="black" />
                    <Text className='font-normal' style={{ fontSize: 16 }}>Your movies</Text>
                  </View>
                </TouchableOpacity>
                <View className='flex-row items-center justify-between'>
                  <TouchableOpacity>
                    <View className='flex-row items-center gap-4'>
                      <SimpleLineIcons name="social-youtube" size={25} color="black" />
                      <Text className='font-normal' style={{ fontSize: 16 }}>Get YouTube Premium</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* line */}
            <View className='bg-gray-200 -ml-5 my-7' style={{ height: 1 }}></View>
            {/* Time ad feedback */}
            <View className='mb-10'>
              <View>
                <TouchableOpacity>
                  <View className='flex-row items-center gap-4 mb-6'>
                    <MaterialCommunityIcons name="chart-box-outline" size={25} color="black" />
                    <Text className='font-normal' style={{ fontSize: 16 }}>Time watched</Text>
                  </View>
                </TouchableOpacity>
                <View className='flex-row items-center justify-between'>
                  <TouchableOpacity>
                    <View className='flex-row items-center gap-4'>
                      <Ionicons name="help-circle-outline" size={25} color="black" />
                      <Text className='font-normal' style={{ fontSize: 16 }}>Help and feedback</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          {/* end */}

        </View>
      </ScrollView>
    </View>
  )
}

export default You