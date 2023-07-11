import React from "react";
import { View, StyleSheet, LogBox } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Table, Row, Rows } from "react-native-table-component";
import { useInventoryContext } from "../../context/InventoryContext";
import Spinner from "react-native-loading-spinner-overlay";

export default function AllTab() {
  const tableHead = ["Product", "Price"];

  const inventoryContext = useInventoryContext();
  const { inventory, isLoading: inventoryLoading, } = inventoryContext;
  const tableData = inventory.map((item) => [item.name, item.price.toString()]);
  LogBox.ignoreLogs([
    "Warning: Failed prop type: Invalid prop `textStyle` of type `array` supplied to `Cell`, expected object .Cell",
  ]);

  return (
    <KeyboardAwareScrollView>
      <Spinner
        visible={inventoryLoading}
        textContent={"Loading Table"}
        textStyle={{ color: "#FFF" }}
      />
      <View className="flex h-screen p-4 pt-8 bg-secondary">
        <Table borderStyle={styles.table}>
          <Row data={tableHead} textStyle={styles.text} style={styles.head} />
          <Rows data={tableData} textStyle={styles.text} />
        </Table>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  head: {
    height: 40,
    backgroundColor: "#f1f8ff",
    fontFamily: "Poppins-Regular",
  },
  text: { margin: 6, fontFamily: "Poppins-Regular" },
  table: { borderWidth: 1, borderColor: "#000" },
});
