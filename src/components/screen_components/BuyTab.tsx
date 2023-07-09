import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SelectList } from "react-native-dropdown-select-list";
import Spinner from "react-native-loading-spinner-overlay";
import { useInventoryContext } from "../../context/InventoryContext";
import useSelectedItem from "../../hooks/useSelectedItem";

export default function BuyTab() {

  const inventoryContext = useInventoryContext();
  const { isLoading: inventoryLoading, inventory  } = inventoryContext;
  const { quantity, expiryDate, updateSelectedItem} = useSelectedItem(inventory);
  const inventorySelectList = [...inventory.map((inventory) => inventory.name)];

  return (
    <KeyboardAwareScrollView>
      <View className="bg-secondary h-screen">
        <Spinner
          visible={inventoryLoading}
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
              setSelected={updateSelectedItem}
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
            value={expiryDate}
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
