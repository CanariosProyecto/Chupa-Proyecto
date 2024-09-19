import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Boton from "/CANARIOS/Chupa-Proyecto/componentes/boton";
import Input from "/CANARIOS/Chupa-Proyecto/componentes/input";
export default function CambiarContraseña() {
  return (

    <View style={styles.container}>
      <View style={styles.contraseña}>
        <Text>{'\n'}</Text>
        <Text style={styles.titulo}> Cambiar contraseña {'\n'} </Text>
        <Text>Vamos a enviarte un mail para que puedas cambiar tu contraseña. </Text>
        <Text>Email</Text>
        <Input />
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Text style={styles.boton}><Boton /></Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef6b0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  contraseña: {
    flex: 1,
    marginTop: '50',
    backgroundColor: '#86895d',
    height: 500,
    width: 400,
    borderRadius: 10,
    padding: 20,
    margin: 20,
    fontWeight: 800,
  },
  titulo: {
    marginLeft: 15,
    fontSize: 35,

  },
  boton: {
    marginLeft: 140,
    marginTop: 3,
  }
});











