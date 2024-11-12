// pantallas/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const micuentainfo = ({ route }) => {
  const { username, apellido, correo } = route.params; // Recibe los parámetros de navegación

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil del Usuario</Text>
      <Text style={styles.text}>Nombre: {username}</Text>
      <Text style={styles.text}>Apellido: {apellido}</Text>
      <Text style={styles.text}>Email: {correo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5dc',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default micuentainfo;