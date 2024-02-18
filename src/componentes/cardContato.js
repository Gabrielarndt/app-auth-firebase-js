import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import styles from "../estilos";


export default function CardContato( props ) {
  return (
    <View style={{marginVertical:5, borderWidth: 1, padding: 10}}>
        <Text style={{fontWeight: 700}}>
            Nome: 
            <Text style={{fontWeight: 100}}> {props.nome}</Text> 
        </Text>

        <Text style={{fontWeight: 700}}>Email: 
            <Text style={{fontWeight: 100}}> {props.email}</Text> 
        </Text>
        <Text style={{fontWeight: 700}}>
            Fone: 
            <Text style={{fontWeight: 100}}> {props.fone}</Text> 
        </Text>
        <View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 15 }}>
            <TouchableOpacity
                style={{borderBottomColor: 'red', borderBottomWidth: 1}}
                onPress={()=> props.navigation.navigate('editaContato',{email: props.email})}
            >
                <Text style={{fontSize: 10, paddingHorizontal: 10}}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{borderBottomColor: 'red', borderBottomWidth: 1}}
            >
                <Text style={{fontSize: 10, paddingHorizontal: 10}}>Excluir</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}
