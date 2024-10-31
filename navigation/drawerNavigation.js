import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../imagenes/logo.png'; // Ruta del logo

// Pantallas
import Inicio from '../pantallas/inicio';
import Carrito from '../pantallas/carrito';
import CambiarContraseña from '../pantallas/cambiarContraseña';
import InicioSes from '../pantallas/inicioSes';
import RegistroPantalla from '../pantallas/registro';
import Mates from '../pantallas/mates';
import Termos from '../pantallas/termos';
import Bombillas from '../pantallas/bombillas';
import Yerbas from '../pantallas/yerbas';
import Producto from '../pantallas/producto';
import TerminosyCondiciones from '../pantallas/tyc';
import Productos from '../pantallas/productos';



// Crear los navegadores
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Componente para mostrar el logo centrado en el encabezado
function LogoTitle() {
  return (
    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={Logo}
        style={{ width: 50, height: 50, resizeMode: 'contain' }} // 4 cm = 100px aproximadamente
      />
    </View>
  );
}

// Tabs personalizados para cada pantalla
function createTabs(screenComponent) {
  return ({ navigation }) => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Inicio') {
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
      <Tab.Screen 
        name="Inicio" 
        component={screenComponent} 
        options={{ headerShown: false }}
        listeners={{
          tabPress: e => {
            // Prevenir la navegación predeterminada
            e.preventDefault();
            // Restablecer el stack a la pantalla de Inicio
            navigation.reset({
              index: 0,
              routes: [{ name: 'Inicio' }],
            });
          }
        }}
      />
      <Tab.Screen name="Carrito" component={Carrito} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

// Contenido personalizado del Drawer
function CustomDrawerContent(props) {
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
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="InicioConTabs"
        drawerStyle={{
          backgroundColor: 'black', // Aquí estableces el color de fondo
          width: 240,
        }}
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#2d572c', // Cambia el color del encabezado aquí
          },
          headerTintColor: '#fff', // Cambia el color del texto del encabezado
          headerTitle: (props) => <LogoTitle {...props} />,  // Mostrar logo centrado
          headerTitleAlign: 'center', // Asegurar que el logo esté centrado
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 10 }}>
              {/* Icono de Lupa */}
              <TouchableOpacity onPress={() => alert('Perfil!')}>
                <Icon name="search-outline" size={25} color="#fff" style={{ marginRight: 15 }} />
              </TouchableOpacity>
              {/* Icono de Persona */}
              <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
                <Icon name="person-outline" size={25} color="#fff" />
              </TouchableOpacity>
            </View>
          ),
        })}
      >
        <Drawer.Screen
          name="Inicio"
          component={createTabs(Inicio)} // Tabs personalizados para la pantalla Inicio
          options={{ drawerLabel: 'Inicio' }}
        />
        <Drawer.Screen
          name="Cambiar Contraseña"
          component={createTabs(CambiarContraseña)} // Tabs personalizados para la pantalla Cambiar Contraseña
          options={{ drawerLabel: 'Cambiar Contraseña' }}
        />
        <Drawer.Screen
          name="Inicio de sesión"
          component={createTabs(InicioSes)} // Tabs personalizados para la pantalla de Inicio de sesión
          options={{ drawerLabel: 'Inicio de sesión' }}
        />
        <Drawer.Screen
          name="Registro"
          component={createTabs(RegistroPantalla)} // Tabs personalizados para la pantalla de Registro
          options={{ drawerLabel: 'Registro' }}
        />
        <Drawer.Screen
          name="Mates"
          component={createTabs(Mates)} // Tabs personalizados para la pantalla de Mates
          options={{ drawerLabel: 'Mates' }}
        />
        <Drawer.Screen
          name="Termos"
          component={createTabs(Termos)} // Tabs personalizados para la pantalla de Mates
          options={{ drawerLabel: 'termos' }}
        />
        <Drawer.Screen
          name="Bombillas"
          component={createTabs(Bombillas)} // Tabs personalizados para la pantalla de Mates
          options={{ drawerLabel: 'Bombillas' }}
        />
        <Drawer.Screen
        name="Yerbas"
        component={createTabs(Yerbas)} // Tabs personalizados para la pantalla de Mates
        options={{ drawerLabel: 'Yerbas' }}
      />
      <Drawer.Screen
        name="Producto"
        component={createTabs(Producto)} // Tabs personalizados para la pantalla de Mates
        options={{ drawerLabel: 'Producto' }}
      />
      <Drawer.Screen
        name="TerminosyCondiciones"
        component={createTabs(TerminosyCondiciones)} // Tabs personalizados para la pantalla de Mates
        options={{ drawerLabel: 'TerminosyCondiciones' }}
      />
      <Drawer.Screen
        name="Productos"
        component={createTabs(Productos)} // Tabs personalizados para la pantalla de Mates
        options={{ drawerLabel: 'Productos' }}
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
