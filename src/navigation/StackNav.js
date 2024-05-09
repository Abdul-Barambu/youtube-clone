import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Network from '../screens/Network'

const Stack = createNativeStackNavigator()

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Network" component={Network} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNav