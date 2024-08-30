//Registro
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Input from './componentes/input'
import Boton from './componentes/boton';

export default function crearcuenta({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.registerContainer}>
     
        <Text style={styles.titulo}>Registrate</Text>
      
         <Text style={styles.letra}>Datos personales</Text>
      
          <Text style={styles.letra}>Nombre completo</Text>
         <Input/>
         <Text style={styles.letra}>Número de telefono</Text>
            <Input/>
         <Text style={styles.letra}>Email</Text>
         <Input/>
         <Text style={styles.letra}>Contraseña</Text>
         <Input/>
        <Text style={styles.letra}>Ya estas registrado?
         <Pressable style={styles.registro} onPress={() => navigation.navigate('login')}> Inicia Sesion</Pressable>
      </Text>
      <Boton/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 42,
    fontWeight: 500,
  },
  container: {
    flex: 1,
    backgroundColor: '#154360',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  letracolor: {
    fontSize: 15,
    fontWeight: 500,
    color: "blue",
  },
registro: {
  textDecorationLine: 'underline',
  color: "blue",
  
},
});