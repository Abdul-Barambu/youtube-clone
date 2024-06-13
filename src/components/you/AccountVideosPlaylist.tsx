import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { accountVideos } from '../../data'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const AccountVideosPlaylist = () => {
    return (
        <View className='mt-2'>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className='flex-row gap-4'>
                {
                    accountVideos.map((video, index) => {
                        return (
                            <View key={index} className='relative'>
                                <View className='bg-stone-400 h-1 w-10/12' style={{ marginTop: -4.3, marginLeft: 13, borderTopRightRadius: 50, borderTopLeftRadius: 50 }}></View>
                                <Image source={video.image} className='w-36 h-20 rounded-xl' style={styles.background} />
                                <View className='absolute left-16 top-6'>
                                    <AntDesign name="like1" size={24} color="white" />
                                    <Text className='text-white font-black'>91</Text>
                                </View>
                                <View className='flex-row justify-between mt-1'>
                                    <View>
                                        <Text className='text-sm'>Liked Videos</Text>
                                        <Text className='text-gray-500' style={{ fontSize: 11 }}>Private</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity>
                                            <MaterialCommunityIcons name="dots-vertical" size={15} color="gray" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {/* time */}
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default AccountVideosPlaylist

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#0f172a',
        opacity: 0.6
    },
});