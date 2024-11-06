import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;

export default function DetalleProducto({ navigation }) {
  const [cantidad, setCantidad] = React.useState('1');

  return (
    
    <View style={styles.container}>
      <View style={styles.breadcrumb}>
        <Text style={styles.breadcrumbText}>Productos</Text>
      </View>

      <View style={styles.productImageContainer}>
        <Image source={""} style={styles.image} />
      </View>

      <Text style={styles.productTitle}>Nombre</Text>
      <Text style={styles.productPrice}>Precio</Text>
      <Text style={styles.productTransferPrice}>$--.--- por transferencia</Text>
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
        <TouchableOpacity style={styles.botonCompra} onPress={()=>navigation.navigate('Carrito')}>
          <Text style={styles.botonTexto} >Agregar al carrito</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate('Carrito')}>
        <Text style={styles.agregadoText}>Ya agregaste este producto. Ver carrito</Text>
      </TouchableOpacity>

      <View style={styles.paymentMethodsContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('pago')}> 
          <Text style={styles.sectionTitle}>Medios de pago</Text>
        </TouchableOpacity>
        
        <View style={styles.paymentIconsContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate('pago')}> 
            <Icon name="card-outline" style={styles.paymentIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('pago')}> 
            <Icon name="card-outline" style={styles.paymentIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('pago')}> 
            <Icon name="card-outline" style={styles.paymentIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.shippingMethodsContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('pago')}> 
          <Text style={styles.sectionTitle}>Medios de envio</Text>
        </TouchableOpacity>
        
        <View style={styles.shippingIconsContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate('pago')}> 
            <Icon name="cube-outline" style={styles.shippingIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('pago')}> 
            <Icon name="cube-outline" style={styles.shippingIcon} />
          </TouchableOpacity>
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
    padding: 35,
  },
  breadcrumb: {
    marginBottom: 10,
  },
  breadcrumbText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color:'#000'
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
  botonCompra: {
    borderWidth: 1,
      borderColor: '#000',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
      marginBottom:1
  },
  botonTexto: {
    color: '#000',
    fontWeight: 'bold',
  },
});
