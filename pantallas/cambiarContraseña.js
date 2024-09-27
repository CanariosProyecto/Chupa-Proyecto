/*import { StatusBar } from 'expo-status-bar';
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
    backgroundColor: '#93AE9F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
  },
  contraseña: {
    flex: 1,
    marginTop: '50',
    backgroundColor: '#456E57',
    height: 400,
    width: 400,
    borderRadius: 10,
    paddingHorizontal: 20,
    margin: 20,
    fontWeight: 800,
    resizeMode: 'cover', // Las imágenes se adaptarán manteniendo la proporción
  },
  titulo: {
    marginTop: 5,
    marginLeft: 40,
    fontSize: 35,

  },
  boton: {
    marginLeft: 140,
    marginTop: 3,
  }
});

*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Boton from "/CANARIOS/Chupa-Proyecto/componentes/boton";
import Input from "/CANARIOS/Chupa-Proyecto/componentes/input";

export default function CambiarContraseña() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'android' ? 150 : 0}  // Ajuste para Android
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.contraseña}>
            <Text>{'\n'}</Text>
            <Text style={styles.titulo}> Cambiar contraseña {'\n'} </Text>
            <Text>Vamos a enviarte un mail para que puedas cambiar tu contraseña.</Text>
            <Text>Email</Text>
            <Input />
            <Text>{'\n'}</Text>
            <Text>{'\n'}</Text>
            <Text style={styles.boton}><Boton /></Text>
            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#93AE9F',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,  // Reduce el padding para hacer espacio
  },
  contraseña: {
    backgroundColor: '#456E57',
    height: 400,
    width: 400,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  titulo: {
    marginTop: 5,
    marginLeft: 40,
    fontSize: 35,
  },
  boton: {
    marginLeft: 140,
    marginTop: 3,
  },
});
