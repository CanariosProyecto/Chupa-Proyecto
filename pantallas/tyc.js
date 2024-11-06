import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, KeyboardAvoidingView,Platform, ScrollView} from 'react-native';

const Tyc = () => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    style={{ flex: 1 }}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} 
    >
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

      <View style={styles.container}>
          <Text style={styles.titulo}>Terminos y condiciones </Text>
          <View style={styles.caja}>
              <Text>1. Aceptación de los Términos</Text>
              <Text>
                Al acceder y utilizar nuestro sitio web, aceptas cumplir con estos términos y condiciones. 
                Si no estás de acuerdo, te pedimos que no utilices nuestro servicio.
              </Text>
              <Text>{"\n"}</Text>
              
              <Text> 2. Productos </Text>
              <Text>
                Ofrecemos una variedad de productos relacionados con mates, yerba y termos. 
                Nos reservamos el derecho de modificar o descontinuar productos en cualquier momento.
              </Text>
              <Text>{"\n"}</Text>

              <Text>3. Precios</Text>
              <Text>
                Todos los precios están sujetos a cambios sin previo aviso. Los precios finales se mostrarán 
                al momento de la compra.
              </Text>
              <Text>{"\n"}</Text>

              <Text>4. Envíos</Text>
              <Text> - Realizamos envíos a todo el país. </Text>
              <Text> - Los costos de envío se calcularán al momento de realizar el pedido. </Text>
              <Text> - Los plazos de entrega pueden variar según la ubicación y la disponibilidad del producto. </Text>
              <Text> - No nos hacemos responsables por retrasos en la entrega causados por terceros.</Text>
              <Text>{"\n"}</Text>

              <Text> 5. Devoluciones y Cambios</Text>
              <Text>   - Aceptamos devoluciones dentro de los 30 días posteriores a la recepción del producto. </Text>
              <Text>   - Los productos deben estar en su estado original y sin usar. </Text>
              <Text>  - Los gastos de envío de las devoluciones correrán a cargo del cliente.</Text>
              <Text>{"\n"}</Text>

              <Text>6. Propiedad Intelectual</Text>
              <Text>
                Todos los contenidos de este sitio, incluyendo textos, imágenes y logotipos, son propiedad de 
                nuestra empresa y están protegidos por leyes de propiedad intelectual.
              </Text>
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
    height:900,
    width: 350, 
    backgroundColor: '#daefb2'
  }
    
});

export default Tyc;