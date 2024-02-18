import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../estilos";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../configuracao/firebaseConfig";
import { Button } from "react-native-web";
import CadContato from "./cadContato";
import CardContato from "./cardContato";

export default function ConsContato({ navigation }) {
  const [contatos, setContatos] = useState([]);

  const db = getFirestore(app);

  async function pesquisar() {
    let query = await getDocs(collection(db, "contatos"));
    query.forEach((doc) => setContatos((ant) => [...ant, doc.data()]));
  }

  useEffect(() => {
    pesquisar();    
  }, []);

  return (
    <View style={styles.container}>
      <Text>Consulta de Contatos</Text>
      {/*  contatos.map(ct => 
            <CardContato 
               nome={ct.nome}
               email={ct.email}
               fone={ct.fone}
            />)*/}
      <FlatList
        data={contatos}
        renderItem={({item}) => (
          <CardContato nome={item.nome} email={item.email} fone={item.fone} navigation={navigation} />
        )}
        key={item => item.id}
      />
    </View>
  );
}
