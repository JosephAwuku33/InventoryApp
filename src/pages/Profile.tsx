import React from "react";
import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth/react-native";
import CustomIonIcon from "../components/icons/IonIcon";

export default function Profile() {
  const logOut = () => {
    try {
        signOut(auth);
        ToastAndroid.show("Successfully logged out", ToastAndroid.LONG);
    } catch ( err ) {
        console.log(err)
        ToastAndroid.show("Error signing out", ToastAndroid.LONG);
    }
  }

  return (
    <View className="flex items-center justify-center mb-4 gap-2 h-screen bg-secondary">
      <Text>Hey there, {auth.currentUser?.displayName}</Text>
      <Text>{auth.currentUser?.email}</Text>
      <CustomIonIcon name="person-circle-outline" size={64} color="#552619" />
      <TouchableOpacity className="bg-primary mt-2 px-20 py-2 rounded-full" onPress={logOut}>
        <Text className="text-center text-white text-xl font-semibold">
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  );
}
