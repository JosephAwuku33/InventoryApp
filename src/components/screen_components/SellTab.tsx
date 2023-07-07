import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SelectList } from "react-native-dropdown-select-list";

export default function SellTab() {
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
    <KeyboardAwareScrollView>
      <View className="bg-secondary h-screen">
        <View className="flex items-center mt-3">
          <Text style={{ fontFamily: "Poppins-Regular" }}>Sell Items</Text>
        </View>
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
              setSelected={(val: string) => setSelected(val)}
            />
          </View>
          <View className="flex items-center justify-center">
            <Text style={{ fontFamily: "Poppins-Regular" }}>
              Select a product to view details
            </Text>
          </View>
          <TextInput
            placeholder="Quantity"
            className="bg-white rounded-full border-2 border-primary p-1 text-center"
          />
          <TextInput
            placeholder="Expiry Date"
            className="bg-white rounded-full border-2 border-primary p-1 text-center"
          />
          <View className="flex items-center justify-center">
            <TouchableOpacity>
              <Text
                style={{ fontFamily: "Poppins-Regular" }}
                className="text-center text-primary text-sm"
              >
                + Add Product
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-primary mt-2 px-20 py-2 rounded-full">
              <Text className="text-center text-white text-xl font-semibold ">
                Sell
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
