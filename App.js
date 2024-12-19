import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeListScreen from './screens/RecipeListScreen';
import RecipeDetailScreen from './screens/RecipeDetailScreen';
import CookingProcessScreen from './screens/CookingProcessScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { AuthProvider } from './context/AuthContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }} // Menyembunyikan header di LoginScreen
          />
          <Stack.Screen 
            name="Register" 
            component={RegisterScreen} 
            options={{ headerShown: false }} // Menyembunyikan header di RegisterScreen
          />
          <Stack.Screen 
            name="RecipeList" 
            component={RecipeListScreen} 
            options={{ title: 'Daftar Resep' }} // Judul untuk RecipeListScreen
          />
          <Stack.Screen 
            name="RecipeDetail" 
            component={RecipeDetailScreen} 
            options={{ title: 'Detail Resep' }} // Judul untuk RecipeDetailScreen
          />
          <Stack.Screen 
            name="CookingProcess" 
            component={CookingProcessScreen} 
            options={{ title: 'Proses Memasak' }} // Judul untuk CookingProcessScreen
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
