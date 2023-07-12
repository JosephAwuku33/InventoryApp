import  { useState } from "react";
//import { Timestamp } from "firebase/firestore";

interface InventoryItem {
  id: string;
  name: string;
  price: number;
  expiryDate: string;
}


const useSelectedItem = (inventory: InventoryItem[]) => {
    const [selected, setSelected] = useState<string>('');
    const [expiryDate, setExpiryDate] = useState<string[]>([]);
    const [quantity, setQuantity] = useState<number[]>([]);
  
    const updateSelectedItem = (selectedItemName: string) => {
      setSelected(selectedItemName);
  
      const filteredInventory = inventory.filter(
        (item) => item.name === selectedItemName
      );
      console.log("Filtered inventory is:" + filteredInventory);
      const price_quantity = filteredInventory.map((item) => item.price);
      const expiry_dated = filteredInventory.map((item) => item.expiryDate);
      console.log("Expiry date for product is:" + expiry_dated);
      setExpiryDate(expiry_dated);
  
      setQuantity(price_quantity);
    };
  
    return { selected, expiryDate, quantity, updateSelectedItem };
  };
  
  export default useSelectedItem;