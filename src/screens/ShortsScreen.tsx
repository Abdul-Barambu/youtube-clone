import { View, Text, Platform, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { ResizeMode, Video } from 'expo-av'
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const ShortsScreen = () => {

  const videoRef = useRef(null);
  const [sub, setSub] = useState('Subscribe')

  return (
    <View className='flex-1'>
      <StatusBar style='light' />
      <View className='flex-1'>
        <Video
          ref={videoRef}
          source={require('../../assets/videos/football.mp4')}
          useNativeControls
          isLooping
          resizeMode={ResizeMode.COVER}
          shouldPlay
          className='w-full h-full'
        />
        {/* accouunt info */}
        <View className='absolute bottom-5 left-4'>
          {/* account info */}
          <View className='flex-row items-center gap-2'>
            <Image source={require('../../assets/images/football.jpg')} className='w-9 h-9 rounded-full' />
            <Text className='text-white font-bold text-sm'>@Football</Text>
            <Pressable onPress={() => setSub(sub === 'Subscribe' ? 'Subscribed' : 'Subscribe')} className={`${sub === 'Subscribed' ? 'bg-neutral-400' : 'bg-white'} px-3 rounded-full`} style={{ paddingVertical: 7.5 }}>
              <Text className={`${sub === 'Subscribed' ? 'text-white' : 'text-black'} font-medium`} style={{ fontSize: 11 }}>{sub}</Text>
            </Pressable>
          </View>
          {/* description */}
          <View className='mt-2'>
            <Text className='text-white text-base font-medium'>Best  dribbling  today</Text>
          </View>
          {/* music */}
          <View className='flex-row gap-2 items-center mt-1'>
            <Ionicons name="musical-notes-outline" size={20} color="white" />
            <Text className='text-white text-base font-medium'>Original sound</Text>
          </View>
        </View>
        {/* likes, etc */}
        <View className='absolute right-3' style={{ top: '43%' }}>
          {/* icons and texts */}
          <View className='flex-col gap-6'>
            {/* each icon and text */}
            <View>
              <TouchableOpacity>
                <AntDesign name="like1" size={31} color="white" />
                <Text className='text-white font-medium pt-1'>5.3M</Text>
              </TouchableOpacity>
            </View>
            {/* each icon and text */}
            <View>
              <TouchableOpacity>
                <AntDesign name="dislike1" size={31} color="white" />
                <Text className='text-white font-medium pt-1'>Dislike</Text>
              </TouchableOpacity>
            </View>
            {/* each icon and text */}
            <View>
              <TouchableOpacity>
                <MaterialCommunityIcons name="message-reply-text" size={31} color="white" />
                <Text className='text-white font-medium pt-1'>473K</Text>
              </TouchableOpacity>
            </View>
            {/* each icon and text */}
            <View>
              <TouchableOpacity>
                <MaterialCommunityIcons name="share" size={31} color="white" />
                <Text className='text-white font-medium pt-1'>Share</Text>
              </TouchableOpacity>
            </View>
            {/* each icon and text */}
            <View>
              <TouchableOpacity>
                <FontAwesome name="refresh" size={31} color="white" />
                <Text className='text-white font-medium pt-1'>Remix</Text>
              </TouchableOpacity>
            </View>
            {/* logo */}
            <View>
              <Image source={require('../../assets/images/football.jpg')} className='w-10 h-10 rounded-md' />
            </View>
          </View>
        </View>
      </View>
    </View>


    // ##### using webView #####
    // <WebView
    //   source={{ uri: videoUrl }}
    //   style={styles.webview}
    //   javaScriptEnabled={true}
    //   domStorageEnabled={true}
    //   startInLoadingState={true}
    // />


  )
}

export default ShortsScreen