import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';
import SearchTexts from '../components/SearchTexts';

const Search = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView className='flex-1 bg-white'>

            <View className='flex-row justify-between items-center mx-2 mb-2'>
                {/* back icon */}
                <View className='mr-3'>
                    <MaterialIcons name="arrow-back-ios-new" size={28} color="black" onPress={() => navigation.goBack()} />
                </View>
                {/* search bar */}
                <View className='flex-1 mr-2'>
                    <TextInput
                        placeholder='Search YouTube'
                        className='bg-gray-200 py-2 px-5 rounded-full w-full' />
                </View>
                {/* voice search */}
                <View className='bg-gray-200 rounded-full p-1'>
                    <MaterialIcons name="keyboard-voice" size={28} color="black" />
                </View>
            </View>

            {/* search texts */}
            <ScrollView>
                <SearchTexts />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Search