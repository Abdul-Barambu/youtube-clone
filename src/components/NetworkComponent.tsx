import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const NetworkComponent = () => {
    return (
        <View>
            <View className='bg-gray-400 w-14 mx-auto mt-2 h rounded-xl' style={styles.dash}>
                <Text></Text>
            </View>
            <Text className='mt-5 font-bold text-md'>Select a device</Text>
        </View>
    )
}

export default NetworkComponent

const styles = StyleSheet.create({
    dash: {
        height: 5
    }
})