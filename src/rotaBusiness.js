import CadContato from "./componentes/cadContato";
import ConsContato from "./componentes/consContato";
import EditaContato from "./componentes/editaContato";

import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export default function RotasBussiness() {
  return (
    <Drawer.Navigator useLegacyImplementation='true'>
        <Drawer.Screen 
            name="cadContato" 
            component={CadContato}
            options={{title:'Cadastrar contato'}}
        />
        <Drawer.Screen 
           name="consContato" 
           component={ConsContato} 
           options={{title:'Consulta contatos'}}
        />
        <Drawer.Screen 
            name="editaContato" 
            component={EditaContato}
            options={{headerShown:false}}         />

        
      </Drawer.Navigator>
  );
}
