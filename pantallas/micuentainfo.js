import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useAuth } from '../src/config/authcontext'; // Asegúrate de que este sea el camino correcto
import { getFirestore, doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const MiCuentaInfo = () => {
  const { user, loading, logout } = useAuth(); // Extraemos logout del contexto
  const [userInfo, setUserInfo] = useState(null);
  const [direcciones, setDirecciones] = useState([]);
  const firestore = getFirestore();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (user) {
        // Obtener información del usuario
        const docRef = doc(firestore, 'users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserInfo(docSnap.data());
        } else {
          console.log('No se encontró el documento.');
          Alert.alert('Error', 'No se encontraron datos de usuario.');
        }

        // Obtener direcciones del usuario
        const addressesRef = collection(firestore, 'addresses');
        const q = query(addressesRef, where('userId', '==', user.uid));

        const querySnapshot = await getDocs(q);
        const userAddresses = [];
        querySnapshot.forEach((doc) => {
          userAddresses.push(doc.data());
        });
        setDirecciones(userAddresses); // Actualizar el estado con las direcciones
      } else {
        Alert.alert('Error', 'No hay usuario autenticado.');
      }
    };

    if (!loading) {
      fetchUserInfo();
    }
  }, [user, loading, firestore]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  if (!userInfo) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>No hay datos de usuario disponibles.</Text>
      </View>
    );
  }

  const handleLogout = async () => {
    try {
      await logout(); // Llama a la función para cerrar sesión
      Alert.alert('Éxito', 'Has cerrado sesión correctamente.'); // Alerta de éxito
      navigation.navigate('Login'); // Navega a la pantalla de inicio de sesión
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al cerrar sesión.');
      console.error("Error cerrando sesión: ", error); // Log del error en la consola
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi cuenta</Text>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Datos personales</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Editarcuenta')}>
            <Text style={styles.editText}>Editar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.infoText}>
          Nombre y apellido: {userInfo.nombre || 'No disponible'} {userInfo.apellido || ''}
        </Text>
        <Text style={styles.infoText}>
          DNI: {userInfo.dni || 'No disponible'}
        </Text>
        <Text style={styles.infoText}>
          Teléfono: {userInfo.telefono || 'No disponible'}
        </Text>
        <Text style={styles.infoText}>
          Dirección de email: {user.email || 'No disponible'}
        </Text>
        <View style={styles.passwordRow}>
          <Text style={styles.infoText}>Contraseña</Text>
          <TouchableOpacity>
            <Text style={styles.editText} >Editar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Direcciones</Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditarDireccion')}>
            <Text style={styles.editText}>Editar</Text>
          </TouchableOpacity>
        </View>
        {direcciones.length > 0 ? (
          direcciones.map((dir, index) => (
            <View key={index}>
              <Text style={styles.infoText}>Dirección: {dir.direccion || 'No disponible'}</Text>
              <Text style={styles.infoText}>Código Postal: {dir.codigoPostal || 'No disponible'}</Text>
              <Text style={styles.infoText}>Provincia: {dir.provincia || 'No disponible'}</Text>
              <Text style={styles.infoText}>País: {dir.pais || 'No disponible'}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.infoText}>No hay direcciones disponibles.</Text>
        )}
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    backgroundColor: '#d6e6b1',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  editText: {
    color: '#2d572c',
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 14,
    marginBottom: 5,
  },
  passwordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#ada46f',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default MiCuentaInfo;
