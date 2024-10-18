import React from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Obtener las dimensiones de la pantalla
const windowWidth = Dimensions.get('window').width;

export default function Mates() {
  const navigation = useNavigation();

  let pmates = [
    {
      "imagen": require("../imagenes/mate1.jpeg"),
      "nombre": "Imperial virola lisa",
      "precio": "$20.000",
    },
    {
      "imagen": require("../imagenes/mate2.jpeg"),
      "nombre": "Camionero uruguayo cuero negro",
      "precio": "$13.500",
    },
    {
      "imagen": require("../imagenes/mate3.jpeg"),
      "nombre": "Torpedo cincelado",
      "precio": "$35.000",
    },
    {
      "imagen": require("../imagenes/mate4.jpeg"),
      "nombre": "Torpedo imperial con base de alpaca",
      "precio": "$45.250",
    },
    {
      "imagen": require("../imagenes/mate5.jpeg"),
      "nombre": "Imperial liso",
      "precio": "$20.000",
    },
    {
      "imagen": require("../imagenes/mate6.jpeg"),
      "nombre": "Camionero uruguayo cuero marrón",
      "precio": "$13.500",
    },
    {
      "imagen": require("../imagenes/mate7.jpeg"),
      "nombre": "Discovery acero inoxidable",
      "precio": "$10.100",
    },
    {
      "imagen": require("../imagenes/mate8.jpeg"),
      "nombre": "Stanley acero inoxidable",
      "precio": "$30.650",
    }
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.grid}>
        <Text style={styles.titulo}> Mates {'\n'} </Text>
        {pmates.map((mate, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemContainer}
            onPress={() => {
              console.log("parametros:", mate);
              navigation.navigate("Inicio", {
                screen: "Mates",
                params: {
                  screen: "Producto",
                  params: {
                    imagen: mate.imagen,
                    nombre: mate.nombre,
                    precio: mate.precio
                  }
                }
              });

            }}
          >
            <Image source={mate.imagen} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.nombre}>{mate.nombre}</Text>
              <Text style={styles.precio}>{mate.precio}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  scrollView: {
    padding: 10,
    backgroundColor: '#f5f5dc',
  },
  titulo: {
    marginTop: 15,
    marginLeft: 140,
    fontSize: 35,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: (windowWidth / 2) - 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: (windowWidth / 2) - 15,
    borderWidth: 2,
    borderColor: '#2d572c',
    borderRadius: 10,
    overflow: 'hidden',
  },
  textContainer: {
    marginTop: 10,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  precio: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
});
