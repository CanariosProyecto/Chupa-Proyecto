// EditarDireccion.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native'; // Asegúrate de importar Text
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../src/config/authcontext'; // Asegúrate de tener acceso al contexto de autenticación

const EditarDireccion = ({ navigation }) => {
  const { user } = useAuth();
  const firestore = getFirestore();
  const [direccion, setDireccion] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [provincia, setProvincia] = useState('');
  const [pais, setPais] = useState('');

  const handleSave = async () => {
    if (user) {
      const addressData = {
        direccion,
        codigoPostal,
        provincia,
        pais,
        userId: user.uid, 
      };

      try {
        await addDoc(collection(firestore, 'addresses'), addressData); 
        Alert.alert('Éxito', 'Dirección guardada con éxito.');
        navigation.goBack(); 
      } catch (error) {
        Alert.alert('Error', 'Hubo un problema al guardar la dirección.');
        console.error("Error guardando la dirección: ", error);
      }
    } else {
      Alert.alert('Error', 'No hay usuario autenticado.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar/Agregar Direcciones</Text>

      <TextInput
        placeholder="Dirección"
        value={direccion}
        onChangeText={setDireccion}
        style={styles.input}
      />
      <TextInput
        placeholder="Código Postal"
        value={codigoPostal}
        onChangeText={setCodigoPostal}
        style={styles.input}
      />
      <TextInput
        placeholder="Provincia"
        value={provincia}
        onChangeText={setProvincia}
        style={styles.input}
      />
      <TextInput
        placeholder="País"
        value={pais}
        onChangeText={setPais}
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

export default EditarDireccion;
