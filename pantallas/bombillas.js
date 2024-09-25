import React from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Obtener las dimensiones de la pantalla
const windowWidth = Dimensions.get('window').width;

export default function  Bombillas() {
  const navigation = useNavigation();
  let mates = [
    {
      "imagen": require("../imagenes/bombillas.jpg"),
      "nombre": "Mate",
      "precio": "$10"
    },
    {
      "imagen": require("../imagenes/bombillas.jpg"),
      "nombre": "Bombilla",
      "precio": "$5"
    },
    {
      "imagen": require("../imagenes/bombillas.jpg"),
      "nombre": "Termo",
      "precio": "$15"
    },
    {
      "imagen": require("../imagenes/bombillas.jpg"),
      "nombre": "Yerba",
      "precio": "$8"
    },
    {
      "imagen": require("../imagenes/bombillas.jpg"),
      "nombre": "Mate",
      "precio": "$10"
    },
    {
      "imagen": require("../imagenes/bombillas.jpg"),
      "nombre": "Bombilla",
      "precio": "$5"
    },
    {
      "imagen": require("../imagenes/bombillas.jpg"),
      "nombre": "Termo",
      "precio": "$15"
    },
    {
      "imagen": require("../imagenes/bombillas.jpg"),
      "nombre": "Yerba",
      "precio": "$8"
    }
  ];
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.grid}>
      <Text style={styles.titulo}> Bombillas {'\n'} </Text>
        {mates.map((mates, index) => (
          <View key={index} style={styles.itemContainer}>
          <Image source={mates.imagen} style={styles.image} />
            <TouchableOpacity  onPress={() => navigation.navigate('Inicio')}>
                <View style={styles.textContainer}>
                  <Text style={styles.nombre}>{mates.nombre}</Text>
                  <Text style={styles.precio}>{mates.precio}</Text>
                </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 10, // Añadir un poco de padding alrededor de la cuadrícula
    backgroundColor: '#93AE9F',
  },
  titulo: {
    marginTop: 15,
    marginLeft: 140,
    fontSize: 35,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Esto asegura que las imágenes se envuelvan en varias filas
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: (windowWidth / 2) - 15, // Dos columnas, con un poco de margen
    marginBottom: 20, // Separación entre los productos
    alignItems: 'center', // Centrar los elementos dentro del contenedor
  },
  image: {
    width: '100%',
    height: (windowWidth / 2) - 15, // Hacerlas cuadradas
    borderWidth: 2, // Grosor del borde
    borderColor: '#2d572c', // Color verde del borde
    borderRadius: 10, // Redondeado del borde (opcional)
    overflow: 'hidden', // Asegurar que la imagen no salga de los bordes redondeados
  },
  textContainer: {
    marginTop: 10, // Separación de 1 cm (aproximadamente 10px)
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Texto centrado
  },
  precio: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center', // Texto centrado
  },
});