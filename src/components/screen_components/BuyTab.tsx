import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SelectList } from "react-native-dropdown-select-list";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase";
import Spinner from "react-native-loading-spinner-overlay";

export default function BuyTab() {
  //data manipulation and retrieval
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
    expiry_date: Date;
  }

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const customerCollectionRef = collection(db, "customer");

  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const inventoryCollectionRef = collection(db, "Inventory");

  const [quantity, setQuantity] = useState<number[]>([]);

  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    const getCustomers = async () => {
      
      try {
        const customerData = await getDocs(customerCollectionRef);
        const customersArray = customerData.docs.map(
          (doc) => doc.data() as Customer
        );
        setCustomers(customersArray);
        console.log(customers);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    const getInventory = async () => {
      try {
        const inventoryData = await getDocs(inventoryCollectionRef);
        const inventoryItemArray = inventoryData.docs.map(
          (doc) => doc.data() as InventoryItem
        );
        setInventory(inventoryItemArray);
        console.log(inventory);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getCustomers();
    getInventory();
  }, []);

  const selectedItem = (selected: string) => {
    setSelected(selected);

    const filteredInventory = inventory.filter(
      (item) => item.name === selected
    );
    const price_quantity = filteredInventory.map((item) => item.price);
    const expiry_date = filteredInventory.map((item) => item.expiry_date);

    setQuantity(price_quantity);
  };

  const inventorySelectList = [...inventory.map((inventory) => inventory.name)];

  return (
    <KeyboardAwareScrollView>
      <View className="bg-secondary h-screen">
        <Spinner
          visible={isLoading}
          textContent={"Loading..."}
          textStyle={{ color: "#FFF" }}
        />
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
              data={inventorySelectList}
              save="value"
              setSelected={selectedItem}
            />
          </View>
          <View className="flex items-center justify-center">
            <Text style={{ fontFamily: "Poppins-Regular" }}>
              Select a product to view details
            </Text>
          </View>
          <TextInput
            placeholder="Quantity"
            keyboardType="numeric"
            className="bg-white rounded-full border-2 border-primary text-black p-1 text-center"
            value={quantity.toString()}
            editable={false}
          />
          <TextInput
            placeholder="Expiry Date"
            editable={false}
            className="bg-white rounded-full border-2 border-primary text-black p-1 text-center"
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
