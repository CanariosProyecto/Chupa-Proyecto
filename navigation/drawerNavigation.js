import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../imagenes/logo1.png';
import { useAuth } from '../src/config/authcontext';

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
import Envio from "../pantallas/envio"
import Pago from "../pantallas/pago"
import infoPersonal from '../pantallas/infoPersonal';
import preguntas from "../pantallas/preguntas"
import Micuentainfo from '../pantallas/micuentainfo';
import Editarcuenta from '../pantallas/editarcuenta';
import EditarDireccion from '../pantallas/editardirecciones';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Componente para mostrar el logo centrado en el encabezado
function LogoTitle() {
  return (
    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={Logo}
        style={{ width: 50, height: 50, resizeMode: 'contain' }}
      />
    </View>
  );
}

// Tabs personalizados para cada pantalla
function createTabs(screenComponent) {
  return ({ navigation }) => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === 'TabInicio') {
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
      <Tab.Screen 
        name="TabInicio" 
        component={screenComponent} 
        options={{ headerShown: false }}
        listeners={{
          tabPress: e => {
            // Previene la navegación predeterminada y restablece la navegación a Inicio
            e.preventDefault();
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
  const { user } = useAuth();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Inicio"
        drawerStyle={{
          backgroundColor: 'black',
          width: 240,
        }}
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#2d572c',
          },
          headerTintColor: '#fff',
          headerTitle: (props) => <LogoTitle {...props} />,
          headerTitleAlign: 'center',
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 10 }}>
              <TouchableOpacity onPress={() => alert('Perfil!')}>
                <Icon name="search-outline" size={25} color="#fff" style={{ marginRight: 15 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate(user ? "Micuentainfo" : "Registro")}>
                <Icon name="person-outline" size={25} color="#fff" />
              </TouchableOpacity>
            </View>
          ),
        })}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Inicio"
          component={createTabs(Inicio)}
          options={{ drawerLabel: 'Inicio' }}
        />
        <Drawer.Screen name="Producto" component={createTabs(Producto)} options={{ drawerLabel: 'Producto' }} />
        <Drawer.Screen name="Mates" component={createTabs(Mates)} options={{ drawerLabel: 'Mates' }} />
        <Drawer.Screen name="Termos" component={createTabs(Termos)} options={{ drawerLabel: 'Termos' }} />
        <Drawer.Screen name="Bombillas" component={createTabs(Bombillas)} options={{ drawerLabel: 'Bombillas' }} />
        <Drawer.Screen name="Yerbas" component={createTabs(Yerbas)} options={{ drawerLabel: 'Yerbas' }} />
        <Drawer.Screen name="Registro" component={createTabs(RegistroPantalla)} options={{ drawerLabel: 'Registro' }} />
        <Drawer.Screen name="TerminosyCondiciones" component={createTabs(TerminosyCondiciones)} options={{ drawerLabel: 'Términos y condiciones' }} />
        <Drawer.Screen name="infoPersonal" component={createTabs(infoPersonal)} options={{ drawerLabel: 'Información Personal' }} />
        <Drawer.Screen name="preguntas" component={createTabs(preguntas)} options={{ drawerLabel: 'Preguntas Frecuentes' }} />
        <Drawer.Screen name="Envio" component={createTabs(Envio)} options={{ drawerLabel: 'Envío' }} />
        <Drawer.Screen name="Pago" component={createTabs(Pago)} options={{ drawerLabel: 'Pago' }} />
        <Drawer.Screen name="Cambiar Contraseña" component={createTabs(CambiarContraseña)} options={{ drawerLabel: 'Cambiar Contraseña' }} />
        <Drawer.Screen name="Inicio de sesión" component={createTabs(InicioSes)} options={{ drawerLabel: 'Inicio de sesión' }} />
        <Drawer.Screen name="Micuentainfo" component={createTabs(Micuentainfo)} options={{ drawerLabel: 'Mi Cuenta' }} />
        <Drawer.Screen name="Editarcuenta" component={createTabs(Editarcuenta)} options={{ drawerLabel: 'Editar Cuenta' }} />
        <Drawer.Screen name="EditarDireccion" component={createTabs(EditarDireccion)} options={{ drawerLabel: 'Editar Direccion' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
