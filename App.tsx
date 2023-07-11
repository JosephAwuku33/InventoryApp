import 'react-native-gesture-handler';
import RootNavigation from './src/navigation';
import './config/firebase';
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


