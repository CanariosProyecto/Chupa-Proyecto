import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDgoeIdygroE380AttLZZRwBH1cBYtCoV4",
  authDomain: "bdcanarios.firebaseapp.com",
  projectId: "bdcanarios",
  storageBucket: "bdcanarios.firebasestorage.app",
  messagingSenderId: "376141543054",
  appId: "1:376141543054:web:7bd8b193c87f9ef8a67bdf"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const InicioSes = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        
        Alert.alert('Éxito', '¡Inicio de sesión exitoso!');
        console.log(userCredential.user.uid)
        navigation.navigate('Inicio') //falta que cuando aprete vaya al inicio (me deja con todas las pantallas MENOS con inicio)
        Alert.alert ('exito')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        switch (errorCode) {
          case 'auth/invalid-email':
            Alert.alert('Error', 'El correo no es válido');
            break;
          case 'auth/user-disabled':
            Alert.alert('Error', 'Usuario baneado');
            break;
          case 'auth/user-not-found':
            Alert.alert('Error', 'Usuario no existe');
            break;
          case 'auth/wrong-password':
            Alert.alert('Error', 'Contraseña incorrecta');
            break;
          default:
            Alert.alert('Error', `Error desconocido: ${errorMessage}`);
        }
      });
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
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity style={styles.boton} onPress={handleLogin}>
              <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>
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
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
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
  boton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    width: 200,
    marginLeft: 80,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InicioSes;




