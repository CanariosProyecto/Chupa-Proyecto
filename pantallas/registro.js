/*import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import TextInput from '../componentes/input'; 
import Boton from '../componentes/boton';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, database } from '../src/config/firebase'; // Importar la autenticación y la base de datos
import { doc, setDoc } from 'firebase/firestore'; // Para agregar documentos a Firestore

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
        // Crear cuenta en Firebase Authentication usando correo y contraseña
        const userCredential = await createUserWithEmailAndPassword(auth, mail, password);
        const user = userCredential.user;

        // Guardar la información adicional del usuario en Firestore
        await setDoc(doc(database, 'users', user.uid), {
          nombre: username,
          apellido: apellido,
          correo: mail,
          userId: user.uid, // ID del usuario
        });

        Alert.alert('Éxito', '¡Cuenta creada con éxito!');
        navigation.navigate('Inicio'); // Navega a la pantalla de inicio

      } catch (error) {
        const errorMessage = error.message;
        Alert.alert('Error', errorMessage);
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

          <View style={styles.boton}>
            <Boton onPress={handleRegistro} title="Aceptar" />
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
    marginLeft: 50,
  },
  input: {
    borderWidth: 1,
      borderColor: '#000',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
  },
  boton: {
    marginTop: 30,
    alignItems: 'center',
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

/* aca prueba code
import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import TextInput from '../componentes/input'; 
import Boton from '../componentes/boton';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, database } from '../src/config/firebase';
import { doc, setDoc } from 'firebase/firestore';

const RegistroPantalla = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [apellido, setApellido] = useState('');
  const [mail, setMail] = useState('');

  const handleRegistro = async () => {
    // Comprobar que todos los campos estén completos
    if (mail === '' || password === '' || username === '' || apellido === '') {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return; // Salir de la función si hay campos vacíos
    }

    try {
      // Crear cuenta en Firebase Authentication usando correo y contraseña
      const userCredential = await createUserWithEmailAndPassword(auth, mail, password);
      const user = userCredential.user;

      // Guardar la información adicional del usuario en Firestore
      await setDoc(doc(database, 'users', user.uid), {
        nombre: username,
        apellido: apellido,
        correo: mail,
        userId: user.uid, // ID del usuario
      });

      Alert.alert('Éxito', '¡Cuenta creada con éxito!');
      navigation.navigate('Inicio'); // Navega a la pantalla de inicio

    } catch (error) {
      const errorMessage = error.message;
      Alert.alert('Error', errorMessage);
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

          <View style={styles.boton}>
            <Boton onPress={handleRegistro} title="Aceptar" />
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
    marginLeft: 50,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#8A8A8A',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    marginHorizontal: 50,
    marginBottom: 15,
  },
  boton: {
    marginTop: 30,
    alignItems: 'center',
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

export default RegistroPantalla; */


import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import Boton from '../componentes/boton';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore'; 
import { firebaseConfig } from '../src/config/firebase';

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const RegistroPantalla = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [apellido, setApellido] = useState('');
  const [mail, setMail] = useState('');

  const handleRegistro = async () => {
    console.log('Valores actuales:', {
      mail,
      password,
      username,
      apellido,
    });

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
        navigation.navigate('Inicio'); // Navega a la pantalla de inicio
      } catch (error) {
        const errorMessage = error.message;
        Alert.alert('Error', errorMessage);
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

          <TouchableOpacity style={styles.boton} >
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
    marginTop: 30,
    alignItems: 'center',
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
  boton:{
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    width:200,
    marginLeft:80,
    marginTop:30
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default RegistroPantalla; 




// ULTIMA PRUEBA
/*import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import Boton from "../componentes/boton"

const RegistroPantalla = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  return (
      <KeyboardAvoidingView>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Crear cuenta</Text>

          <Text style={styles.label}>Nombre</Text>
          <TextInput
            label="Nombre"
            value={nombre}
            onChangeText={setNombre}
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
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />

          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            value={contraseña}
            onChangeText={setContraseña}
            secureTextEntry
          />

          <View style={styles.boton}>
            <Boton 
             />
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
marginLeft: 50,
},
input: {
backgroundColor: '#fff',
borderColor: '#8A8A8A',
borderWidth: 1,
borderRadius: 5,
paddingHorizontal: 10,
height: 40,
marginHorizontal: 50,
marginBottom: 15,
},
boton: {
marginTop: 30,
alignItems: 'center',
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

export default RegistroPantalla; */