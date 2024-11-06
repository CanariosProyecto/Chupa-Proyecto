import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



const Pago = ({navigation}) => {
  
  const [isDetalleVisible, setIsDetalleVisible] = useState(false); // Estado para el detalle de la compra
  const [isCuponVisible, setIsCuponVisible] = useState(false); // cupon
  const [isTransferenciaVisible, setIsTransferenciaVisible] = useState(false); // tranferencia
  const [isEfectivoVisible, setIsEfectivoVisible] = useState(false); // efectivo
  const [isTarjetaVisible, setIsTarjetaVisible] = useState(false); // efectivo



  const toggleDetalleVisibility = ({ navigation }) => {
    setIsDetalleVisible(!isDetalleVisible);
  };
  const toggleCuponVisibility = () => {
    setIsCuponVisible(!isCuponVisible);
  };
  const toggleTransferenciaVisibility = () => {
    setIsTransferenciaVisible(!isTransferenciaVisible);
  };
  const toggleEfectivoVisibility = () => {
    setIsEfectivoVisible(!isEfectivoVisible);
  };
  const toggleTarjetaVisibility = () => {
    setIsTarjetaVisible(!isTarjetaVisible);
  };

  const SelectableButton = ({ isSelected, onPress, title }) => {
    return (
      <TouchableOpacity
        style={[styles.button, isSelected && styles.selectedButton]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
};
const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (buttonId) => {
    setSelectedButton(buttonId);
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
       <Icon name="checkmark" size={25} color="#000" style={{ marginLeft: 2 }} />
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
        {/*fin cupon */}
        <View style={styles.itemContainer}>
            <View style={styles.itemRow}>
               <Icon name="mail-outline" size={25} color="#000" style={styles.icon} />
               <Text style={styles.stepText}> nombre@gmail.com </Text>
            </View>
            <View style={styles.itemRow}>
               <Icon name="location-outline" size={25} color="#000" style={styles.icon} />
               <Text style={styles.stepText}> Dirección, CP </Text>
               <Text style={styles.Text1}>Cambiar </Text>
            </View>
            <View style={styles.itemRow}>
               <Icon name="cube-outline" size={25} color="#000" style={styles.icon} />
               <Text style={styles.stepText}>Correo </Text>
               <Text style={styles.Text2}>Cambiar </Text>

            </View>
        </View>

        {/*medios de pago */}
        <Text style={styles.medios}>Medios de pago </Text>
        {/*tarjetas */}
        <View style={styles.detalleContainer}>
                <View style={styles.detalleHeader}>
                <Icon name="card-outline" size={25} color="#000" style={styles.icon} />
                     <Text style={styles.detalleTitulo}>Tarjeta de débito o crédito</Text>
                     <TouchableOpacity onPress={toggleTarjetaVisibility}>
                      <Text style={styles.toggleButton}>{isTarjetaVisible ? '-' : '>'}</Text>
                    </TouchableOpacity>
                 </View>
                {isTarjetaVisible && (
                <View style={styles.detalleContenido}>
                  <View style={styles.discountContainer}>
                    <TextInput 
                      style={styles.discountInput} 
                      placeholder="Número de la tarjeta" 
                      keyboardType='numeric'
                     />
                    <Text>{"\n"}</Text>
                    <TextInput 
                      style={styles.discountInput} 
                      placeholder="Titular de la tarjeta" 
                     />
                    <Text>{"\n"}</Text>
                    <TextInput 
                    style={styles.discountInput} 
                    placeholder="Vencimiento (MM/AA)" 
                    keyboardType='numeric'
                   />
                  <Text>{"\n"}</Text>
                  <TextInput 
                    style={styles.discountInput} 
                    placeholder="VVC" 
                    keyboardType='numeric'
                   />
                  <Text>{"\n"}</Text>
                  <TextInput 
                    style={styles.discountInput} 
                    placeholder="Cuotas" 
                   />
                  <Text>{"\n"}</Text>
                  <TextInput 
                    style={styles.discountInput} 
                    placeholder="DNI titular" 
                    keyboardType='numeric'

                   />
                  <Text>{"\n"}</Text>
                  <TextInput 
                    style={styles.discountInput} 
                    placeholder="Telefono" 
                    keyboardType='numeric'

                   />
                  <Text>{"\n"}</Text>
                  </View>
               </View>
                )}
         </View>
        {/*efectivo */}


        <View style={styles.detalleContainer}>
                <View style={styles.detalleHeader}>
                    <Icon name="cash-outline" size={25} color="#000" style={styles.icon} />
                     <Text style={styles.detalleTitulo}>Efectivo</Text>
                     <TouchableOpacity onPress={toggleEfectivoVisibility}>
                      <Text style={styles.toggleButton}>{isEfectivoVisible ? '-' : '>'}</Text>
                    </TouchableOpacity>
                 </View>
                {isEfectivoVisible && (
                <View style={styles.detalleContenido}>
                  <View style={styles.discountContainer}>
                    <Text>¿Dónde preferis abonar?</Text>
                  {/*<TextInput 
                    style={styles.discountInput} 
                   placeholder="Pago Facil" 
                   />
                   <TextInput 
                    style={styles.discountInput} 
                   placeholder="Rapipago" 
                   />
                  <Text>{"\n"}</Text>
                  <Text>Abona en la sucursal más cercana.</Text>*/}
                  
                  <SelectableButton
                    title="Pago Fácil"
                    isSelected={selectedButton === 1}
                    onPress={() => handleButtonPress(1)}
                  />
                  <SelectableButton
                    title="Rapipago"
                    isSelected={selectedButton === 2}
                    onPress={() => handleButtonPress(2)}
                  />
                  <View style={styles.container}>
    </View>
                  </View>
               </View>
                )}
         </View>

        {/*transferencia */}
        <View style={styles.detalleContainer}>
                  <View style={styles.detalleHeader}>
                  <Icon name="cash-outline" size={25} color="#000" style={styles.icon} />
                     <Text style={styles.detalleTitulo}>Tranferencia bancaria</Text>
                     <TouchableOpacity onPress={toggleTransferenciaVisibility}>
                      <Text style={styles.toggleButton}>{isTransferenciaVisible ? '-' : '>'}</Text>
                    </TouchableOpacity>
                 </View>
                {isTransferenciaVisible && (
                <View style={styles.detalleContenido}>
                  <View style={styles.discountContainer}>
                  <TextInput 
                    style={styles.discountInput} 
                   placeholder="DNI del comprador" 
                   />
              </View>
                </View>
                )}
              </View>




      
    <TouchableOpacity style={styles.botonCompra} onPress={() => navigation.navigate('Inicio')} >
        <Text style={styles.botonTexto}>Realizar pedido</Text>
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
        height:80,
        width:80,
        backgroundColor:"#daefb2",
        flexDirection:'column'
      }, 
      produc:{
        marginLeft:20,
        marginBottom:25
    },
    fotoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    itemContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 8,
    },
    itemRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    icon: {
      marginLeft: 2,
    },
    stepText: {
      fontSize: 16,
    },
    Text1:{
      marginLeft: 170,
      textDecorationLine: 'underline',
    },
    Text2:{
      marginLeft: 220,
      textDecorationLine: 'underline',
    },
    medios:{
      fontSize: 20,
      marginTop: 35,
      marginBottom: 20
    },
    toggleButton: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    /*estilos boton seleccionable */

    button: {
      padding: 10,
      margin: 10,
      backgroundColor: '#ccc',
      borderRadius: 5,
    },
    selectedButton: {
      backgroundColor: '#daefb2',
    },
    buttonText: {
      color: '#000',
      fontSize: 16,
    },
  });
   
export default Pago;

 