/*import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Boton from "/CANARIOS/Chupa-Proyecto/componentes/boton";

const windowWidth = Dimensions.get('window').width;

export default function DetalleProducto({ navigation }) {
  const [cantidad, setCantidad] = React.useState('1');

  const handleAgregarAlCarrito = () => {
    // Navegar a la pantalla del carrito (ajusta el nombre de la pantalla según tu navegación)
    navigation.navigate('Carrito');
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.breadcrumb}>
        <Text style={styles.breadcrumbText}>Productos</Text>
      </View>

      <View style={styles.productImageContainer}>
        <Image source={require("../imagenes/termo3.jpeg")} style={styles.image} />
      </View>

      <Text style={styles.productTitle}>Mate imperial premium</Text>
      <Text style={styles.productPrice}>$30.000</Text>
      <Text style={styles.productTransferPrice}>$54.000 por transferencia</Text>
      <Text style={styles.productInstallments}>
        Hasta 3 cuotas SIN interés con tarjeta de débito
      </Text>
      <Text style={styles.productInstallmentsDetails}>
        6 cuotas sin interés de $10.000
      </Text>

      <View style={styles.quantityContainer}>
        <TextInput
          style={styles.quantityInput}
          value={cantidad}
          keyboardType="numeric"
          onChangeText={setCantidad}
        />
        <Boton title="AGREGAR AL CARRITO" onPress={handleAgregarAlCarrito} />
      </View>

      <Text style={styles.agregadoText}>✓ Ya agregaste este producto.Ver carrito</Text>

      <View style={styles.paymentMethodsContainer}>
        <Text style={styles.sectionTitle}>Medios de pago</Text>
        <View style={styles.paymentIconsContainer}>
          <Icon name="card-outline" style={styles.paymentIcon} />
          <Icon name="logo-paypal" style={styles.paymentIcon} />
          <Icon name="logo-apple" style={styles.paymentIcon} />
        </View>
      </View>

      <View style={styles.shippingMethodsContainer}>
        <Text style={styles.sectionTitle}>Medios de envío</Text>
        <View style={styles.shippingIconsContainer}>
          <Icon name="cube-outline" style={styles.shippingIcon} />
          <Icon name="car-outline" style={styles.shippingIcon} />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc',
    padding: 10,
  },
  breadcrumb: {
    marginBottom: 10,
  },
  breadcrumbText: {
    color: '#000',
    fontSize: 14,
  },
  image: {
    width: 200,
    height: (windowWidth / 2) - 15, // Hacerlas cuadradas
    borderWidth: 2, // Grosor del borde
    borderColor: '#2d572c', // Color verde del borde
    borderRadius: 10, // Redondeado del borde (opcional)
    overflow: 'hidden', // Asegurar que la imagen no salga de los bordes redondeados
  },
  productImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  productImagePlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: '#d3d3d3',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 16,
    color: '#000',
  },
  productTransferPrice: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  productInstallments: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  productInstallmentsDetails: {
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityInput: {
    width: 40,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginRight: 10,
    textAlign: 'center',
  },
  agregadoText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
  },
  paymentMethodsContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paymentIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  paymentIcon: {
    fontSize: 40,
    color: '#6b8e23',
  },
  shippingMethodsContainer: {
    marginBottom: 20,
  },
  shippingIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  shippingIcon: {
    fontSize: 40,
    color: '#6b8e23',
  },
});
*/
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Boton from '/CANARIOS/Chupa-Proyecto/componentes/boton';

const windowWidth = Dimensions.get('window').width;

export default function DetalleProducto({ navigation, route }) {
  
  console.log("DetalleProducto mounted");
  console.log("route:", route);
  console.log("route.params:", route.params);

  const { imagen, nombre, precio } = route.params; 
  const [cantidad, setCantidad] = React.useState('1');

  const handleAgregarAlCarrito = () => {
    navigation.navigate('Carrito');
  };

  return (
    <View style={styles.container}>
      <View style={styles.breadcrumb}>
        <Text style={styles.breadcrumbText}>Productos</Text>
      </View>

      <View style={styles.productImageContainer}>
        <Image source={""} style={styles.image} />
      </View>

      <Text style={styles.productTitle}>{nombre}</Text>
      <Text style={styles.productPrice}>{precio}</Text>
      <Text style={styles.productTransferPrice}>$54.000 por transferencia</Text>
      <Text style={styles.productInstallments}>
        Hasta 3 cuotas SIN interés con tarjeta de débito
      </Text>
      <Text style={styles.productInstallmentsDetails}>
        6 cuotas sin interés de $10.000
      </Text>

      <View style={styles.quantityContainer}>
        <TextInput
          style={styles.quantityInput}
          value={cantidad}
          keyboardType="numeric"
          onChangeText={setCantidad}
        />
        <Boton title="AGREGAR AL CARRITO" onPress={handleAgregarAlCarrito} />
      </View>

      <Text style={styles.agregadoText}>✓ Ya agregaste este producto.Ver carrito</Text>

      <View style={styles.paymentMethodsContainer}>
        <Text style={styles.sectionTitle}>Medios de pago</Text>
        <View style={styles.paymentIconsContainer}>
          <Icon name="card-outline" style={styles.paymentIcon} />
          <Icon name="logo-paypal" style={styles.paymentIcon} />
        </View>
      </View>

      <View style={styles.shippingMethodsContainer}>
        <Text style={styles.sectionTitle}>Medios de envío</Text>
        <View style={styles.shippingIconsContainer}>
          <Icon name="cube-outline" style={styles.shippingIcon} />
          <Icon name="car-outline" style={styles.shippingIcon} />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc',
    padding: 10,
  },
  breadcrumb: {
    marginBottom: 10,
  },
  breadcrumbText: {
    color: '#000',
    fontSize: 14,
  },
  image: {
    width: 200,
    height: (windowWidth / 2) - 15,
    borderWidth: 2,
    borderColor: '#2d572c',
    borderRadius: 10,
    overflow: 'hidden',
  },
  productImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  productImagePlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: '#d3d3d3',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 16,
    color: '#000',
  },
  productTransferPrice: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  productInstallments: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  productInstallmentsDetails: {
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    width: 40,
    marginRight: 10,
  },
  agregadoText: {
    fontSize: 14,
    color: '#2d572c',
    marginBottom: 20,
  },
  paymentMethodsContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paymentIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  paymentIcon: {
    fontSize: 30,
    color: '#000',
  },
  shippingMethodsContainer: {
    marginBottom: 20,
  },
  shippingIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  shippingIcon: {
    fontSize: 30,
    color: '#000',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
