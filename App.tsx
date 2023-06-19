import { StatusBar } from 'expo-status-bar';
import { Text, View } from "react-native";

export default function App() {

  //Charleyyy
  return (
    <View>
      <View className="flex items-center justify-center bg-primary h-screen" >
        <Text className='text-white text-3xl'>An Inventory Project App </Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}


