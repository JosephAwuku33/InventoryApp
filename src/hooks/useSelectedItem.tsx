import React, { useState } from "react";
import { Timestamp } from "firebase/firestore";

interface InventoryItem {
  id: string;
  name: string;
  price: number;
  expiry_date: string;
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
      const price_quantity = filteredInventory.map((item) => item.price);
      const expiry_dated = filteredInventory.map((item) => item.expiry_date);
      
      /*const retrievedTimeStamp = expiry_dated[0] as unknown as Timestamp;
  
      const timeStamp = new Timestamp(
        retrievedTimeStamp.seconds,
        retrievedTimeStamp.nanoseconds
      );
  
      const date = timeStamp.toDate();
      const year = date.getFullYear(); // Get the 4-digit year
      const month = date.getMonth() + 1; // Get the month (0-indexed, so adding 1)
      const formattedDate = `${year}-${month.toString().padStart(2, '0')}`;
      console.log(formattedDate);
      */
      setExpiryDate(expiry_dated);
  
      setQuantity(price_quantity);
    };
  
    return { selected, expiryDate, quantity, updateSelectedItem };
  };
  
  export default useSelectedItem;