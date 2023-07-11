import React from "react";
import HomeScreen from "../pages/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Inventory from "../pages/Inventory";
import Transactions from "../pages/Transactions";
import CustomAntIcon from "../components/icons/AntIcon";
import CustomFontAwesomeIcon from "../components/icons/FontAwesome";
import CustomIonIcon from "../components/icons/IonIcon";
import { CustomerContextProvider } from "../context/CustomerContext";
import { InventoryContextProvider } from "../context/InventoryContext";
import { ProfileButton } from "../components/screen_components/ProfileButton";
import Profile from "../pages/Profile";

const Drawer = createDrawerNavigator();


export default function UserStack() {


  return (
    <CustomerContextProvider>
      <InventoryContextProvider>
        <Drawer.Navigator
          initialRouteName="Home"     
          screenOptions={{
            headerRight() {
              return (
                <ProfileButton />
              );
            },
          }}
        >
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
          <Drawer.Screen
            name="Profile"
            component={Profile}
            options={{
              drawerIcon: ({ color, size }) => (
                <CustomIonIcon
                  name="person-circle-outline"
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
      </InventoryContextProvider>
    </CustomerContextProvider>
  );
}
