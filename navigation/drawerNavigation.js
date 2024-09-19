import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, DrawerContentScrollView, DrawerItemList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from "../imagenes/logo.png"

// Pantallas
import InicioScreen from '../pantallas/inicio';
import CarritoScreen from '../pantallas/carrito';
import CambiarContraseña from '../pantallas/cambiarContraseña';
import InicioSes from '../pantallas/inicioSes';
import Inicio from '../pantallas/inicio';
import RegistroPantalla from '../pantallas/registro';

// Crear los navegadores
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Tabs que se usarán en todas las pantallas
function Tabs() {
  return (
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
      <Tab.Screen name="Inicio" component={InicioScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Carrito" component={CarritoScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

// Contenido personalizado del Drawer
function CustomDrawerContent(props) {
  console.log(props)
  return (
    <View style={{ flexGrow: 1 }}>
      {/* Logo en la parte superior del Drawer */}
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}

export default function DrawerNavigation() {

  let props = "hola"
  let propss = [
    {
      "state": {
        "index": 0,
        "routeNames": [
          "InicioConTabs",
          "Cambiar Contraseña",
          "Inicio de sesión"
        ],
        "routes": [
          {
            "key": "InicioConTabs",
            "name": "InicioConTabs"
          },
          {
            "key": "CambiarContraseña",
            "name": "Cambiar Contraseña"
          },
          {
            "key": "InicioSesion",
            "name": "Inicio de sesión"
          }
        ]
      },
      "navigation": {
        "navigate": function (routeName) { /* Código que navega a otra pantalla*/},
        "toggleDrawer": function () { /* Código que abre o cierra el drawer */ }
      },
      "descriptors": {
        "InicioConTabs": {
          "options": {
            "drawerLabel": "Inicio"
          }
        },
        "CambiarContraseña": {
          "options": {
            "drawerLabel": "Cambiar Contraseña"
          }
        },
        "InicioSesion": {
          "options": {
            "drawerLabel": "Inicio de sesión"
          }
        }
      },
      "progress": {}
    }
  ]
  return (
    <NavigationContainer>
      <Drawer.Navigator
        //drawerContent={() => CustomDrawerContent(props)}
        initialRouteName="InicioConTabs"
        screenOptions={({ navigation }) => ({
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 10 }}>
              {/* Icono de Lupa */}
              <TouchableOpacity onPress={() => alert('Buscar!')}>
                <Icon name="search-outline" size={25} color="#000" style={{ marginRight: 15 }} />
              </TouchableOpacity>
              {/* Icono de Persona */}
              <TouchableOpacity onPress={() => alert('Perfil!')}>
                <Icon name="person-outline" size={25} color="#000" />
              </TouchableOpacity>
            </View>
          ),
        })}
      >
        <Drawer.Screen
          name="Inicio"
          component={Tabs}
          options={{ drawerLabel: 'Inicio' }}
        />
        <Drawer.Screen
          name="Cambiar Contraseña"
          component={CambiarContraseña}
          options={{ drawerLabel: 'Cambiar Contraseña' }}
        />
        <Drawer.Screen
          name="Inicio de sesión"
          component={InicioSes}
          options={{ drawerLabel: 'Inicio de sesión' }}
        />
        <Drawer.Screen
          name="Registro"
          component={RegistroPantalla}
          options={{ drawerLabel: 'Registro' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center', // Centra el logo verticalmente
    alignItems: 'center', // Centra el logo horizontalmente
  },
  logo: {
    width: 100, // Ajusta según el tamaño de tu logo
    height: 100,
    resizeMode: 'contain', // Mantiene la proporción del logo
  },
});
