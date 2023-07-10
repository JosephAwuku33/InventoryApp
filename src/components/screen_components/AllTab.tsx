import React from "react";
import { View, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Table, Row, Rows } from "react-native-table-component";
import { useInventoryContext } from "../../context/InventoryContext";


export default function AllTab() {
  const tableHead = ["Product", "Price"];

  const inventoryContext = useInventoryContext();
  const { inventory } = inventoryContext;
  const tableData = inventory.map(item => [item.name, item.price.toString()]);
  

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Table borderStyle={styles.table}>
          <Row data={tableHead} textStyle={styles.text} style={styles.head}  />
          <Rows data={tableData} textStyle={styles.text}  />
        </Table>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#FBEAE7' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  table: { borderWidth: 1, borderColor: '#000' },
});