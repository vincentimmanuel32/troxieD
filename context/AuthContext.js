import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    };
    checkUser();
  }, []);

  const login = async (username, password) => {
    // Ganti dengan logika autentikasi nyata
    if (username === 'user' && password === 'password') {
      const userData = { username }; // Simulasi data pengguna
      setUser(userData);
      await AsyncStorage.setItem('user', JSON.stringify(userData)); // Simpan data pengguna
    } else {
      throw new Error('Invalid username or password');
    }
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user'); // Hapus data pengguna
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
