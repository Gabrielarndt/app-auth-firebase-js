import { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles from '../estilos'
import Toast from "react-native-toast-message"

import { getAuth, signInWithEmailAndPassword  } from "firebase/auth"
import app from "../configuracao/firebaseConfig"
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function LoginEmail() {
  const [email, setEmail] = useState("");
  const [passord, setPassord] = useState("");

  function logar(){
    const auth = getAuth(app)
    signInWithEmailAndPassword(auth, email, passord)
    .then((data) => {
        AsyncStorage.setItem('token', data.user.accessToken)
    })
    .catch((error) => {
      Toast.show({
        type: "error",
        text1: "Atenção!",
        text2: error.message,
      })
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}> 
        <Text style={styles.title}>Sign in</Text>
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
          <TouchableOpacity style={styles.botao} onPress={logar}>
            <Text style={{ color: "white", fontSize: 12, fontWeight: 700 }}>
              Gravar
            </Text>
          </TouchableOpacity>          
        </View>
      </View>
    </View>
  );
}