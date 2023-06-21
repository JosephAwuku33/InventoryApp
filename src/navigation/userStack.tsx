import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../pages/Home';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
  )
}
