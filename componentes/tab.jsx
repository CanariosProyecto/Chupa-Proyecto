/*import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

//pantallas

import LoginScreen from '../pantallas/inicioSes';
import CarritoScreen from '../pantallas/carrito';
import InicioScreen from '../pantallas/inicio';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

// Configuración de las pestañas inferiores
export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            
            if (route.name === 'Login') {
              iconName = 'arrow-back-outline'; // Icono de flecha
            } else if (route.name === 'Inicio') {
              iconName = 'home-outline'; // Icono de casa
            } else if (route.name === 'Carrito') {
              iconName = 'cart-outline'; // Icono de carrito de compras
            }

            return <Icon name={iconName} size={24} color={'color'} />;
          },
          tabBarShowLabel: false, // Oculta el texto debajo de los iconos
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: '#2d572c', // Color de fondo de la barra de pestañas
            borderTopWidth: 0, // Sin bordes en la parte superior
          },


          
        })}
      >
      { Pantalla de Inicio de Sesión }
        <Tab.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        
        {Pantalla de Inicio }
        <Tab.Screen name="Inicio" component={InicioScreen} />
        
        { Pantalla del Carrito}
        <Tab.Screen name="Carrito" component={CarritoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Pantallas
import InicioScreen from '../pantallas/inicio';
import CarritoScreen from '../pantallas/carrito';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Inicio') {
              iconName = 'home-outline';
            } else if (route.name === 'Carrito') {
              iconName = 'cart-outline';
            }
            return <Icon name={iconName} size={24} color={color} />;
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: '#2d572c',
            borderTopWidth: 0,
          },
        })}
      >
        <Tab.Screen name="Inicio" component={InicioScreen} />
        <Tab.Screen name="Carrito" component={CarritoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

