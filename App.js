import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome from '@expo/vector-icons/FontAwesome5'

// Application pages
import HomeView from './src/views/home'
import StatsView from './src/views/stats'
import SettingsView from './src/views/settings'
import PixelsView from './src/views/pixels'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({ tabBarIcon: () => getNavigationIcons(route) })}>    
        <Tab.Screen name="Home" component={HomeView} />
        <Tab.Screen name="Stats" component={StatsView} />
        <Tab.Screen name="Pixels" component={PixelsView} />
        <Tab.Screen name="Settings" component={SettingsView} />
      </Tab.Navigator>    
    </NavigationContainer>
  );
}

function getNavigationIcons(route) {  
    let icon
    switch (route.name) {
      case 'Home': icon = 'book'; break
      case 'Stats': icon = 'chart-bar'; break
      case 'Pixels': icon = 'border-all'; break
      case 'Settings': icon = 'cog'; break
    }

    return <FontAwesome name={icon} size={30} />
}