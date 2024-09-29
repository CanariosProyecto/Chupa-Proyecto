import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import TextInput from '../componentes/input'; 
import Boton from '../componentes/boton';

const RegistroPantalla = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [apellido, setApellido] = useState('');
  const [mail, setMail] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
    } else {
      Alert.alert('Éxito', '¡Inicio de sesión exitoso!');
      navigation.navigate('Inicio'); // Navega a la pantalla de inicio
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Crear cuenta</Text>

          <Text style={styles.label}>Nombre</Text>
          <TextInput
            label="Nombre"
            value={username}
            onChangeText={setUsername}
            style={styles.input} // Aplicamos el estilo a los inputs
          />

          <Text style={styles.label}>Apellido</Text>
          <TextInput
            label="Apellido"
            value={apellido}
            onChangeText={setApellido}
            style={styles.input}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            label="Email"
            value={mail}
            onChangeText={setMail}
            style={styles.input}
          />

          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          secureTextEntry
          />


          <View style={styles.boton}>
            <Boton onPress={handleLogin} title="Aceptar" />
          </View>

          <View style={styles.cuenta}>
            <Text style={styles.textoCuenta}>¿Ya tenés cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Inicio de sesión')}>
              <Text style={styles.textLink}>Inicia sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc', // Color de fondo
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 50, // Ajustamos los márgenes para coincidir con la imagen
  },
  input: {
    backgroundColor: '#fff', // Color de fondo del input
    borderColor: '#8A8A8A',     // Color del borde
    borderWidth: 1,             // Grosor del borde
    borderRadius: 5,            // Borde redondeado
    paddingHorizontal: 10,      // Espaciado interior
    height: 40,                 // Altura del input
    marginHorizontal: 50,       // Márgenes laterales
    marginBottom: 15,           // Espacio entre los inputs
  },
  boton: {
    marginTop: 30, // Espacio entre el formulario y el botón
    alignItems: 'center', // Centrar el botón
  },
  cuenta: {
    marginTop: 40,
    alignItems: 'center', // Centramos los textos de "Inicia sesión"
  },
  textoCuenta: {
    fontSize: 16,
    color: 'black',
  },
  textLink: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'black',
  },
});

export default RegistroPantalla;
