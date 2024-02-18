import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../estilos";
import { useState } from "react";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { getFirestore, collection, addDoc } from "firebase/firestore"
import app from "../configuracao/firebaseConfig"

export default function CadContato({ navigation }) {
  const [nome, setNome] = useState("maria");
  const [email, setEmail] = useState("maria@gmail.com");
  const [fone, setFone] = useState("(47)9087-0987");

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

    const db = getFirestore(app)
    try{
      let contato = await addDoc(collection(db, "contatos"),{
        nome,email, fone
      })
      Toast.show({
        type: "success",
        text1: "Atenção!",
        text2: "Contato inserido com sucesso",
      });
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Cadastro de contatos</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe nome"
          defaultValue={nome}
          onChangeText={(txt) => setNome(txt)}
        />

        <TextInput
          style={styles.input}
          placeholder="Informe email"
          defaultValue={email}
          onChangeText={(txt) => setEmail(txt)}
        />

        <TextInput
          style={styles.input}
          placeholder="Informe telefone"
          defaultValue={fone}
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

          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate("consContato")}
          >
            <Text style={{ color: "white", fontSize: 12, fontWeight: 700 }}>
              Consultar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
