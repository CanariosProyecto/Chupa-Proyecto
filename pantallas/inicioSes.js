import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Platform } from 'react-native';
import Boton from '../componentes/boton';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
    } else {
      Alert.alert('Éxito', '¡Inicio de sesión exitoso!');
      navigation.navigate('Main'); // Navega a la pantalla principal con pestañas
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Inicio de Sesión</Text>

          <Text style={styles.nom}>Email/Nombre de usuario</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />

          <Text style={styles.contra}>Contraseña</Text>
          <TextInput
            style={styles.input1}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Boton onPress={handleLogin} />
        </View>

        <View style={styles.extraOptions}>
          <TouchableOpacity onPress={() => Alert.alert('Funcionalidad no implementada', 'Función de "Olvidaste tu contraseña" aún no implementada.')}>
            <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
          <Text style={styles.link2}>¿No tienes cuenta aún?</Text>
          <TouchableOpacity onPress={() => Alert.alert('Funcionalidad no implementada', 'Función de "Crear cuenta" aún no implementada.')}>
            <Text style={styles.link1}>Crear cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef6b0',
  },
  content: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 90,
  },
  nom: {
    top: 80,
    fontWeight: 'bold',
  },
  input1: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 80,
  },
  contra: {
    top: 70,
    fontWeight: 'bold',
  },
  extraOptions: {
    position: 'absolute',
    bottom: 170,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  link: {
    color: 'black',
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  link1: {
    color: 'black',
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  link2: {
    color: 'black',
    fontSize: 16,
    marginTop: 10,
  },
});

export default LoginScreen;