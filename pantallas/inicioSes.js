import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, KeyboardAvoidingView,Platform, ScrollView} from 'react-native';
import Boton from '../componentes/boton';

const InicioSes = ({ navigation }) => {
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
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    style={{ flex: 1 }}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} 
    >
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Inicio de sesión</Text>

          <Text style={styles.label}>Email / Nombre de usuario</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />

          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Text style={styles.boton}>
            <Boton onPress={handleLogin} title="Iniciar sesión" />
          </Text>
        </View>

        <View style={styles.extraOptions}>
          <TouchableOpacity onPress={() => navigation.navigate('Cambiar Contraseña')}>
            <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
          <Text style={styles.link2}>¿No tenés cuenta aún?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
            <Text style={styles.link}>Crear cuenta</Text>
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
    backgroundColor: '#f5f5dc', 
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  extraOptions: {
    alignItems: 'center',
    marginBottom: 40,
  },
  link: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  link2: {
    color: 'black',
    fontSize: 16,
    marginTop: 10,
  },
  boton:{
    marginLeft: 130,
  }
});

export default InicioSes;