import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, KeyboardAvoidingView,Platform, ScrollView} from 'react-native';

const infoPersonal = () => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    style={{ flex: 1 }}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} 
    >
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

      <View style={styles.container}>
          <Text style={styles.titulo}>Información personal </Text>
          <View style={styles.caja}>
            <Text style={styles.letras}>
                Hola, nosotros somos un grupo de amigos con la iniciativa de un emprendimiento 
                sobre cultural argentina. 
            </Text>
            <Text>{"\n"}</Text>
            <Text style={styles.letras}>Pueden encontrarnos en: </Text>
            <Text style={styles.letras}>Instagram: canarios  </Text> 
            <Text style={styles.letras}> WhatsApp: 2994158752</Text>
            <Text style={styles.letras}>Correo: canarios@gmail.com</Text>
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
    padding: 25,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  caja:{
    padding:30,
    margin:10,
    height:300,
    width: 350, 
    backgroundColor: '#daefb2',
    marginTop:80,
    borderRadius: 10,
  },
  letras:{
    fontSize: 16,
  }
    
});

export default infoPersonal;