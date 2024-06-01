import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { youtubeVideos } from '../../data'
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import YoutubeIframe from 'react-native-youtube-iframe';

const HomeYoutubeVideos = () => {
    return (
        <View>
            {
                youtubeVideos.map((video, index) => {
                    return (
                        <View className='mt-8' key={index}>
                            {/* video */}
                            <View className='relative'>
                                <View>
                                    <YoutubeIframe videoId={video.link} height={230} />
                                </View>
                                {/* time */}
                                <View className='absolute bottom-5 right-2 px-2 py-1 rounded' style={styles.background}>
                                    <Text className='text-white font-bold'>{video.time}</Text>
                                </View>

                            </View>
                            {/* logo and text */}
                            <View className='flex-row justify-between mx-3'>
                                <Image source={video.image} className='w-10 h-10 rounded-full' />
                                {/* Text */}
                                <View>
                                    <View>
                                        <Text className='text-base'>{video.text.slice(0, 30)}...</Text>
                                    </View>
                                    <View className='flex-row items-center justify-center'>
                                        <Text className='text-neutral-500 text-sm'>{video.name.slice(0, 10)}...</Text>
                                        <Entypo name="dot-single" size={10} color="gray" />
                                        <Text className='text-neutral-500 text-sm'> {video.views} </Text>
                                        <Entypo name="dot-single" size={10} color="gray" />
                                        <Text className='text-neutral-500 text-sm'> {video.uploaded}</Text>
                                    </View>
                                </View>
                                {/* dots */}
                                <View>
                                    <MaterialCommunityIcons name="dots-vertical" size={20} color="black" />
                                </View>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default HomeYoutubeVideos

const styles = StyleSheet.create({
    background: {
      backgroundColor: '#1f2937',
      opacity: 0.7,
    },
  });