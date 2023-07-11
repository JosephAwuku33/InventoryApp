import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { db } from "../../../config/firebase";

export default function AddProductTab() {
  const [ productName, setproductName] = useState<string>("");
  const [ price, setPrice] = useState<number>(0);
  const [ expiryDate, setExpiryDate ] = useState<string>();

  const addToInventory = (name: string, price: number, expiryDate: string | undefined): any => {
     try {

     } catch (error) {
      console.log('Error adding item', error);
     }
  }

  return (
    <KeyboardAwareScrollView>
      <View className="flex h-screen bg-secondary">
        <View className="flex items-center">
          <Image
            source={require("../../../assets/Barcode-Reader.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <View className="flex flex-col  justify-center p-5 gap-5 mb-2">
          <Text className="text-lg text-center text-primary">
            Add Product to Inventory
          </Text>
          <View className=" flex items-center border-primary border-2 mb-2" />
          <TextInput
            placeholder="Product Name"
            className="bg-white rounded-full border-2 border-primary p-1 text-center"
            onChangeText={(val) => setproductName(val) }
          />
          <TextInput
            keyboardType="numeric"
            placeholder="Price"
            className="bg-white rounded-full border-2 border-primary p-1 text-center"
            onChangeText={(text: string) => {
              const parsedNumber = Number(text);
              if (isNaN(parsedNumber)) {
                return;
              }
          
              setPrice(parsedNumber);}}
          />
          <TextInput
            keyboardType="number-pad"
            placeholder="Expiry Date in format yyyy-mm"
            className="bg-white rounded-full border-2 border-primary p-1 text-center"
            onChangeText={(val) => setExpiryDate(val)}
          />
          <TouchableOpacity onPress={addToInventory(productName, price, expiryDate)}>
            <Text
              style={{ fontFamily: "Poppins-Regular" }}
              className="text-center text-primary text-sm"
            >
              + Add Product
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
