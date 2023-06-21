import 'react-native-gesture-handler';
import RootNavigation from './src/navigation';
import './config/firebase';

//import { useEffect } from "react"
//import * as Font from "expo-font";
import { useFonts } from "expo-font";


 
export default function App() {
   let [fontsLoaded] = useFonts({
      'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf')
    });
  
    if (!fontsLoaded) {
      return null;
    }

   return (
      <RootNavigation/>
   )
}


