import { View, Text, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import { ResizeMode, Video } from 'expo-av';
import { shortsVideos } from '../data';
// import Video from 'react-native-video';

const HomeShortsVideos = () => {

    const videoRef = useRef(null);
    const background = require('../../assets/videos/watermarked_preview.mp4');

    return (
        <View className='mt-3'>
            {shortsVideos.map((short, index) => (
                <View key={index}>
                    <Video
                        ref={videoRef}
                        source={{uri: short.link}}
                        style={styles.video}
                        useNativeControls
                        resizeMode={ResizeMode.CONTAIN}
                        isLooping
                    />

                </View>
            ))}
            <Text>hhh</Text>
            <Video
                ref={videoRef}
                source={background}
                style={styles.video}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    video: {
        width: '50%',
        height: 290,
        borderRadius: 20
    },
});

export default HomeShortsVideos