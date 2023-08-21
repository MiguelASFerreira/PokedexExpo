import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../pages/Welcome'
import Home from '../pages/Home'
import About from '../pages/About'

const Stack = createNativeStackNavigator()

const AppRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='About' component={About}/>
    </Stack.Navigator>
  )
}

export default AppRoutes