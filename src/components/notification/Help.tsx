import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Help = () => {
    return (
        <View>
            <View className='bg-gray-400 w-14 mx-auto mt-2 h rounded-xl' style={styles.dash}>
                <Text></Text>
            </View>

            <View className='flex-row items-center mx-4 mt-4'>
                <Ionicons name="help-circle-outline" size={32} color="black" />
                <Text className='text-xl ml-5 font-normal'>Help and feedback</Text>
            </View>
        </View>
    )
}

export default Help

const styles = StyleSheet.create({
    dash: {
        height: 5
    }
})