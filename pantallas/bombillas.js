import React from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Obtener las dimensiones de la pantalla
const windowWidth = Dimensions.get('window').width;

export default function  Bombillas() {
  const navigation = useNavigation();
  let Bombilla = [
    {
      "imagen": require("../imagenes/bombilla.prueba.jpg"),
      "nombre": "Bombilla de bronce",
      "precio": "$15.000",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/bombilla2.jpeg"),
      "nombre": "Bombilla pico de loro ",
      "precio": "$5.000",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/bombilla3.jpeg"),
      "nombre": "Bombilla de alpaca",
      "precio": "$7.500",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/bombilla4.jpeg"),
      "nombre": "Bombilla de alpaca cincelada",
      "precio": "$9.500",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/bombilla5.jpeg"),
      "nombre": "Bombillón pico de rey",
      "precio": "$20.000",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/bombilla6.jpeg"),
      "nombre": "Bombilla alpaca pico de loro",
      "precio": "$8.000",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/bombilla7.jpeg"),
      "nombre": "Bombilla de alpaca y bronce",
      "precio": "$23.500",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/bombilla8.jpeg"),
      "nombre": "Bombilla pico de loro virola fina",
      "precio": "$4.500",
      "pantalla": "Producto"
    }
  ];
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.grid}>
        <Text style={styles.titulo}> Bombillas {'\n'} </Text>
        {Bombilla.map((Bombilla, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemContainer}
            onPress={() => navigation.navigate(Bombilla.pantalla, {
              imagen: Bombilla.imagen,
              nombre: Bombilla.nombre,
              precio: Bombilla.precio
            })}
          >
            <Image source={Bombilla.imagen} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.nombre}>{Bombilla.nombre}</Text>
              <Text style={styles.precio}>{Bombilla.precio}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 10, // Añadir un poco de padding alrededor de la cuadrícula
    backgroundColor: '#f5f5dc',
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