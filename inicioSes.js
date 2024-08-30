import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import Imputexport from './componentes/input'; 
import Boton from './componentes/boton' ;

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [apellido, setApellido] = useState('');
  const [mail, setMail] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
    } else {
      // Aquí puedes añadir la lógica de autenticación en el futuro
      Alert.alert('Éxito', '¡Inicio de sesión exitoso!');
      navigation.navigate('Inicio'); // Navega a la pantalla de inicio
    }
  };

  return (
    <View style={styles.container}>

        <Text style={styles.title}>borrrar dsp</Text>


      <Text style={styles.title}>Crear cuenta</Text>
      <Text style={styles.texnormal} >Nombre</Text>
      <Imputexport
        label="Nombre"
        value={username}
        onChangeText={setUsername}
      />

      <Text style={styles.texnormal} >Apellido</Text>
      <Imputexport
        label="Apellido"
        value={apellido}
        onChangeText={setApellido}
      />

      <Text style={styles.texnormal} >Email</Text>
      <Imputexport
        label="email"
        value={mail}
        onChangeText={setMail}
      />

      <Text style={styles.texnormal} >Contraseña</Text>
      <Imputexport
        label="contraseña"
        value={password}
        onChangeText={setPassword}
      />

     <Boton/>
  

      <View style={styles.extraOptions}>
        <TouchableOpacity onPress={() => Alert.alert('Funcionalidad no implementada', 'Función de "Olvidaste tu contraseña" aún no implementada.')}>
          <Text style={styles.link}>Ya tenes cuenta? Inicia sesion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef6b0',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    bottom: 70,
    textAlign: 'center',
  },
  texnormal: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 50, 
  },
  extraOptions: {
    marginTop: 20,
    alignItems: 'center',
  },
  
  link: {
    color: 'black',
    fontSize: 15,
    marginTop: 10,
  },
});

export default LoginScreen;