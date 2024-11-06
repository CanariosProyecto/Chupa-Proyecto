import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView,Platform, ScrollView, TouchableOpacity} from 'react-native';

const CambiarContraseña = ({ navigation }) => {
  const [contraseña, setContraseña] = useState('');

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
            value={contraseña}
            onChangeText={setContraseña}
            placeholder={"Ej: apellido.nombre@gmail.com"}
          />
          
          <TouchableOpacity style={styles.boton} >
            <Text style={styles.buttonText}>Enviar</Text>
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
    borderWidth: 1,
      borderColor: '#000',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
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
  text:{
    fontSize: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default CambiarContraseña;