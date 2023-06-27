import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AllTab from "../components/screen_components/AllTab";
import NearExpiryTab from "../components/screen_components/NearExpiryTab";

const Tab = createMaterialTopTabNavigator();

export default function Inventory() {
  return (
      <Tab.Navigator initialRouteName="AllTab" screenOptions={{
         tabBarLabelStyle: {
          color: "#ffffff"
         },
         tabBarStyle: {
          backgroundColor: "#552619"
         }
      }}>
          <Tab.Screen name="AllTab" component={AllTab} options={{tabBarLabel: "All"}}  />
          <Tab.Screen name="NearExpiryTab" component={NearExpiryTab} options={{tabBarLabel: "Near Expiry"}}/>
      </Tab.Navigator>
  );
}
