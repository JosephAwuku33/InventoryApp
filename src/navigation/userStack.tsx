import React from "react";
import HomeScreen from "../pages/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Inventory from "../pages/Inventory";
import Transactions from "../pages/Transactions";
import CustomAntIcon from "../components/icons/AntIcon";
import CustomFontAwesomeIcon from "../components/icons/FontAwesome";
import CustomIonIcon from "../components/icons/IonIcon";

const Drawer = createDrawerNavigator();

export default function UserStack() {
  return (
    <Drawer.Navigator initialRouteName="Home" >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <CustomIonIcon
              name="md-home"
              size={size}
              color={(color = "#552619")}
            />
          ),
          headerTintColor: "#ffffff",
          headerStyle: { backgroundColor: "#552619" },
          drawerLabelStyle: { color: "#552619" },
        }}
      />
      <Drawer.Screen
        name="Inventory"
        component={Inventory}
        options={{
          drawerIcon: ({ color, size }) => (
            <CustomAntIcon
              name="bars"
              size={size}
              color={(color = "#552619")}
            />
          ),
          headerTintColor: "#ffffff",
          headerStyle: { backgroundColor: "#552619" },
          drawerLabelStyle: { color: "#552619" },
        }}
      />
      <Drawer.Screen
        name="Transactions"
        component={Transactions}
        options={{
          drawerIcon: ({ color, size }) => (
            <CustomFontAwesomeIcon
              name="file-invoice-dollar"
              size={size}
              color={(color = "#552619")}
            />
          ),
          headerTintColor: "#ffffff",
          headerStyle: { backgroundColor: "#552619" },
          drawerLabelStyle: { color: "#552619" },
        }}
      />
    </Drawer.Navigator>
  );
}
