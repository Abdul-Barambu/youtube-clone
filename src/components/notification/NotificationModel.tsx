import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const NotificationModel = () => {
    return (
        <View>
            <View className='bg-gray-400 w-14 mx-auto mt-2 h rounded-xl' style={styles.dash}>
                <Text></Text>
            </View>

            <View className='flex-row items-center mx-4 mt-4'>
                <Ionicons name="eye-off-outline" size={24} color="black" />
                <Text className='text-xl ml-5 font-normal'>Hide this notification</Text>
            </View>

            <View className='flex-row items-center mx-4 mt-4'>
                <Ionicons name="notifications-off-outline" size={24} color="black" />
                <Text className='text-xl ml-5 font-normal'>Turn off all from this channel</Text>
            </View>
        </View>
    )
}

export default NotificationModel

const styles = StyleSheet.create({
    dash: {
        height: 5
    }
})