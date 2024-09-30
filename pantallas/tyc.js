import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, KeyboardAvoidingView,Platform, ScrollView} from 'react-native';
import Boton from '../componentes/boton';

const InicioSes = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    style={{ flex: 1 }}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} 
    >
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Terminos y condiciones </Text>

          <Text style={styles.label}>Email / Nombre de usuario</Text>
          
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