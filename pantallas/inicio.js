import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Boton from '../componentes/boton';
import { useNavigation } from '@react-navigation/native';


export default function Inicio() {
  let productos = [
    {
      "imagen": require("../imagenes/mates.jpg"),
      "pantalla": "Mates"
    },
    {
      "imagen": require("../imagenes/bombillas.jpg"),
      "pantalla": "Bombillas"

    },
    {
      "imagen": require("../imagenes/termos.jpeg"),
      "pantalla": "Termos"

    },
    {
      "imagen": require("../imagenes/yerbas.jpg"),
      "pantalla": "Yerbas"

    }
  ];
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inicio}>
        <Text style={styles.titulo}> Nuestras opciones {'\n'} </Text>
        {productos.map((item, index) => (
          <View key={index} style={styles.producto}>
            <View style={styles.imagen}> 
            <TouchableOpacity onPress={() => navigation.navigate(item.pantalla)}> 
                <Image
                  source={item.imagen}
                  resizeMode="contain"
                  style={{ width: 200, height: 200, alignItems: 'center', marginTop: 10,  marginLeft: 20, justifyContent: 'center' }}
                />
            </TouchableOpacity>
            <Text style={styles.textoProducto}>{item.producto}</Text>
            </View>
            <Text style={styles.boton}>
              <Boton onPress={() => navigation.navigate(item.pantalla)}/>
            </Text>
            <Text>{"\n"}</Text>
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
    backgroundColor: '#f5f5dc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  inicio: {
    flex: 1,
    marginTop: '50',
    backgroundColor: '#f5f5dc',
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
  textoProducto: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
  },
  boton:{
    marginLeft:140,
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







