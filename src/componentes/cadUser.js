import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../estilos";
import { useState } from "react";
import Toast from "react-native-toast-message"
import AsyncStorage from '@react-native-async-storage/async-storage'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../configuracao/firebaseConfig";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function CadUser({ navigation }) {
  const [email, setEmail] = useState("");
  const [passord, setPassord] = useState("");
  
  function logarGoogle(){
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      AsyncStorage.setItem('token', credential.accessToken)
      const user = result.user
      console.log(user)
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  function salvar() {
    if (email == "") {
      Toast.show({
        type: "info",
        text1: "Atenção!",
        text2: "Informe email",
      });
      return;
    }

    if (passord.length < 6) {
      Toast.show({
        type: "info",
        text1: "Atenção!",
        text2: "Senha deve ter no minímo 6 caracteres",
      });
      return;
    }

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, passord)
      .then((userCredential) => {
        //console.log(userCredential.user)
        Toast.show({
          type: "success",
          text1: "Sucesso",
          text2: "Usuário cadastrado com sucesso",
        });
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: "Atenção!",
          text2: error.message,
        });
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Cadastro de usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe email"
          defaultValue={email}
          onChangeText={(txt) => setEmail(txt)}
        />

        <TextInput
          style={styles.input}
          placeholder="Informe senha"
          defaultValue={passord}
          onChangeText={(txt) => setPassord(txt)}
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
            onPress={() => navigation.navigate("loginEmail")}
          >
            <Text style={{ color: "white", fontSize: 12, fontWeight: 700 }}>
              Logar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop:10}}>
        <TouchableOpacity
          style={[styles.botao, {width: 200}]}
          onPress={logarGoogle}
        >
          <Text style={{ color: "white", fontSize: 12, fontWeight: 700 }}>
            Logar com google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
