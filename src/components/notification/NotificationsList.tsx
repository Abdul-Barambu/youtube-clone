import { View, Text, Image, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NotificationModel from './NotificationModel';

const NotificationsList = () => {

    const text = 'Dr Zakir Naik uploaded 3 new videos'
    const tel = 'Telusko learning uploaded 3 new videos'
    const eli = 'Eli the computer guy uploaded 3 new videos'
    const lengthCharacter = text.length > 25

    const [openModal, setOpenModal] = useState(false)

    const handleModal = () => {
        setOpenModal(!openModal)
    }

    return (
        <View className='mt-6'>

            {/* Today */}
            <View>
                <Text className='ml-5 mb-3 text-gray-600 font-bold text-lg tracking-wide'>Today</Text>
                {/* flex */}
                <View className='flex-row gap-2'>
                    {/* dot and image */}
                    <View className='flex-row'>
                        <Entypo name="dot-single" size={24} color="#1E90FF" />
                        <Image source={require('../../../assets/images/zakir.jpeg')} className='w-10 h-10 rounded-full' />
                    </View>
                    {/* text */}
                    <View>
                        <Text className=' text-sm font-medium'>{lengthCharacter ? text.slice(0, 25) : ''}. . .</Text>
                        <Text className='text-sm text-gray-500 '>52 minutes ago</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../../assets/images/zakirVideo.jpg')} className='w-24 h-14 rounded-lg' />
                        <Text className='bg-orange-400 h-1 w-4/5 rounded-b-lg' style={{ marginLeft: 9, marginTop: 1 }}></Text>
                    </View>
                    {/* 3 dots */}
                    <View>
                        <MaterialCommunityIcons onPress={handleModal} name="dots-vertical" size={20} color="black" />
                    </View>
                </View>
            </View>
            {/* end */}

            {/* This week */}
            <View className='mt-6'>
                <Text className='ml-5 mb-3 text-gray-600 font-bold text-lg tracking-wide'>This week</Text>
                {/* flex 1*/}
                <View className='flex-row gap-2'>
                    {/* dot and image */}
                    <View className='flex-row'>
                        <Entypo name="dot-single" size={24} color="#1E90FF" />
                        <Image source={require('../../../assets/images/telusko.jpg')} className='w-10 h-10 rounded-full' />
                    </View>
                    {/* text */}
                    <View>
                        <Text className=' text-sm font-medium'>{lengthCharacter ? tel.slice(0, 25) : ''}. . .</Text>
                        <Text className='text-sm text-gray-500 '>8 hours ago</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../../assets/images/teluskiVideo.jpeg')} className='w-24 h-14 rounded-lg' />
                        <Text className='bg-gray-700 h-1 w-4/5 rounded-b-md' style={{ marginLeft: 9, marginTop: 1 }}></Text>
                    </View>
                    {/* 3 dots */}
                    <View>
                        <MaterialCommunityIcons onPress={handleModal} name="dots-vertical" size={20} color="black" />
                    </View>
                </View>
                {/* flex 2*/}
                <View className='flex-row gap-2 mt-5'>
                    {/* dot and image */}
                    <View className='flex-row'>
                        <Entypo name="dot-single" size={24} color="#1E90FF" />
                        <Image source={require('../../../assets/images/telusko.jpg')} className='w-10 h-10 rounded-full' />
                    </View>
                    {/* text */}
                    <View>
                        <Text className=' text-sm font-medium'>{lengthCharacter ? tel.slice(0, 25) : ''}. . .</Text>
                        <Text className='text-sm text-gray-500 '>8 hours ago</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../../assets/images/teluskiVideo.jpeg')} className='w-24 h-14 rounded-lg' />
                        <Text className='bg-gray-700 h-1 w-4/5 rounded-b-md' style={{ marginLeft: 9, marginTop: 1 }}></Text>
                    </View>
                    {/* 3 dots */}
                    <View>
                        <MaterialCommunityIcons onPress={handleModal} name="dots-vertical" size={20} color="black" />
                    </View>
                </View>
            </View>
            {/* end */}

            {/* older */}
            <View className='mt-6'>
                <Text className='ml-5 mb-3 text-gray-600 font-bold text-lg tracking-wide'>Older</Text>
                {/* flex 1*/}
                <View className='flex-row gap-2'>
                    {/* dot and image */}
                    <View className='flex-row'>
                        <Entypo name="dot-single" size={24} color="#1E90FF" />
                        <Image source={require('../../../assets/images/eli.jpg')} className='w-10 h-10 rounded-full' />
                    </View>
                    {/* text */}
                    <View>
                        <Text className=' text-sm font-medium'>{lengthCharacter ? eli.slice(0, 25) : ''}. . .</Text>
                        <Text className='text-sm text-gray-500 '>52 minutes ago</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../../assets/images/eliVideo.jpg')} className='w-24 h-14 rounded-lg' />
                        <Text className='bg-orange-600 h-1 w-4/5 rounded-b-sm' style={{ marginLeft: 9, marginTop: 1 }}></Text>
                    </View>
                    {/* 3 dots */}
                    <View>
                        <MaterialCommunityIcons onPress={handleModal} name="dots-vertical" size={20} color="black" />
                    </View>
                </View>
                {/* flex 2*/}
                <View className='flex-row gap-2 mt-5'>
                    {/* dot and image */}
                    <View className='flex-row'>
                        <Entypo name="dot-single" size={24} color="#1E90FF" />
                        <Image source={require('../../../assets/images/eli.jpg')} className='w-10 h-10 rounded-full' />
                    </View>
                    {/* text */}
                    <View>
                        <Text className=' text-sm font-medium'>{lengthCharacter ? eli.slice(0, 25) : ''}. . .</Text>
                        <Text className='text-sm text-gray-500 '>52 minutes ago</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../../assets/images/eliVideo.jpg')} className='w-24 h-14 rounded-lg' />
                        <Text className='bg-orange-600 h-1 w-4/5 rounded-b-sm' style={{ marginLeft: 9, marginTop: 1 }}></Text>
                    </View>
                    {/* 3 dots */}
                    <View>
                        <MaterialCommunityIcons onPress={handleModal} name="dots-vertical" size={20} color="black" />
                    </View>
                </View>
                {/* flex 3*/}
                <View className='flex-row gap-2 mt-5'>
                    {/* dot and image */}
                    <View className='flex-row'>
                        <Entypo name="dot-single" size={24} color="#1E90FF" />
                        <Image source={require('../../../assets/images/eli.jpg')} className='w-10 h-10 rounded-full' />
                    </View>
                    {/* text */}
                    <View>
                        <Text className=' text-sm font-medium'>{lengthCharacter ? eli.slice(0, 25) : ''}. . .</Text>
                        <Text className='text-sm text-gray-500 '>52 minutes ago</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../../assets/images/eliVideo.jpg')} className='w-24 h-14 rounded-lg' />
                        <Text className='bg-orange-600 h-1 w-4/5 rounded-b-sm' style={{ marginLeft: 9, marginTop: 1 }}></Text>
                    </View>
                    {/* 3 dots */}
                    <View>
                        <MaterialCommunityIcons onPress={handleModal} name="dots-vertical" size={20} color="black" />
                    </View>
                </View>
                {/* flex 4*/}
                <View className='flex-row gap-2 mt-5'>
                    {/* dot and image */}
                    <View className='flex-row'>
                        <Entypo name="dot-single" size={24} color="#1E90FF" />
                        <Image source={require('../../../assets/images/eli.jpg')} className='w-10 h-10 rounded-full' />
                    </View>
                    {/* text */}
                    <View>
                        <Text className=' text-sm font-medium'>{lengthCharacter ? eli.slice(0, 25) : ''}. . .</Text>
                        <Text className='text-sm text-gray-500 '>52 minutes ago</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../../assets/images/eliVideo.jpg')} className='w-24 h-14 rounded-lg' />
                        <Text className='bg-orange-600 h-1 w-4/5 rounded-b-sm' style={{ marginLeft: 9, marginTop: 1 }}></Text>
                    </View>
                    {/* 3 dots */}
                    <View>
                        <MaterialCommunityIcons onPress={handleModal} name="dots-vertical" size={20} color="black" />
                    </View>
                </View>
                {/* flex 5*/}
                <View className='flex-row gap-2 mt-5 mb-3'>
                    {/* dot and image */}
                    <View className='flex-row'>
                        <Entypo name="dot-single" size={24} color="#1E90FF" />
                        <Image source={require('../../../assets/images/eli.jpg')} className='w-10 h-10 rounded-full' />
                    </View>
                    {/* text */}
                    <View>
                        <Text className=' text-sm font-medium'>{lengthCharacter ? eli.slice(0, 25) : ''}. . .</Text>
                        <Text className='text-sm text-gray-500 '>52 minutes ago</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../../assets/images/eliVideo.jpg')} className='w-24 h-14 rounded-lg' />
                        <Text className='bg-orange-600 h-1 w-4/5 rounded-b-sm' style={{ marginLeft: 9, marginTop: 1 }}></Text>
                    </View>
                    {/* 3 dots */}
                    <View>
                        <MaterialCommunityIcons onPress={handleModal} name="dots-vertical" size={20} color="black" />
                    </View>
                </View>
                {/* flex 6*/}
                <View className='flex-row gap-2 mt-5 mb-3'>
                    {/* dot and image */}
                    <View className='flex-row'>
                        <Entypo name="dot-single" size={24} color="#1E90FF" />
                        <Image source={require('../../../assets/images/eli.jpg')} className='w-10 h-10 rounded-full' />
                    </View>
                    {/* text */}
                    <View>
                        <Text className=' text-sm font-medium'>{lengthCharacter ? eli.slice(0, 25) : ''}. . .</Text>
                        <Text className='text-sm text-gray-500 '>52 minutes ago</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../../assets/images/eliVideo.jpg')} className='w-24 h-14 rounded-lg' />
                        <Text className='bg-orange-600 h-1 w-4/5 rounded-b-sm' style={{ marginLeft: 9, marginTop: 1 }}></Text>
                    </View>
                    {/* 3 dots */}
                    <View>
                        <MaterialCommunityIcons onPress={handleModal} name="dots-vertical" size={20} color="black" />
                    </View>
                </View>
                {/* flex 7*/}
                <View className='flex-row gap-2 mt-5 mb-3'>
                    {/* dot and image */}
                    <View className='flex-row'>
                        <Entypo name="dot-single" size={24} color="#1E90FF" />
                        <Image source={require('../../../assets/images/eli.jpg')} className='w-10 h-10 rounded-full' />
                    </View>
                    {/* text */}
                    <View>
                        <Text className=' text-sm font-medium'>{lengthCharacter ? eli.slice(0, 25) : ''}. . .</Text>
                        <Text className='text-sm text-gray-500 '>52 minutes ago</Text>
                    </View>
                    {/* video */}
                    <View>
                        <Image source={require('../../../assets/images/eliVideo.jpg')} className='w-24 h-14 rounded-lg' />
                        <Text className='bg-orange-600 h-1 w-4/5 rounded-b-sm' style={{ marginLeft: 9, marginTop: 1 }}></Text>
                    </View>
                    {/* 3 dots */}
                    <View>
                        <MaterialCommunityIcons onPress={handleModal} name="dots-vertical" size={20} color="black" />
                    </View>
                </View>
            </View>
            {/* end */}

            {/* modal help */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={openModal}
            >

                <TouchableWithoutFeedback onPress={handleModal}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.2)' }}>
                        <View style={{ height: '16%', marginTop: 'auto', backgroundColor: '#FFFFFF' }} className='rounded-t-2xl'>
                            <NotificationModel />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    )
}

export default NotificationsList