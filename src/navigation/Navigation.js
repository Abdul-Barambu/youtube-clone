import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import ShortsScreen from '../screens/ShortsScreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            tabBarOptions={{
                style: { position: 'absolute', bottom: 0, left: 0, right: 0 }
            }}>
            <Tab.Screen name='Welcome' component={WelcomeScreen} />
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Shorts' component={ShortsScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation