import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const RecipeCard = ({ recipe, onPress }) => {
  // Hitung lebar progress bar berdasarkan rating (0-5)
  const progressWidth = (recipe.rating / 5) * 100; // Menghitung persen dari rating

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={recipe.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{recipe.name}</Text>
        <Text>Kategori: {recipe.category}</Text>
        <Text>Durasi: {recipe.duration} menit</Text>
        <Text>Kesulitan: {recipe.difficulty}</Text>

        {/* Progress Bar and Rating Container */}
        <View style={styles.ratingProgressContainer}>
          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <View style={[styles.progressBar, { width: `${progressWidth}%` }]} />
          </View>

          <Text style={styles.rating}>{recipe.rating} ⭐ ({recipe.ratingCount})</Text>
          {/* Menambahkan jumlah rating di sebelah bintang */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { 
    flexDirection: 'row', 
    padding: 0, 
    marginTop: 20,
    marginBottom: 20, 
    backgroundColor: '#FFF', 
    borderRadius: 8,
    elevation: 2, // Menambahkan efek bayangan
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingProgressContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Menjaga elemen sejajar secara vertikal
    justifyContent: 'space-between', // Memberikan jarak antara rating dan progress bar
    marginTop: 5,
  },
  rating: {
    fontSize: 16,
    color: 'black', // Mengubah warna rating dan rating count menjadi hitam
    marginLeft: 10, // Memberikan jarak antara progress bar dan rating
  },
  progressContainer: {
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    overflow: 'hidden',
    flex: 1, // Membuat progress container mengisi ruang yang tersisa
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'orange', // Mengubah warna progress bar menjadi oranye
  },
});

export default RecipeCard;
