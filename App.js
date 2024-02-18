import Toast from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from '@react-navigation/stack';
import Home from "./home";
import RotasAdm from "./src/rotasAdm";
import RotasBussiness from "./src/rotaBusiness";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Home" component={ Home } />
         <Stack.Screen name="Agenda" component={RotasBussiness} />
         <Stack.Screen name="Auth" component={RotasAdm} />        
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
