import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { accountVideos } from '../../data'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AccountVideos = () => {
    return (
        <View className='mt-2'>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className='flex-row gap-4'>
                {
                    accountVideos.map((video, index) => {
                        return (
                            <View key={index} className='relative'>
                                <Image source={video.image} className='w-36 h-20 rounded-xl' />
                                <View className='bg-red-500 h-1 w-11/12' style={{ marginTop: -4.3, marginLeft: 6.4, borderBottomRightRadius: 50, borderBottomLeftRadius: 50 }}></View>
                                <View className='flex-row justify-between mt-1'>
                                    <View>
                                        <Text className='text-sm'>{video.text.slice(0, 15)}...</Text>
                                        <Text className='text-gray-500' style={{ fontSize: 11 }}>{video.name}</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity>
                                            <MaterialCommunityIcons name="dots-vertical" size={15} color="gray" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {/* time */}
                                <View className='absolute bottom-11 right-2 px-2 py-1 rounded' style={styles.background}>
                                    <Text className='text-white font-bold' style={{fontSize: 10}}>{video.time}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default AccountVideos

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#1f2937',
        opacity: 0.7,
    },
});