import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Username and password cannot be empty.');
      return;
    }

    Alert.alert('Registration Successful');
    navigation.navigate('Login'); // Kembali ke LoginScreen setelah berhasil mendaftar
  };

  return (
    <View style={styles.container}>
      {/* Logo dan Teks CentRecipe */}
      <Image
        source={require('../assets/logo.png')} // Ganti dengan path ke logo Anda
        style={styles.logo}
      />
      <Text style={styles.logoText}>CentRecipe</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Login here</Text>
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

      {/* Tombol Register dengan warna orange */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Atau daftar dengan:</Text>

      {/* Register with Apple */}
      <TouchableOpacity style={styles.socialButton}>
        <View style={styles.buttonContent}>
          <Icon name="apple" size={20} color="black" />
          <Text style={styles.buttonText}>Register with Apple</Text>
        </View>
      </TouchableOpacity>

      {/* Register with Google */}
      <TouchableOpacity style={styles.socialButton}>
        <View style={styles.buttonContent}>
          <Icon name="google" size={20} color="black" />
          <Text style={styles.buttonText}>Register with Google</Text>
        </View>
      </TouchableOpacity>

      {/* Register with Microsoft */}
      <TouchableOpacity style={styles.socialButton}>
        <View style={styles.buttonContent}>
          <Icon name="windows" size={20} color="black" />
          <Text style={styles.buttonText}>Register with Microsoft</Text>
        </View>
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff', // Warna latar belakang
  },
  logo: {
    width: 100, // Ubah sesuai ukuran logo Anda
    height: 100, // Ubah sesuai ukuran logo Anda
    alignSelf: 'center', // Memposisikan gambar di tengah
    marginBottom: 10,
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
  socialButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: 'orange', // Ubah warna tombol menjadi orange
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center', // Memposisikan teks di tengah
  },
  loginText: {
    textAlign: 'center',
    color: '#007BFF', // Warna biru untuk teks hyperlink
    marginBottom: 20,
    fontSize: 16,
  },
});

export default RegisterScreen;
