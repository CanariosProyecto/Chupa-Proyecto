import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView,Platform, ScrollView} from 'react-native';
import Boton from '../componentes/boton';

const CambiarContraseña = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username === '') {
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
          <Text style={styles.titulo}>Cambiar Contraseña</Text>
          <Text style={styles.text}>Vamos a enviarte un email para que puedas cambiar tu contraseña. {"\n"}</Text>
          <Text style={styles.label}>Email </Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
          <Text style={styles.boton}>
            <Boton onPress={handleLogin} />
          </Text>
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
    marginTop: 40
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
  boton:{
    marginLeft: 130,
  },
  text:{
    fontSize: 16,
  }
});

export default CambiarContraseña;