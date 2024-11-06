import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



const Envio = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [calle, setCalle] = useState('');
  const [numero, setNumero] = useState('');
  const [Departamento, setDepartamento] = useState('');
  const [barrio, setBarrio] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [isDetalleVisible, setIsDetalleVisible] = useState(false); // Estado para el detalle de la compra
  const [isCuponVisible, setIsCuponVisible] = useState(false); 

  const toggleDetalleVisibility = ({ navigation }) => {
    setIsDetalleVisible(!isDetalleVisible);
  };
  const toggleCuponVisibility = () => {
    setIsCuponVisible(!isCuponVisible);
  };

  return (
    <ScrollView style={styles.container}>
    
      {/* Detalle de la compra */}
      <View style={styles.detalleContainer}>
          <View style={styles.detalleHeader}>
             <Text style={styles.detalleTitulo}>Detalle de la compra</Text>
             <TouchableOpacity onPress={toggleDetalleVisibility}>
              <Text style={styles.toggleButton}>{isDetalleVisible ? '-' : '+'}</Text>
            </TouchableOpacity>
         </View>
        {isDetalleVisible && (
            <View style={styles.detalleContenido}>
            <View style={styles.fotoContainer}>
              <View style={styles.foto}></View>
              <Text style={styles.produc}>Producto x</Text>
            </View>
            <Text>{"\n"}</Text>
            <Text>precio subtotal                                                                            $0</Text>
            <Text>precio total                                                                                   $0</Text>
            <Text>{"\n"}</Text>
          
        </View>
        )}
      </View>


     {/* Barra de progreso */}
     <View style={styles.progressBar}>
     <View style={styles.progressStep}>
       <Text style={styles.stepText}>Carrito </Text>
       <Icon name="checkmark" size={25} color="#000" style={{ marginLeft: 2 }} />
     </View>
     <View style={styles.progressLine} />
     <View style={styles.progressStep}>
       <Text style={styles.stepText}>Envío </Text>
       <Icon name="cube-outline" size={25} color="#2d572c" style={{ marginLeft: 2 }} />
     </View>
     <View style={styles.progressLine} />
     <View style={styles.progressStep}>
       <Text style={styles.stepText}>Pago </Text>
       <Icon name="card-outline" size={25} color="#000" style={{ marginLeft: 2 }} />
     </View>
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


      <Text style={styles.sectionTitle}>Datos de contacto</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.sectionTitle}>Entrega</Text>
      <Text style={styles.deliveryOption}>Punto de encuentro</Text>
      <Text style={styles.freeText}>Gratis</Text>

      <Text style={styles.sectionTitle}>Datos del destinatario</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={apellido}
        onChangeText={setApellido}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Código Postal"
        value={codigoPostal}
        onChangeText={setCodigoPostal}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Calle"
        value={calle}
        onChangeText={setCalle}
      />
      <TextInput
        style={styles.input}
        placeholder="Numero"
        value={numero}
        onChangeText={setNumero}
        keyboardType="numeric"
      />
     <TextInput
        style={styles.input}
        placeholder="Departamento (opcional)"
        value={Departamento}
        onChangeText={setDepartamento}
      />
       <TextInput
        style={styles.input}
        placeholder="Barrio (opcional)"
        value={barrio}
        onChangeText={setBarrio}
      />
       <TextInput
        style={styles.input}
        placeholder="Cuidad"
        value={ciudad}
        onChangeText={setCiudad}
      />

    <Text style={styles.sectionTitle}>Datos de facturación</Text>
    <TextInput
        style={styles.input}
        placeholder="DNI o CUIT"
        value={numero}
        onChangeText={setNumero}
        keyboardType="numeric"
      />
      <Text>{"\n"}</Text>

    <TouchableOpacity style={styles.botonCompra} onPress={() => navigation.navigate('Pago')} >
        <Text style={styles.botonTexto}>Continuar</Text>
      </TouchableOpacity>
      <Text>{"\n"}</Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5dc',
    },
    progressBar: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    progressStep: {
      alignItems: 'center',
      flex: 1,
    },
    progressLine: {
      height: 2,
      backgroundColor: '#000',
      flex: 1,
    },
    stepText: {
      fontSize: 16,
      marginBottom: 5,
    },
    
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    total: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtotal: {
      fontSize: 16,
      marginBottom: 20,
    },
    discountContainer: {
      marginBottom: 20,
    },
    discountText: {
      fontSize: 16,
      marginBottom: 5,
    },
    discountInput: {
      borderWidth: 1,
      borderColor: '#000',
      padding: 10,
      borderRadius: 5,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
    },
    deliveryOption: {
      fontSize: 16,
      marginTop: 10,
    },
    freeText: {
      color: 'green',
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#000',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#4CAF50',
      padding: 15,
      alignItems: 'center',
      marginVertical: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    botonCompra: {
        backgroundColor: '#2d572c',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
      },
      botonTexto: {
        color: '#fff',
        fontWeight: 'bold',
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
        fontWeight: 'bold',
      },
      detalleContenido: {
        marginTop: 10,
      },
      foto:{
        height:50,
        width:50,
        backgroundColor:"#daefb2",
        flexDirection:'column'
      }, 
      produc:{
        marginLeft:60,
    },
    fotoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    toggleButton: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    container1: {
      padding: 16,
      backgroundColor: '#f5f5dc',
    },
    title1:{
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    price1: {
      fontSize: 16,
      color: '#333',
      marginBottom: 16,
    },
    divider1: {
      height: 1,
      backgroundColor: '#ddd',
      marginVertical: 16,
    },
    row1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 4,
    },
    label1: {
      fontSize: 14,
      color: '#666'
    },
    value1:{
      fontSize: 14,
      color: '#333'
    }
  });
   
export default Envio;

 