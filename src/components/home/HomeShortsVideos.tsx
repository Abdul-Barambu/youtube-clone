import { View, Text, StyleSheet, Dimensions, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useRef, useState } from 'react'
import { ResizeMode, Video } from 'expo-av';
import { shortsVideos } from '../../data';
import { Entypo } from '@expo/vector-icons';
import ShortModal from './ShortModal';

const HomeShortsVideos = () => {

    const videoRef = useRef(null);
    const { width: windowWidth } = Dimensions.get('window');

    const [shortModal, setShortModal] = useState(false)

    const handleShortModal = () => {
        setShortModal(!shortModal)
    }

    return (
        <View className="mt-3 flex-row flex-wrap ">
            {shortsVideos.map((short, index) => (
                <View key={index} className="mb-2 w-1/2 px-2">
                    <View className="relative items-center">
                        <Video
                            ref={videoRef}
                            source={short.link}
                            style={{ width: windowWidth / 2 - 15, height: 290, borderRadius: 8 }}
                            useNativeControls
                            resizeMode={ResizeMode.COVER}
                            isLooping
                        />
                        <View className="absolute right-0 top-2">
                            <TouchableOpacity onPress={handleShortModal}>
                                <Entypo name="dots-three-vertical" size={20} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text className="absolute bottom-8 left-2 text-white font-bold">
                        {short.text.slice(0, 19)}...
                    </Text>
                    <Text className="absolute bottom-2 left-2 text-white font-bold">
                        #shorts
                    </Text>
                </View>
            ))}




            <Modal
                animationType='slide'
                transparent={true}
                visible={shortModal}
            >
                <TouchableWithoutFeedback onPress={handleShortModal}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' }}>
                        <View style={{ height: '23%', marginTop: 'auto', backgroundColor: '#FFFFFF' }} className='rounded-t-2xl'>
                            <ShortModal />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

        </View>
    );
};

export default HomeShortsVideos