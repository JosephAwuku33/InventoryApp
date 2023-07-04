import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SelectList } from "react-native-dropdown-select-list";

export default function BuyTab() {
  const data = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

  const [selected, setSelected] = useState("");

  return (
    <View className="bg-secondary h-screen">
      <View className="flex items-center mt-3">
        <Text style={{ fontFamily: "Poppins-Regular" }}>Buy Items</Text>
      </View>
      <KeyboardAwareScrollView>
        <View className="flex flex-col justify-center p-6 gap-6 mb-2">
          <View className=" flex items-center border-primary border-2 mb-2" />
          <TextInput
            placeholder="Customer Name"
            className="bg-white rounded-full border-2 border-primary p-1 text-center"
          />
          <TextInput
            placeholder="Phone Number"
            className="bg-white rounded-full border-2 border-primary p-1 text-center"
          />
          <TextInput
            placeholder="Address"
            className="bg-white rounded-full border-2 border-primary p-1 text-center"
          />
          <View className=" flex items-center border-primary border-2 mb-4" />
          <View>
            <SelectList
              data={data}
              save="value"
              setSelected={(val) => setSelected(val)}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
