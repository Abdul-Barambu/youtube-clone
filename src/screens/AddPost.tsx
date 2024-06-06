import { View, Text, Button, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback, StatusBar } from 'react-native'
import React, { useCallback, useState } from 'react'
import { CameraView, useCameraPermissions } from 'expo-camera';
import { CameraType } from 'expo-camera/build/legacy/Camera.types';
import CameraPermission from '../components/CameraPermission';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

const AddPost = () => {

  const [facing, setFacing] = useState(CameraType.back);
  const [permission, requestPermission] = useCameraPermissions();
  const [cam, setCam] = useState(true)

  const handleCam = () => {
    setCam(!cam)
  }


  useFocusEffect(
    useCallback(() => {
      // Set the status bar style when this screen is focused
      StatusBar.setBarStyle('light-content');

      // Clean up function to reset the status bar style when the screen is unfocused
      return () => {
        StatusBar.setBarStyle('default');
      };
    }, [])
  );

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Modal
          animationType='slide'
          transparent={true}
          visible={cam}
        >
          <TouchableWithoutFeedback>
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' }}>
              <View style={{ height: '23%', marginTop: 'auto', backgroundColor: '#FFFFFF' }} className='rounded-t-2xl'>
                <CameraPermission requestPermission={requestPermission} handleCam={handleCam} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        {/* <Button onPress={requestPermission} title="grant permission" /> */}
      </View >
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer} className='absolute bottom-0 mb-10 mx-5'>
          <View className='flex-1 flex-row items-center justify-between'>
            <TouchableOpacity>
              <MaterialIcons name="zoom-out-map" size={40} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className='border-white rounded-full' style={{paddingHorizontal: 4, borderWidth: 3.5}}>
              <FontAwesome name="circle" size={50} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCameraFacing}>
              <FontAwesome6 name="camera-rotate" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </CameraView>
    </View>
  )
}

export default AddPost

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});