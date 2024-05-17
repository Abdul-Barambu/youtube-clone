import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import ShortsScreen from '../screens/ShortsScreen';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import AddPost from '../screens/AddPost';
import Subscription from '../screens/Subscription';
import You from '../screens/You';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notification from '../screens/Notification';
import Search from '../screens/Search';
import Setting from '../screens/Setting';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Trending from '../screens/Trending';
import Music from '../screens/Music';
import Gaming from '../screens/Gaming';
import News from '../screens/News';
import Sport from '../screens/Sport';
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import Youtubes from '../components/Youtubes';


export type RootStackParamList = {
  BottomNavigation: undefined;
  Notification: undefined;
  Search: undefined;
  Setting: undefined;
};

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {

  return (
    <View className='flex-1'>

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
      <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
      <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
      <Stack.Screen name="Youtubes" component={Youtubes} />
    </Stack.Navigator>
  )
}


const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
  return (
    <View className='flex-1 ml-2'>
      <DrawerContentScrollView {...props}>
        <View style={{ padding: 10 }} className='flex-row items-center gap-1 mb-2'>
          <AntDesign name="youtube" size={30} color="red" />
          <Text style={styles.youtubeText} className='tracking-tighter'>YouTube</Text>
        </View>
        <DrawerItemList {...props} />

        {/* additional drawser screens */}
        <View style={styles.separator}></View>
        <DrawerItem
          label="YouTube Premium"
          onPress={() => props.navigation.navigate('Youtubes')}
          icon={({ color, size }) => (
            <AntDesign name="youtube" size={30} color="red" />
          )}
          labelStyle={{ color: 'black', fontSize: 16, fontWeight: 'normal', letterSpacing: 0.2 }}
        />
        <DrawerItem
          label="YouTube Studio"
          onPress={() => props.navigation.navigate('Youtubes')}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="motion-play" size={24} color="red" />
          )}
          labelStyle={{ color: 'black', fontSize: 16, fontWeight: 'normal', letterSpacing: 0.2 }}
        />
        <DrawerItem
          label="YouTube Music"
          onPress={() => props.navigation.navigate('Youtubes')}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="motion-play-outline" size={24} color="red" />
          )}
          labelStyle={{ color: 'black', fontSize: 16, fontWeight: 'normal', letterSpacing: 0.2 }}
        />
        <DrawerItem
          label="YouTube Kids"
          onPress={() => props.navigation.navigate('Youtubes')}
          icon={({ color, size }) => (
            <AntDesign name="youtube" size={28} color="#D0312D" />
          )}
          labelStyle={{ color: 'black', fontSize: 16, fontWeight: 'normal', letterSpacing: 0.2 }}
        />
      </DrawerContentScrollView>
    </View>
  );
}


export const DrawerNavigation = () => {
  return (
    <View className='flex-1'>
      <Drawer.Navigator
        initialRouteName='StackNavigation'
        screenOptions={{
          headerShown: false,
          drawerLabelStyle: { color: 'black', fontSize: 16, fontWeight: 'normal', letterSpacing: 0.2 },
          drawerActiveTintColor: 'white',
          drawerItemStyle: { marginVertical: 7 }
        }}
        drawerContent={CustomDrawerContent}
      >
        <Drawer.Screen name="Trending" component={Trending}
          options={{
            drawerIcon: () => (
              <FontAwesome5 name="gripfire" size={24} color="black" />
            )
          }}
        />
        <Drawer.Screen name="Music" component={Music}
          options={{
            drawerIcon: () => (
              <Ionicons name="musical-note-outline" size={24} color="black" />
            )
          }}
        />
        <Drawer.Screen name="Gaming" component={Gaming}
          options={{
            drawerIcon: () => (
              <Ionicons name="game-controller-outline" size={24} color="black" />
            )
          }}
        />
        <Drawer.Screen name="News" component={News}
          options={{
            drawerIcon: () => (
              <Ionicons name="newspaper-outline" size={24} color="black" />
            )
          }}
        />
        <Drawer.Screen name="Sport" component={Sport}
          options={{
            drawerIcon: () => (
              <EvilIcons name="trophy" size={24} color="black" />
            )
          }}
        />
        <Drawer.Screen name="StackNavigation" component={StackNavigation} options={{ drawerLabel: () => null }} />
      </Drawer.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  youtubeText: {
    fontFamily: 'FreemanRegular',
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginBottom: 3,
  },
})