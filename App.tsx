import 'react-native-gesture-handler';
import RootNavigation from './src/navigation';
import './config/firebase';
import { LogBox } from 'react-native';

//import { useEffect } from "react"
//import * as Font from "expo-font";
import { useFonts } from "expo-font";


 
export default function App() {
   let [fontsLoaded] = useFonts({
      'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf')
    });
    LogBox.ignoreLogs(['Invalid prop textStyle of type array supplied to Cell']);
    if (!fontsLoaded) {
      return null;
    }

   return (
      <RootNavigation/>
   )
}


