import 'react-native-gesture-handler';
import RootNavigation from './src/navigation';
import './config/firebase';
import { useEffect } from "react"
import * as Font from "expo-font";

async function loadCustomFont(){
   await Font.loadAsync({
      'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    });
}
 
export default function App() {
   useEffect(() => {
      loadCustomFont();
    }, []);

   return <RootNavigation/>
}


