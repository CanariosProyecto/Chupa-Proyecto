import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Boton from '/CANARIOS/Chupa-Proyecto/componentes/boton';


export default function Inicio() {
  let productos = [
    {
      "imagen": require("../imagenes/mates.jpg")
    },
    {
      "imagen": require("../imagenes/bombillas.jpg")
    },
    {
      "imagen": require("../imagenes/termos.jpeg")
    },
    {
      "imagen": require("../imagenes/yerbas.jpg")
    }
  ];

  console.log(productos)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inicio}>
        <Text style={styles.titulo}> Nuestras opciones {'\n'} </Text>
        {productos.map((item, index) => (
          <View key={index} style={styles.producto}>
            <View style={styles.imagen}> 
            <Image
              source={item.imagen}
              resizeMode="contain"
              style={{ width: 200, height: 200, alignItems: 'center', marginTop: 10,  marginLeft: 20, justifyContent: 'center' }}
            />
            </View>
            <Text style={styles.boton}><Boton/></Text>
            <Text style={styles.textoProducto}>{item.producto}</Text>
          </View>
        ))}
        <StatusBar style="auto" />
      </View>
    </ScrollView >
    
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#93AE9F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  inicio: {
    flex: 1,
    marginTop: '50',
    backgroundColor: '#93AE9F',
    width: 400,
    borderRadius: 10,
    padding: 20,
    margin: 20,
    fontWeight: 800,
  },
  titulo: {
    marginLeft: 37,
    fontSize: 35,
  },
  boton: {
    marginLeft: 140,
    marginTop: 3,
  },
  textoProducto: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
  },
  boton:{
    marginLeft:150,
    marginTop: 15,
  },
  imagen: {
    height: 230,
    width: 230,
    backgroundColor: "#456E57", 
    borderRadius: 15,
    marginLeft: 70,
  }

});







