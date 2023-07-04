import React from "react";
import { Text, View, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function BuyTab() {
  return (
    <View className="bg-secondary h-screen">
      <View className="flex items-center mt-3">
        <Text style={{ fontFamily: "Poppins-Regular" }}>Buy Items</Text>
      </View>
      <KeyboardAwareScrollView>
        <View className="flex flex-col justify-center p-6 gap-3 mb-2">
          <View></View>
          <TextInput
            placeholder="Customer Name"
            className="bg-white rounded-full border-2 border-primary p-1 text-center"
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
