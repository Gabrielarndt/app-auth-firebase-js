import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../estilos";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";

import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import app from "../configuracao/firebaseConfig";

export default function EditaContato({ navigation, route }) {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [fone, setFone] = useState();
  
  const db = getFirestore(app);

  async function pesquisar() {
    const dados = query(
      collection(db, "contatos"),
      where("email", "==", route.params.email)
    );
    let q = await getDocs(dados);
    q.forEach((doc) => {
      setNome(doc.data().nome)  
      setEmail(doc.data().email) 
      setFone(doc.data().fone) 
    });    
  }

  useEffect(() => {
    pesquisar()      
  }, []);

  async function salvar() {
    if (nome == "") {
      Toast.show({
        type: "info",
        text1: "Atenção!",
        text2: "Informe nome",
      });
      return;
    }

    if (email == "") {
      Toast.show({
        type: "info",
        text1: "Atenção!",
        text2: "Informe email",
      });
      return;
    }

    if (fone == "") {
      Toast.show({
        type: "info",
        text1: "Atenção!",
        text2: "Informe telefone",
      });
      return;
    }

    try {
      let contato = await addDoc(collection(db, "contatos"), {
        nome,
        email,
        fone,
      });
      Toast.show({
        type: "success",
        text1: "Atenção!",
        text2: "Contato inserido com sucesso",
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Edição de contatos</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe nome"
          value={nome}
          onChangeText={(txt) => setNome(txt)}
        />

        <TextInput
          style={styles.input}
          placeholder="Informe email"
          value={email}
          onChangeText={(txt) => setEmail(txt)}
        />

        <TextInput
          style={styles.input}
          placeholder="Informe telefone"
          value={fone}
          onChangeText={(txt) => setFone(txt)}
        />

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity style={styles.botao} onPress={salvar}>
            <Text style={{ color: "white", fontSize: 12, fontWeight: 700 }}>
              Gravar
            </Text>
          </TouchableOpacity>                 
        </View>
        
      </View>
    </View>
  );
}
