import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SellTab from "../components/screen_components/SellTab";
import BuyTab from "../components/screen_components/BuyTab";
import HistoryTab from "../components/screen_components/HistoryTab";

const Tab = createMaterialTopTabNavigator();

export default function Transactions() {
  return (
    <Tab.Navigator initialRouteName="BuyTab" screenOptions={{
      tabBarLabelStyle: {
       color: "#ffffff"
      },
      tabBarStyle: {
       backgroundColor: "#552619"
      }
   }}>
       <Tab.Screen name="BuyTab" component={BuyTab} options={{tabBarLabel: "Buy"}}  />
       <Tab.Screen name="SellTab" component={SellTab} options={{tabBarLabel: "Sell"}}/>
       <Tab.Screen name="HistoryTab" component={HistoryTab} options={{tabBarLabel: "History"}}/>
   </Tab.Navigator>

  )
}
