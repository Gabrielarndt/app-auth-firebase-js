import CadUser from "./componentes/cadUser";
import LoginEmail from "./componentes/loginEmail";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function RotasAdm() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
          name="criarUser" 
          component={CadUser}
          options={{title:'Criar usuário'}}
     />
      <Tab.Screen 
         name="loginEmail" 
         component={LoginEmail}
         options={{title:'Fazer login'}}
         />
    </Tab.Navigator>
  );
}
