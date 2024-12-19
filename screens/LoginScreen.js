import React, { useContext, useState } from 'react';
import { View, TextInput, Alert, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Username and password cannot be empty.');
      return;
    }

    try {
      await login(username, password);
      navigation.navigate('RecipeList');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Menambahkan logo di sini */}
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.logoText}>CentRecipe</Text>

      {/* Teks hyperlink untuk pendaftaran */}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Don't have an account? Register here</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      
      {/* Tombol Login dengan warna orange */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Atau login dengan:</Text>

      {/* Tombol untuk Login dengan Apple, Google, dan Microsoft */}
      <TouchableOpacity style={styles.socialButton}>
        <View style={styles.buttonContent}>
          <Icon name="apple" size={20} color="black" />
          <Text style={styles.buttonText}>Login with Apple</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <View style={styles.buttonContent}>
          <Icon name="google" size={20} color="black" />
          <Text style={styles.buttonText}>Login with Google</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <View style={styles.buttonContent}>
          <Icon name="windows" size={20} color="black" />
          <Text style={styles.buttonText}>Login with Microsoft</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  logo: {
    width: 100, // Sesuaikan dengan ukuran logo Anda
    height: 100, // Sesuaikan dengan ukuran logo Anda
    alignSelf: 'center', // Memposisikan gambar di tengah
    marginBottom: 10, // Jarak antara logo dan teks
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  orText: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  registerText: {
    textAlign: 'center',
    color: '#007BFF', // Warna biru untuk teks hyperlink
    marginBottom: 20,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: 'orange', // Ubah warna tombol menjadi orange
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center', // Memposisikan teks di tengah
  },
  socialButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center', // Menjaga konten di tengah secara vertikal
    alignItems: 'center', // Menjaga konten di tengah secara horizontal
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Memastikan logo dan teks berada di tengah
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default LoginScreen;
