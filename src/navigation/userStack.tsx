import React from 'react';
import HomeScreen from '../pages/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inventory from "../pages/Inventory";
import Transactions from "../pages/Transactions";
import CustomIcon from '../components/icons/Icon';

const Drawer = createDrawerNavigator();

export default function UserStack() {
  return (
    <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={HomeScreen} options={{drawerIcon: ({color, size}) => (
            <CustomIcon
               name="md-home" size={size} color={color = "#552619"}
            />
          )}}/>
        <Drawer.Screen name="Inventory" component={Inventory} />
        <Drawer.Screen name="Transactions" component={Transactions} />
    </Drawer.Navigator>
  )

}
