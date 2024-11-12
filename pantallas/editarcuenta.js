
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useAuth } from '../src/config/authcontext';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const Editarcuenta = ({ navigation }) => {
  const { user } = useAuth();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDNI] = useState('');
  const [telefono, setTelefono] = useState('');
  const firestore = getFirestore();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const docRef = doc(firestore, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        setNombre(userData.nombre);
        setApellido(userData.apellido);
        setDNI(userData.dni || '');
        setTelefono(userData.telefono || '');
      }
    };

    fetchUserInfo();
  }, [user.uid, firestore]);

  const handleSave = async () => {
    if (!nombre || !apellido) {
      Alert.alert('Error', 'Por favor completa todos los campos requeridos.');
      return;
    }

    // Guardar/actualizar la información del usuario
    await setDoc(doc(firestore, 'users', user.uid), {
      nombre,
      apellido,
      dni,
      telefono,
    }, { merge: true }); // merge: true para no sobrescribir otros campos

    Alert.alert('Éxito', 'Datos actualizados exitosamente.', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Cuenta</Text>
      
      <TextInput
        value={nombre}
        onChangeText={setNombre}
        placeholder="Nombre"
        style={styles.input}
      />
      <TextInput
        value={apellido}
        onChangeText={setApellido}
        placeholder="Apellido"
        style={styles.input}
      />
      <TextInput
        value={dni}
        onChangeText={setDNI}
        placeholder="DNI"
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        value={telefono}
        onChangeText={setTelefono}
        placeholder="Teléfono"
        keyboardType="phone-pad"
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5dc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#ada46f',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Editarcuenta;