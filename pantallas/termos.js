import React from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Obtener las dimensiones de la pantalla
const windowWidth = Dimensions.get('window').width;

export default function  Termos() {
  const navigation = useNavigation();
  let termos = [
    {
      "imagen": require("../imagenes/termo1.jpg"),
      "nombre": "Stanley 1.25L",
      "precio": "$42.000",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/termo2.jpg"),
      "nombre": "Acero inoxidable 1.25L",
      "precio": "$17.500",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/termo3.jpeg"),
      "nombre": "Media manija acero 1L",
      "precio": "$28.300",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/termo4.jpg"),
      "nombre": "Discovery 1L",
      "precio": "$8",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/termo5.jpeg"),
      "nombre": "Stanley blanco 1L",
      "precio": "$52.200",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/termo6.jpeg"),
      "nombre": "Media manija negro 1L",
      "precio": "$28.300",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/termo7.jpeg"),
      "nombre": "Stanley rosa 1.4L",
      "precio": "$50.800",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/termo8.jpeg"),
      "nombre": "Stanley azul metalizado 1.3L",
      "precio": "$79.500",
      "pantalla": "Producto"
    }
  ];
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.grid}>
        <Text style={styles.titulo}> Termos {'\n'} </Text>
        {termos.map((termos, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemContainer}
            onPress={() => navigation.navigate(termos.pantalla, {
              imagen: termos.imagen,
              nombre: termos.nombre,
              precio: termos.precio
            })}
          >
            <Image source={termos.imagen} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.nombre}>{termos.nombre}</Text>
              <Text style={styles.precio}>{termos.precio}</Text>
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