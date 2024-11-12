/*import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, KeyboardAvoidingView,Platform, ScrollView} from 'react-native';

const preguntas = () => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    style={{ flex: 1 }}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} 
    >
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

      <View style={styles.container}>
          <Text style={styles.titulo}>Preguntas frecuentes </Text>
          <View style={styles.caja}>
            <Text style={styles.texto}>¿Cuál es la politica de devoluciones?</Text>
            <Text>{"\n"}</Text>
            <Text style={styles.texto}>¿Ofrecen descuentos especiales?</Text>
            <Text>{"\n"}</Text>
            <Text style={styles.texto}>¿Puedo comprar sin registrarme? </Text>
            <Text>{"\n"}</Text>
            <Text style={styles.texto}>¿Cómo puedo cancelar o modificar mi pedido? </Text>
          </View>
          
        </View>
      </ScrollView>
       </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc', 
    padding: 25,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  caja:{
    padding:30,
    margin:10,
    height:300,
    width: 350, 
    backgroundColor: '#daefb2',
    marginTop:80
  },
  texto:{
    textAlign: 'center'
  }
    
});

export default preguntas;

<View style={styles.container}>
          <Text style={styles.titulo}>Preguntas frecuentes </Text>
          <View style={styles.caja}>
              <View style={styles.detalleContainer}>
                  <View style={styles.detalleHeader}>
                     <Text style={styles.detalleTitulo}>¿Cuál es la politica de devoluciones?</Text>
                     <TouchableOpacity onPress={togglePregunta1Visibility}>
                      <Text style={styles.toggleButton}>{isPregunta1Visible ? '-' : '+'}</Text>
                    </TouchableOpacity>
                 </View>
                {isPregunta1Visible && (
                <View style={styles.detalleContenido}>
                  <View style={styles.discountContainer}>
                 <Text>Respuesta</Text>
                </View>
                </View>
                )}
              </View>
            </View>


*/

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';


const Preguntas = ({navigation}) => {
  const [isPregunta1Visible, setIsPregunta1Visible] = useState(false); 
  const [isPregunta2Visible, setIsPregunta2Visible] = useState(false); 
  const [isPregunta3Visible, setIsPregunta3Visible] = useState(false); 
  const [isPregunta4Visible, setIsPregunta4Visible] = useState(false); 


  const togglePregunta1Visibility = ({ navigation }) => {
    setIsPregunta1Visible(!isPregunta1Visible);
  };
  const togglePregunta2Visibility = ({ navigation }) => {
    setIsPregunta2Visible(!isPregunta2Visible);
  };
  const togglePregunta3Visibility = ({ navigation }) => {
    setIsPregunta3Visible(!isPregunta3Visible);
  };
  const togglePregunta4Visibility = ({ navigation }) => {
    setIsPregunta4Visible(!isPregunta4Visible);
  };
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    style={{ flex: 1 }}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} 
    >
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.container}>
    <Text style={styles.titulo}>Preguntas frecuentes </Text>
    <View style={styles.caja}>


      {/*pregunta 1 */}
      <View style={styles.detalleContainer}>
                  <View style={styles.detalleHeader}>
                     <Text style={styles.detalleTitulo}>¿Cuál es la politica de devoluciones?</Text>
                     <TouchableOpacity onPress={togglePregunta1Visibility}>
                      <Text style={styles.toggleButton}>{isPregunta1Visible ? '-' : '>'}</Text>
                    </TouchableOpacity>
                 </View>
                {isPregunta1Visible && (
                <View style={styles.detalleContenido}>
                  <View style={styles.discountContainer}>
                 <Text>Se aceptan devoluciones dentro de los 30 días posteriores a la compra, siempre que 
                  el producto esté en su estado original y con el comprobante de compra.</Text>
                </View>
                </View>
                )}
              </View>
        {/*PREGUNTA 2 */}
          <View style={styles.detalleContainer}>
                  <View style={styles.detalleHeader}>
                     <Text style={styles.detalleTitulo}>¿Ofrecen descuentos especiales?</Text>
                     <TouchableOpacity onPress={togglePregunta2Visibility}>
                      <Text style={styles.toggleButton}>{isPregunta2Visible ? '-' : '>'}</Text>
                    </TouchableOpacity>
                 </View>
                {isPregunta2Visible && (
                <View style={styles.detalleContenido}>
                  <View style={styles.discountContainer}>
                 <Text>Sí, ofrecemos descuentos para compras al por mayor y promociones especiales en fechas destacadas.</Text>
                </View>
                </View>
                )}
              </View>
       {/*PREGUNTA 3 */}
       <View style={styles.detalleContainer}>
                  <View style={styles.detalleHeader}>
                     <Text style={styles.detalleTitulo}>¿Puedo comprar sin registrarme?</Text>
                     <TouchableOpacity onPress={togglePregunta3Visibility}>
                      <Text style={styles.toggleButton}>{isPregunta3Visible ? '-' : '>'}</Text>
                    </TouchableOpacity>
                 </View>
                {isPregunta3Visible && (
                <View style={styles.detalleContenido}>
                  <View style={styles.discountContainer}>
                 <Text>No, debes tener una cuenta para poder realizar tu pedido.</Text>
                </View>
                </View>
                )}
              </View>
        {/*PREGUNTA 4 */}
        <View style={styles.detalleContainer}>
                 <View style={styles.detalleHeader}>
                    <Text style={styles.detalleTitulo}>¿Cómo puedo cancelar o modificar mi pedido?</Text>
                    <TouchableOpacity onPress={togglePregunta4Visibility}>
                     <Text style={styles.toggleButton}>{isPregunta4Visible ? '-' : '>'}</Text>
                   </TouchableOpacity>
                </View>
               {isPregunta4Visible && (
               <View style={styles.detalleContenido}>
                 <View style={styles.discountContainer}>
                <Text>Puedes cancelar o modificar tu pedido contactando a nuestro servicio al cliente dentro 
                  de las 24 horas posteriores a la compra.</Text>
               </View>
               </View>
               )}
             </View>
       </View>
  </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5dc',
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
    toggleButton: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    titulo: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop:20
    },
    caja:{
      padding:30,
      margin:10,
      height:580,
      width: 350, 
      backgroundColor: '#daefb2',
      marginTop:40,
      borderRadius: 10,

    },
    texto:{
      textAlign: 'center'
    }
  }
  );
   
export default Preguntas;

 