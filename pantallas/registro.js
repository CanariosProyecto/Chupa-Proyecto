
import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import Boton from '../componentes/boton';

// Importación de Firebase
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDgoeIdygroE380AttLZZRwBH1cBYtCoV4",
  authDomain: "bdcanarios.firebaseapp.com",
  projectId: "bdcanarios",
  storageBucket: "bdcanarios.firebasestorage.app",
  messagingSenderId: "376141543054",
  appId: "1:376141543054:web:7bd8b193c87f9ef8a67bdf"
};

// Inicialización de Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const RegistroPantalla = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [apellido, setApellido] = useState('');
  const [mail, setMail] = useState('');

  const handleRegistro = async () => {
    if (mail === '' || password === '' || username === '' || apellido === '') {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, mail, password);
        const user = userCredential.user;

        // Guarda la información adicional del usuario en Firestore
        await setDoc(doc(db, 'users', user.uid), {
          nombre: username,
          apellido: apellido,
          correo: mail,
          userId: user.uid,
        });

        Alert.alert('Éxito', '¡Cuenta creada con éxito!');
        
        // Navega a la pantalla de perfil pasando los datos del usuario
        navigation.navigate('Perfil', {
          nombre: username,
          apellido: apellido,
          correo: mail,
        });
      } catch (error) {
        const errorCode = error.code;
        if (errorCode === 'auth/email-already-in-use') {
          Alert.alert('Error', 'El correo ya está en uso.');
        } else if (errorCode === 'auth/invalid-email') {
          Alert.alert('Error', 'El correo no es válido.');
        } else if (errorCode === 'auth/weak-password') {
          Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres.');
        } else {
          Alert.alert('Error', error.message);
        }
      }
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
            style={styles.input}
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

          <TouchableOpacity style={styles.boton} onPress={handleRegistro}>
            <Text style={styles.buttonText}>Crear cuenta</Text>
          </TouchableOpacity>

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
    backgroundColor: '#f5f5dc',
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
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
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
  cuenta: {
    marginTop: 40,
    alignItems: 'center',
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




