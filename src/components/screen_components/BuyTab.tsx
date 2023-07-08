import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SelectList } from "react-native-dropdown-select-list";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase";

export default function BuyTab() {
  //data manipulation and retrieval

  const data = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

  //An interface for handling the customer and Inventory typing
  interface Customer {
    id: string;
    name: string;
    address: string;
    phone_number: string;
  }

  interface InventoryItem {
    id: string;
    name: string;
    price: number;
    expiry_date: any;
  }

  const [customers, setCustomers] = useState<Customer[]>([]);
  const customerCollectionRef = collection(db, "customer");

  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const inventoryCollectionRef = collection(db, "Inventory");

  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    const getCustomers = async () => {
      const customerData = await getDocs(customerCollectionRef);
      const customersArray = customerData.docs.map((doc) => doc.data() as Customer);
      setCustomers(customersArray);
      console.table(customersArray);
    };

    const getInventory = async () => {
      const inventoryData = await getDocs(inventoryCollectionRef);
      const inventoryItemArray = inventoryData.docs.map((doc) => doc.data() as InventoryItem);
      setInventory(inventoryItemArray)
      console.table(inventoryData);
    };

    getCustomers();
    getInventory();

  }, []);

  return (
    <KeyboardAwareScrollView>
      <View className="bg-secondary h-screen">
        <View className="flex items-center mt-3">
          <Text style={{ fontFamily: "Poppins-Regular" }}>Buy Items</Text>
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
                Buy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
