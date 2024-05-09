import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import ShortsScreen from '../screens/ShortsScreen';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import AddPost from '../screens/AddPost';
import Subscription from '../screens/Subscription';
import You from '../screens/You';
import Network from '../screens/Network';
import GlobalComponent from '../components/GlobalComponent';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export type RootStackParamList = {
  BottomNavigation: undefined;
  Network: undefined;
};

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {


  return (
    <View className='flex-1'>

      <GlobalComponent />

      {/* Tab Navs */}
      <Tab.Navigator initialRouteName='Welcome' screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 10,
          letterSpacing: .5,
        }
      }}>
        {/* <Tab.Screen name='Welcome' component={WelcomeScreen} /> */}

        {/* Home */}
        <Tab.Screen name='Home' component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <Ionicons name={focused ? 'home' : 'home-outline'} size={22} color={color}
              />
            )
          }} />

        {/* Shorts */}
        <Tab.Screen name='Shorts' component={ShortsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <Ionicons name={focused ? 'flash-sharp' : 'flash-outline'} size={22} color={color} />
            )
          }}
        />

        {/* add post */}
        <Tab.Screen name='AddPost' component={AddPost}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <View className='mt-1'>
                <Ionicons name="add-circle-outline" size={35} color={color} />
              </View>
            ),
            tabBarLabel: ' '
          }}
        />

        {/* subscription */}
        <Tab.Screen name='Subscription' component={Subscription}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <MaterialCommunityIcons name={focused ? 'play-box-multiple' : 'play-box-multiple-outline'} size={22} color={color} />
            ),
            tabBarLabel: 'Subscriptions'
          }}
        />

        {/* Your account */}
        <Tab.Screen name='You' component={You}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <View className={focused ? 'border border-black rounded-full' : ''}>
                <MaterialIcons name="account-circle" size={22} color={color} />
              </View>
            )
          }}
        />
      </Tab.Navigator>
    </View>
  )
}


const Stack = createNativeStackNavigator()

export const StackNavigation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="Network" component={Network} />
      </Stack.Navigator>
  )
}