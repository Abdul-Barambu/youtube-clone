import { View, Text, Platform, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/Navigation';
import Help from './Help';
import NetworkComponent from '../NetworkComponent';

type NetworkScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Notification'>;

const NotGloCom = () => {

    const navigation = useNavigation<NetworkScreenNavigationProp>()
    const [openModal, setOpenModal] = useState(false)
    const [openModalHelp, setOpenModalHelp] = useState(false)

    const handleNetworModal = () => {
        setOpenModal(!openModal)
    }

    const handleHelpModal = () => {
        setOpenModalHelp(!openModalHelp)
    }

    const handleSearchScreen = () => {
        navigation.navigate("Search")
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <View className='mt-3 mr-5 ml-2 flex-row justify-between items-center'>
                {/* logo */}
                <View className='flex-row items-center gap-3'>
                    <Ionicons name="chevron-back-sharp" size={30} color="black" onPress={() => navigation.goBack()} />
                    <Text className='text-2xl font-medium'>Notifications</Text>
                </View>
                {/* icons */}
                <View className='flex-row gap-4'>
                    <MaterialCommunityIcons onPress={handleNetworModal} name="access-point-network" size={27} color="black" />
                    <EvilIcons onPress={handleSearchScreen} name="search" size={27} color="black" />
                    <MaterialCommunityIcons onPress={handleHelpModal} name="dots-vertical" size={24} color="black" />
                </View>
            </View>


            {/* modal network */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={openModal}
            >

                <TouchableWithoutFeedback onPress={handleNetworModal}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.2)' }}>
                        <View style={{ height: '30%', marginTop: 'auto', backgroundColor: '#FFFFFF' }} className='rounded-t-2xl'>
                            <NetworkComponent />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            {/* modal help */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={openModalHelp}
            >

                <TouchableWithoutFeedback onPress={handleHelpModal}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.2)' }}>
                        <View style={{ height: '10%', marginTop: 'auto', backgroundColor: '#FFFFFF' }} className='rounded-t-2xl'>
                            <Help />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </SafeAreaView>
    )
}

export default NotGloCom

const styles = StyleSheet.create({
    youtubeText: {
        fontFamily: 'FreemanRegular'
    }
})