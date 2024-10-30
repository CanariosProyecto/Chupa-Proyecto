/*import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CarritoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Terminar compra</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CarritoScreen;*/

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const CarritoScreen = ({ navigation }) => {
  //manejar la cantidad de productos
  const [cantidad, setCantidad] = useState(1);
  const [codigoPostal, setCodigoPostal] = useState('');
  const [total, setTotal] = useState(60000); 

  //aumentar la cantidad
  const aumentarCantidad = () => {
    setCantidad(prevCantidad => prevCantidad + 1);
    setTotal(prevTotal => prevTotal + 60000);
  };

  //disminuir la cantidad
  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(prevCantidad => prevCantidad - 1);
      setTotal(prevTotal => prevTotal - 60000);
    }
  };

  //alcular el envío (simulada por ahora)
  const calcularEnvio = () => {
    if (codigoPostal === '') {
      Alert.alert('Error', 'Por favor ingrese su código postal.');
    } else {
      Alert.alert('Éxito', 'El costo del envío ha sido calculado.');
    }
  };

  //borrar el producto
  const borrarProducto = () => {
    Alert.alert('Producto eliminado', 'Has eliminado el producto del carrito.');
    setCantidad(0);
    setTotal(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrito de compras</Text>

      {/* Producto en el carrito */}
      <View style={styles.productoContainer}>
        <Text>Mate imperial premium</Text>

        <TouchableOpacity onPress={borrarProducto}>
          <Text style={styles.borrarTexto}>Borrar</Text>
        </TouchableOpacity>
        
        <View style={styles.cantidadContainer}>
          <TouchableOpacity onPress={disminuirCantidad}>
            <Text style={styles.botonCantidad}>-</Text>
          </TouchableOpacity>
          <Text style={styles.cantidadTexto}>{cantidad}</Text>
          <TouchableOpacity onPress={aumentarCantidad}>
            <Text style={styles.botonCantidad}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.precioTexto}>${(cantidad * 60000).toLocaleString()}</Text>
      </View>

      {/* Subtotal y cálculo de envío */}
      <Text style={styles.subtotalTexto}>Subtotal (sin envío): ${(total).toLocaleString()}</Text>

      {/* Campo de código postal para calcular el envío */}
      <View style={styles.envioContainer}>
        <Text style={styles.envioTitulo}>Métodos de envío</Text>
        <TextInput
          style={styles.codigoPostalInput}
          value={codigoPostal}
          placeholder="Tu código postal"
          onChangeText={setCodigoPostal}
        />
        <Text style={styles.link}>No se mi codigo postal</Text>
        <TouchableOpacity onPress={calcularEnvio} style={styles.calcularEnvioBoton}>
          <Text style={styles.calcularEnvioTexto}>Calcular</Text>
        </TouchableOpacity>
      </View>

      {/* Total */}
      <Text style={styles.totalTexto}>Total: ${(total).toLocaleString()}</Text>

      {/* Botones de acciones */}
      <TouchableOpacity
        style={styles.botonCompra}
        onPress={() => navigation.navigate('Compra')}
      >
        <Text style={styles.botonTexto}>Iniciar compra</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.botonVerProductos}
        onPress={() => navigation.navigate('Inicio')}
      >
        <Text style={styles.botonTexto}>Ver más productos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef6b0',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  productoContainer: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  borrarTexto: {
    color: 'red',
    textAlign: 'right',
    fontWeight: 'bold',
  },
  cantidadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  botonCantidad: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  cantidadTexto: {
    fontSize: 18,
  },
  precioTexto: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtotalTexto: {
    fontSize: 18,
    marginVertical: 10,
  },
  envioContainer: {
    marginBottom: 20,
  },
  envioTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  codigoPostalInput: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  calcularEnvioBoton: {
    backgroundColor: '#2d572c',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    top: 15,
  },
  calcularEnvioTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  totalTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  botonCompra: {
    backgroundColor: '#2d572c',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  botonVerProductos: {
    backgroundColor: '#f5f5dc',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    top: 25,
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link:{
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop: 5,
    bottom: 10,
  },
});

export default CarritoScreen;
