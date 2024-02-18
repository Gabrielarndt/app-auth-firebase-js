import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'      
    },
    input:{
        borderBottomWidth: 1,
        marginVertical: 10,
        padding: 10
    },
    title:{
        fontSize: 18,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ff6347',
        color: '#008080',
        fontWeight: 700
    },
    form:{
        borderWidth: 1,
        padding: 20,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 30
    },
    botao:{
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 20,
        width: 80,
        textAlign: 'center'       
    }
  });

  export default styles
  