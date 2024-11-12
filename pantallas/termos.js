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
      "nombre": "Termo media manija nobel home plateado ",
      "precio": "$29.000,00",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/termo2c.jpg"),
      "nombre": "Termolar r-evolution plomo",
      "precio": "$83.000,00",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/termo3.webp"),
      "nombre": "Stanley adventure to-go blanco 1L",
      "precio": "$135.000,00",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/termo4.webp"),
      "nombre": "Stanley matesystem 800ml maple",
      "precio": "$149.000,00",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/termo5.webp"),
      "nombre": "Stanley classic 950ml negro ",
      "precio": "$140.000,00",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/termo6.webp"),
      "nombre": "Stanley classic 950 lake",
      "precio": "$140.000,00",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/termo7c.jpg"),
      "nombre": "Termolar r-evolution bronce",
      "precio": " $83.000,00",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/termo8.webp"),
      "nombre": "Termolar r-evolution negro click mate ",
      "precio": "$83.000,00",
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
            onPress={() => navigation.navigate("Producto", {
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
    borderWidth: 2,
    borderColor: '#2d572c',
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