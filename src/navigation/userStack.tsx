import React from 'react';
import HomeScreen from '../pages/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inventory from "../pages/Inventory";
import Transactions from "../pages/Transactions";

const Drawer = createDrawerNavigator();

export default function UserStack() {
  return (
    <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Inventory" component={Inventory} />
        <Drawer.Screen name="Transactions" component={Transactions} />
    </Drawer.Navigator>
  )

}
