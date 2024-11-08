import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../imagenes/logo1.png'; // Ruta del logo

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
import micuentainfo from '../pantallas/micuentainfo';


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



/* 
export const MenuItems=({navigation})=>{
  const [isProductosOpen, setIsProductosOpen] = useState(false);

  <View style={styles.desplegable}>
            <TouchableOpacity onPress={()=>navigation.navigate('Productos')}><Text style={styles.buttonDesp}>Productos</Text></TouchableOpacity>
            <TouchableOpacity style={styles.img} onPress={() => setIsProductosOpen(!setIsProductosOpen)}><Image style={styles.imagen} source={require("../imagenes/flecha.webp")}/></TouchableOpacity>
        </View>

        {isProductosOpen && (
                <View style={styles.submenu}>
                    <TouchableOpacity style={styles.Size} onPress={() => navigation.navigate('Mates')}>
                        <Text style={styles.dropdown}>Mates</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Size} onPress={() => navigation.navigate('Yerbas')}>
                        <Text style={styles.dropdown}>Yerbas</Text>
                    </TouchableOpacity>
                </View>
               
       )}
}*/

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
        name="Producto"
        component={createTabs(Producto)} // Tabs personalizados para la pantalla de Mates
        options={{ drawerLabel: 'Producto' }}
        />
        <Drawer.Screen
          name="Mates"
          component={createTabs(Mates)} // Tabs personalizados para la pantalla de Mates
          options={{ drawerLabel: 'Mates' }}
        />
        <Drawer.Screen
          name="Termos"
          component={createTabs(Termos)} // Tabs personalizados para la pantalla de Mates
          options={{ drawerLabel: 'Termos' }}
        />
        <Drawer.Screen
          name="Micuentaprueba"
          component={createTabs(micuentainfo)} // Tabs personalizados para la pantalla de Mates
          options={{ drawerLabel: 'micuentainfo' }}
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
          name="Registro"
          component={createTabs(RegistroPantalla)} // Tabs personalizados para la pantalla de Registro
          options={{ drawerLabel: 'Registro' }}
        />
        <Drawer.Screen
          name="TerminosyCondiciones"
          component={createTabs(TerminosyCondiciones)} // Tabs personalizados para la pantalla de Mates
          options={{ drawerLabel: 'Terminos y condiciones' }}
        />
        <Drawer.Screen
          name="infoPersonal"
          component={createTabs(infoPersonal)} // Tabs personalizados para la pantalla de Mates
          options={{ drawerLabel: 'Informanción Personal' }}
        />
        <Drawer.Screen
          name="preguntas"
          component={createTabs(preguntas)} // Tabs personalizados para la pantalla de Mates
          options={{ drawerLabel: 'Preguntas frecuentes' }}
        />
        <Drawer.Screen
          name="Envio"
          component={createTabs(Envio)} // Tabs personalizados para la pantalla de Mates
          options={{ drawerLabel: 'Envio' }}
        />
        <Drawer.Screen
          name="Pago"
          component={createTabs(Pago)} // Tabs personalizados para la pantalla de Mates
          options={{ drawerLabel: 'Pago' }}
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
  submenu:{
    backgroundColor:'#212121',
  },
  desplegable:{
      display:'flex',
      flexDirection:'row',
      width:'100%',
      color:'#fff',
      padding:15,
      marginTop:'5%',
      width:'100%',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'

  },
  buttonDesp:{
      textAlign:'center',  
      color:'#fff',

  },
  dropdown:{
      color:'white',

      textAlign:'right',
      padding:10,
      marginTop:'2%'
  },
  Size:{
      width:'100%',
  },

});

