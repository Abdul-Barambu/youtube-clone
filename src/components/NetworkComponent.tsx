import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const NetworkComponent = () => {
    return (
        <View>
            <View className='bg-gray-400 w-14 mx-auto mt-2 h rounded-xl' style={styles.dash}>
                <Text></Text>
            </View>
            <Text className='mt-5 font-bold text-md ml-4'>Select a device</Text>
            <View className='mt-6 ml-5'>
                <TouchableOpacity>
                    <View className='flex-row items-center gap-6 mb-5'>
                        <MaterialIcons name="airplay" size={28} color="black" />
                        <Text className='text-lg'>Airplay and Bluetooth devices</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View className='flex-row items-center gap-6 mb-5'>
                        <MaterialIcons name="phonelink" size={28} color="black" />
                        <Text className='text-lg'>Link wit TV code</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View className='flex-row items-center gap-6 mb-5'>
                        <AntDesign name="exclamationcircleo" size={24} color="black" />
                        <Text className='text-lg'>Learn more</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NetworkComponent

const styles = StyleSheet.create({
    dash: {
        height: 5
    }
})