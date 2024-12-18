import React from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Obtener las dimensiones de la pantalla
const windowWidth = Dimensions.get('window').width;

export default function  Yerbas(){
  const navigation = useNavigation();
  let Yerbas = [
    {
      "imagen": require("../imagenes/yerba1.jpeg"),
      "nombre": "Canarias serena 500gr",
      "precio": "$4.500",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/yerba2.jpeg"),
      "nombre": "Rey verde elaborada con palo 500gr",
      "precio": "$4.000",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/yerba3.jpeg"),
      "nombre": "Canarias edición especial 500gr",
      "precio": "$4.700",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/yerba4.jpeg"),
      "nombre": "Canarias 1Kg",
      "precio": "$8.000",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/yerba5.jpeg"),
      "nombre": "Sara 1Kg",
      "precio": "$7.000",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/yerba6.jpeg"),
      "nombre": "Sara extra suave 1Kg",
      "precio": "$7.000",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/yerba7.jpeg"),
      "nombre": "Baldo 1Kg",
      "precio": "$8.500",
      "pantalla": "Producto"
    },
    {
      "imagen": require("../imagenes/yerba8.jpeg"),
      "nombre": "Rey verde tradicional 500gr",
      "precio": "$4.500",
      "pantalla": "Producto"
    }
  ];
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.grid}>
        <Text style={styles.titulo}> Yerbas {'\n'} </Text>
        {Yerbas.map((Yerbas, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemContainer}
            onPress={() => navigation.navigate(Yerbas.pantalla, {
              imagen: Yerbas.imagen,
              nombre: Yerbas.nombre,
              precio: Yerbas.precio
            })}
          >
            <Image source={Yerbas.imagen} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.nombre}>{Yerbas.nombre}</Text>
              <Text style={styles.precio}>{Yerbas.precio}</Text>
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