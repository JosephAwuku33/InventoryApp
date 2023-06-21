import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen(){
    return (
        <SafeAreaView>
            <View className="bg-secondary flex h-screen items-center justify-center">
                <Text style={{fontFamily: 'Poppins-Regular'}}>Welcome</Text>
            </View>
        </SafeAreaView>
    )
}