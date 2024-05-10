import { View, Text, Platform, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Navigation';
import NetworkComponent from './NetworkComponent';

type NetworkScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Notification'>;

const GlobalComponent = () => {

  const navigation = useNavigation<NetworkScreenNavigationProp>()
  const [openModal, setOpenModal] = useState(false)

  const handleNetworModal = () => {
    setOpenModal(!openModal)
  }

  const handleNotificationScreen = () => {
    navigation.navigate("Notification")
    setOpenModal(false)
  }

  const handleSearchScreen = () => {
    navigation.navigate("Search")
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View className='mt-3 mx-5 flex-row justify-between items-center'>
        {/* logo */}
        <View className='flex-row items-center gap-1'>
          <AntDesign name="youtube" size={40} color="red" />
          <Text style={styles.youtubeText} className='text-xl'>YouTube</Text>
        </View>
        {/* icons */}
        <View className='flex-row gap-4'>
          <MaterialCommunityIcons onPress={handleNetworModal} name="access-point-network" size={27} color="black" />
          <Ionicons onPress={handleNotificationScreen} name="notifications-outline" size={27} color="black" />
          <EvilIcons onPress={handleSearchScreen} name="search" size={27} color="black" />
        </View>
      </View>


      {/* modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
      >

        <TouchableWithoutFeedback onPress={handleNetworModal}>
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.2)' }}>
            <View style={{ height: '30%', marginTop: 'auto', backgroundColor: '#FFFFFF' }} className='rounded-2xl'>
              <NetworkComponent />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  )
}

export default GlobalComponent

const styles = StyleSheet.create({
  youtubeText: {
    fontFamily: 'FreemanRegular'
  }
})