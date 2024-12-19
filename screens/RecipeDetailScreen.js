import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RecipeDetailScreen = ({ route, navigation }) => {
  const { recipe } = route.params; // Mendapatkan informasi resep dari navigasi
  const [checkedIngredients, setCheckedIngredients] = useState([]); // State untuk menyimpan bahan yang dicentang

  // Fungsi untuk toggle status centang bahan
  const toggleIngredientCheck = (ingredient) => {
    setCheckedIngredients((prevChecked) =>
      prevChecked.includes(ingredient)
        ? prevChecked.filter((item) => item !== ingredient) // Menghapus jika sudah dicentang
        : [...prevChecked, ingredient] // Menambah jika belum dicentang
    );
  };

  // Daftar bahan dari resep
  const ingredients = recipe.ingredients || [
    "2 cups of rice",
    "1 chicken breast",
    "2 cloves of garlic",
    "1 tablespoon soy sauce",
    "Salt and pepper to taste",
    "2 eggs",
    "1 green onion, sliced",
  ];

  return (
    <View style={styles.container}>
      <Image source={recipe.image} style={styles.image} />
      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.category}>Kategori: {recipe.category}</Text>
      <Text style={styles.duration}>Durasi: {recipe.duration} menit</Text>

      <Text style={styles.sectionTitle}>Bahan-bahan:</Text>
      <FlatList
        data={ingredients}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.ingredientContainer}
            onPress={() => toggleIngredientCheck(item)} // Menangani klik pada bahan
          >
            <Ionicons
              name={
                checkedIngredients.includes(item)
                  ? 'checkmark-circle'
                  : 'ellipse-outline'
              }
              size={24}
              color={checkedIngredients.includes(item) ? 'orange' : 'gray'} // Mengubah warna ikon berdasarkan status centang
            />
            <Text style={styles.ingredientText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()} // Kunci unik untuk setiap item
      />

      {/* Tombol Mulai Memasak */}
      <TouchableOpacity
        style={styles.startCookingButton}
        onPress={() => navigation.navigate('CookingProcess', { steps: recipe.steps })} // Navigasi ke layar proses memasak
      >
        <Text style={styles.buttonText}>Mulai Memasak</Text>
      </TouchableOpacity>
    </View>
  );
};

// Gaya untuk komponen
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF' },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 15 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  category: { fontSize: 16, color: '#555', marginBottom: 5 },
  duration: { fontSize: 16, color: '#555', marginBottom: 15 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  ingredientContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  ingredientText: { fontSize: 16, marginLeft: 10 },
  startCookingButton: {
    backgroundColor: 'orange', // Latar belakang oranye
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 'auto', // Memindahkan tombol ke bawah
    marginBottom: 20, // Jarak dari batas bawah layar
  },
  buttonText: {
    color: '#fff', // Teks berwarna putih
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RecipeDetailScreen;
