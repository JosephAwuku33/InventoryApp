import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { db, auth } from "../../../config/firebase";
import Spinner from "react-native-loading-spinner-overlay";
import { collection, addDoc } from "firebase/firestore";

export default function AddProductTab() {
  const userId = auth.currentUser?.uid;
  const [productName, setproductName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);
  const [expiryDate, setExpiryDate] = useState<string>();
  const inventoryCollectionRef = collection(db, "Inventory");

  const addToInventory = async () => {
    setLoading(true);
    try {
      await addDoc(inventoryCollectionRef, {
        expiryDate: expiryDate,
        name: productName,
        price: price,
        userId: userId,
      });
      ToastAndroid.show("Successfully added to Inventory", ToastAndroid.LONG);
    } catch (error) {
      console.log("Error adding item", error);
      ToastAndroid.show("Error adding item", ToastAndroid.LONG);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAwareScrollView>
      <Spinner
        visible={loading}
        textContent={"Adding item to inventory..."}
        textStyle={{ color: "#FFF" }}
      />
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
            onChangeText={(val) => setproductName(val)}
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

              setPrice(parsedNumber);
            }}
          />
          <TextInput
            keyboardType="number-pad"
            placeholder="Expiry Date in format yyyy-mm"
            className="bg-white rounded-full border-2 border-primary p-1 text-center"
            onChangeText={(val) => setExpiryDate(val)}
          />
          <TouchableOpacity onPress={addToInventory}>
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
