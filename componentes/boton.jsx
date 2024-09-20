import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Boton() {
  return (
    <View style={styles.container}>
      <Button
        title="Aceptar" onPress={() => Alert.alert('boton simple')}
        color="black"  
        style={styles.Boton}></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  Boton: {
    backgroundColor: 'lightsteelblue',
    color: 'black',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    marginLeft: 3,
    height: 40,
    width: 80,
    fontFamily: 'Arial',
  }
});




/*import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function Boton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Guardado')}
      >
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10, 
  },
  button: {
    
    backgroundColor: '#1B4F72',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 20,
    borderColor: '#white',  // Color del borde
    borderWidth: 1,  // Ancho del borde
  
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
*/