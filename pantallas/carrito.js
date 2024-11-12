import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

/* cupon 
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgoeIdygroE380AttLZZRwBH1cBYtCoV4",
  authDomain: "bdcanarios.firebaseapp.com",
  projectId: "bdcanarios",
  storageBucket: "bdcanarios.firebasestorage.app",
  messagingSenderId: "376141543054",
  appId: "1:376141543054:web:7bd8b193c87f9ef8a67bdf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para añadir un cupón
async function agregarCupon(codigo, descuento, vigencia) {
  try {
    const docRef = await addDoc(collection(db, "cupones"), {
      codigo: codigo,
      descuento: descuento,
      vigencia: vigencia,
      activo: true
    });
    console.log("Cupón añadido con ID: ", docRef.id);
  } catch (e) {
    console.error("Error añadiendo el cupón: ", e);
  }
}

// Llama a la función con los datos del cupón
agregarCupon("DESC20", 20, "2024-12-31");

async function validarCupon(codigo) {
  const docRef = doc(db, "cupones", codigo);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const cupon = docSnap.data();
    if (cupon.activo && new Date(cupon.vigencia) > new Date()) {
      console.log("Cupón válido: ", cupon);
      return cupon.descuento;
    } else {
      console.log("Cupón no válido o expirado.");
    }
  } else {
    console.log("No se encontró el cupón.");
  }
}*/


const CarritoScreen = ({ navigation }) => {
  // manejar la cantidad de productos
  const [cantidad, setCantidad] = useState(1);
  const [codigoPostal, setCodigoPostal] = useState('');
  const [total, setTotal] = useState(60000);
  const [isEnvioVisible, setIsEnvioVisible] = useState(false); // Estado para mostrar/ocultar el envío
  const [isCuponVisible, setIsCuponVisible] = useState(false); // cupon

  // aumentar la cantidad
  const aumentarCantidad = () => {
    setCantidad(prevCantidad => prevCantidad + 1);
    setTotal(prevTotal => prevTotal + 60000);
  };

  // disminuir la cantidad
  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(prevCantidad => prevCantidad - 1);
      setTotal(prevTotal => prevTotal - 60000);
    }
  };

  // calcular el envío (simulada por ahora)
  const calcularEnvio = () => {
    if (codigoPostal === '') {
      Alert.alert('Error', 'Por favor ingrese su código postal.');
    } else {
      Alert.alert('Éxito', 'El costo del envío ha sido calculado.');
    }
  };

  // borrar el producto
  const borrarProducto = () => {
    Alert.alert('Producto eliminado', 'Has eliminado el producto del carrito.');
    setCantidad(0);
    setTotal(0);
  };

  // manejar la visibilidad del envío
  const toggleEnvioVisibility = () => {
    setIsEnvioVisible(!isEnvioVisible);
  };
  
  const toggleCuponVisibility = () => {
    setIsCuponVisible(!isCuponVisible);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrito de compras</Text>

      {/* Producto en el carrito */}
      <View style={styles.productoContainer}>
        <Text>Producto X</Text>

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
      {/* CUPON  */}
      <View style={styles.detalleContainer}>
                <View style={styles.detalleHeader}>
                   <Text style={styles.detalleTitulo}>Agregar cupón de descuento</Text>
                   <TouchableOpacity onPress={toggleCuponVisibility}>
                    <Text style={styles.toggleButton}>{isCuponVisible ? '-' : '+'}</Text>
                  </TouchableOpacity>
               </View>
              {isCuponVisible && (
              <View style={styles.detalleContenido}>
                <View style={styles.discountContainer}>
                <TextInput 
                  style={styles.discountInput} 
                 placeholder="Código de descuento" />
            </View>
              </View>
              )}
            </View>
              {/*fin cupon */}
      {/* Subtotal y cálculo de envío */}
      <Text style={styles.subtotalTexto}>Subtotal (sin envío): ${(total).toLocaleString()}</Text>

      {/* Métodos de envío */}
      <View style={styles.envioContainer}>
        <View style={styles.envioHeader}>
          <Icon name="cube-outline" size={25} color="#000" style={{ marginLeft: 2 }} />
          <Text style={styles.envioTitulo}>Métodos de envío</Text>
          <TouchableOpacity onPress={toggleEnvioVisibility}>
            <Text style={styles.toggleButton}>{isEnvioVisible ? '-' : '+'}</Text>
          </TouchableOpacity>
        </View>
        {isEnvioVisible && (
          <>
            <TextInput
              style={styles.codigoPostalInput}
              value={codigoPostal}
              placeholder="Tu código postal"
              onChangeText={setCodigoPostal}
            />
            <Text style={styles.link}>No se mi código postal</Text>
            <TouchableOpacity onPress={calcularEnvio} style={styles.calcularEnvioBoton}>
              <Text style={styles.calcularEnvioTexto}>Calcular</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* Total */}
      <Text style={styles.totalTexto}>Total: ${(total).toLocaleString()}</Text>

      {/* Botones de acciones */}
      <TouchableOpacity
        style={styles.botonCompra}
        onPress={() => navigation.navigate('Envio')}
      >
        <Text style={styles.botonTexto}>Iniciar compra</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botonVerProductos}
        onPress={() => navigation.navigate('Inicio')}
      >
        <Text style={styles.botonTexto1}>Ver más productos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc',
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
  envioHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  envioTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginRight: 150
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
  botonTexto1: {
    color: '#000',
    fontWeight: 'bold',
  },
  link: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop: 5,
    bottom: 10,
  },
  toggleButton: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  detalleContainer: {
    marginBottom: 20,
  },
  detalleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detalleTitulo: {
    fontSize: 18,
  },
  discountInput: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 5,
  },
});

export default CarritoScreen;
