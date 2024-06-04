import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const CameraPermission = ({ requestPermission, handleCam }: any) => {
    return (
        <View>
            <View className='bg-gray-400 w-14 mx-auto mt-2 h rounded-xl' style={styles.dash}>
                <Text></Text>
            </View>

            <View>
                <View className='flex-row items-center mx-4 mt-4 gap-3'>
                    <AntDesign name="youtube" size={40} color="red" />
                    <Text>Allow YouTube-clone to access your camera</Text>
                </View>
                <View className='flex-row items-center mx-4 mt-4 gap-3 justify-end'>
                    <TouchableOpacity className='bg-black p-2 rounded' onPress={handleCam}>
                        <Text>Deny</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='bg-black p-2 rounded' onPress={requestPermission}>
                        <Text>Allow</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CameraPermission

const styles = StyleSheet.create({
    dash: {
        height: 5
    }
})