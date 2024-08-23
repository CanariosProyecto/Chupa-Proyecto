import React from 'react';
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
