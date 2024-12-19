import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import RecipeCard from '../components/RecipeCard';

const RecipeListScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

const recipes = [
  {
    id: '1',
    name: 'Nasi Goreng',
    category: 'Makanan Utama',
    duration: 30,
    difficulty: 'Mudah',
    servings: 2,
    calories: 400,
    rating: 5,
    ratingCount: 2200,
    image: require('../assets/nasi_goreng.jpg'),
    ingredients: ['2 porsi nasi', '2 sendok makan minyak', '2 siung bawang merah, cincang', '2 siung bawang putih, cincang', '1 butir telur', '3 sendok makan kecap manis', 'Garam secukupnya', 'Merica secukupnya'],
    steps: [
      'Panaskan minyak dalam wajan besar di atas api sedang.',
      'Tumis bawang merah dan bawang putih hingga harum.',
      'Masukkan nasi dan aduk rata.',
      'Buat lubang di tengah nasi, pecahkan telur, dan aduk hingga telur matang.',
      'Tambahkan kecap manis, garam, dan merica. Aduk rata dan masak selama 5 menit.',
      'Sajikan hangat.'
    ],
    tips: 'Gunakan nasi yang sudah didiamkan semalaman untuk hasil terbaik.',
    progress: 0,
  },
  {
    id: '2',
    name: 'Soto Ayam',
    category: 'Makanan Utama',
    duration: 45,
    difficulty: 'Mudah',
    servings: 3,
    calories: 350,
    rating: 4.5,
    ratingCount: 2000,
    image: require('../assets/soto_ayam.jpg'),
    ingredients: ['1 ekor ayam, potong jadi 4', '2 liter air', '2 batang serai, memarkan', '3 lembar daun salam', '5 lembar daun jeruk', '100 gram soun, rendam air panas', 'Bawang goreng untuk taburan', 'Daun bawang untuk hiasan'],
    steps: [
      'Rebus ayam dalam air hingga mendidih. Buang busa yang muncul.',
      'Tambahkan serai, daun salam, dan daun jeruk. Masak hingga ayam empuk.',
      'Angkat ayam, suwir-suwir dagingnya. Saring kaldu.',
      'Sajikan soun dalam mangkuk, tambahkan kaldu, dan taburi bawang goreng serta daun bawang.',
      'Sajikan panas.'
    ],
    tips: 'Sajikan dengan nasi untuk hasil terbaik.',
    progress: 0,
  },
  {
    id: '3',
    name: 'Rendang',
    category: 'Makanan Utama',
    duration: 120,
    difficulty: 'Mudah',
    servings: 4,
    calories: 600,
    rating: 4.8,
    ratingCount: 3500,
    image: require('../assets/rendang.jpg'),
    ingredients: ['1 kg daging sapi, potong dadu', '500 ml santan', '2 batang serai, memarkan', '5 lembar daun jeruk', '5 lembar daun kunyit', '1 sendok teh garam', 'Bumbu halus: 10 siung bawang merah, 5 siung bawang putih, 10 cabai merah, 1 cm jahe, 1 cm kunyit'],
    steps: [
      'Rebus daging sapi dengan sedikit air hingga empuk.',
      'Tambahkan bumbu halus, santan, serai, daun jeruk, dan daun kunyit. Aduk rata.',
      'Masak dengan api kecil hingga kuah menyusut dan daging menyerap bumbu.',
      'Masak selama 2 jam sambil sesekali diaduk.',
      'Sajikan dengan nasi putih.'
    ],
    tips: 'Masak dengan api kecil agar daging empuk.',
    progress: 0,
  },
  {
    id: '4',
    name: 'Ayam Penyet',
    category: 'Makanan Utama',
    duration: 45,
    difficulty: 'Mudah',
    servings: 2,
    calories: 500,
    rating: 4.5,
    ratingCount: 2900,
    image: require('../assets/ayam_penyet.jpg'),
    ingredients: ['2 potong ayam', 'Minyak untuk menggoreng', 'Sambal: 10 cabai rawit, 5 siung bawang putih, 1 sendok teh garam', 'Nasi putih untuk penyajian'],
    steps: [
      'Goreng ayam dalam minyak panas hingga matang dan kecoklatan.',
      'Haluskan sambal dengan cobek atau blender.',
      'Penyet ayam yang sudah digoreng dengan sambal.',
      'Sajikan dengan nasi putih.'
    ],
    tips: 'Gunakan sambal terasi untuk rasa lebih nikmat.',
    progress: 0,
  },
  {
    id: '5',
    name: 'Bakso',
    category: 'Makanan Utama',
    duration: 60,
    difficulty: 'Mudah',
    servings: 5,
    calories: 450,
    rating: 5,
    ratingCount: 4900,
    image: require('../assets/bakso.jpg'),
    ingredients: ['500 gram daging sapi giling', '100 gram tepung tapioka', '1 sendok makan bawang putih bubuk', '1 sendok teh merica', 'Garam secukupnya', 'Air secukupnya'],
    steps: [
      'Campurkan daging sapi, tepung tapioka, bawang putih bubuk, merica, dan garam.',
      'Bentuk adonan menjadi bulatan kecil.',
      'Rebus air dalam panci, lalu masukkan bakso hingga mengapung.',
      'Sajikan dengan kuah kaldu dan sayuran.'
    ],
    tips: 'Tambahkan mie untuk hidangan yang lebih lengkap.',
    progress: 0,
  },
  {
    id: '6',
    name: 'Gado-Gado',
    category: 'Makanan Utama',
    duration: 30,
    difficulty: 'Mudah',
    servings: 3,
    calories: 300,
    rating: 4.9,
    ratingCount: 3500,
    image: require('../assets/gado_gado.jpg'),
    ingredients: ['200 gram sayuran segar (kecambah, wortel, kol)', '100 gram tahu, goreng', '100 gram tempe, goreng', '100 gram bumbu kacang', 'Kerupuk untuk penyajian'],
    steps: [
      'Rebus sayuran hingga layu, tiriskan.',
      'Siapkan tahu dan tempe yang sudah digoreng.',
      'Sajikan sayuran dengan bumbu kacang di atasnya.',
      'Tambahkan kerupuk untuk tekstur.'
    ],
    tips: 'Gunakan bumbu kacang homemade untuk rasa yang lebih enak.',
    progress: 0,
  },
  {
    id: '7',
    name: 'Pasta',
    category: 'Makanan Utama',
    duration: 30,
    difficulty: 'Mudah',
    servings: 2,
    calories: 550,
    rating: 4.5,
    ratingCount: 1500,
    image: require('../assets/pasta.jpg'),
    ingredients: ['200 gram pasta', '100 gram saus tomat', '50 gram keju parmesan', '2 siung bawang putih, cincang', 'Garam dan merica secukupnya'],
    steps: [
      'Rebus pasta dalam air mendidih hingga al dente.',
      'Tumis bawang putih dalam wajan, tambahkan saus tomat.',
      'Campurkan pasta ke dalam saus, aduk hingga merata.',
      'Taburi keju parmesan dan sajikan.'
    ],
    tips: 'Guna untuk pasta lebih kaya rasa, tambahkan sayuran segar.',
    progress: 0,
  },
  {
    id: '8',
    name: 'Pizza',
    category: 'Makanan Utama',
    duration: 40,
    difficulty: 'Mudah',
    servings: 4,
    calories: 800,
    rating: 4,
    ratingCount: 2000,
    image: require('../assets/pizza.jpg'),
    ingredients: ['1 adonan pizza', '200 gram saus tomat', '150 gram keju mozzarella', 'Topping sesuai selera (jamur, paprika, sosis)'],
    steps: [
      'Gulung adonan pizza di atas loyang.',
      'Oleskan saus tomat dan taburi keju mozzarella.',
      'Tambahkan topping sesuai selera.',
      'Panggang dalam oven hingga keju meleleh.'
    ],
    tips: 'Pilih topping sesuai selera untuk variasi rasa.',
    progress: 0,
  },
  {
    id: '9',
    name: 'Sushi',
    category: 'Makanan Ringan',
    duration: 50,
    difficulty: 'Mudah',
    servings: 2,
    calories: 300,
    rating: 4,
    ratingCount: 3100,
    image: require('../assets/sushi.jpg'),
    ingredients: ['200 gram nasi sushi', '100 gram ikan segar', 'Nori secukupnya', 'Wasabi dan soy sauce untuk penyajian'],
    steps: [
      'Siapkan nasi sushi dan cetak di atas nori.',
      'Tambahkan irisan ikan segar di atas nasi.',
      'Gulung nori dengan hati-hati dan potong-potong.',
      'Sajikan dengan wasabi dan soy sauce.'
    ],
    tips: 'Gunakan ikan yang segar untuk hasil terbaik.',
    progress: 0,
  },
  {
    id: '10',
    name: 'Salad Buah',
    category: 'Makanan Ringan',
    duration: 20,
    difficulty: 'Mudah',
    servings: 4,
    calories: 150,
    rating: 3.5,
    ratingCount: 1100,
    image: require('../assets/salad_buah.jpg'),
    ingredients: ['100 gram melon, potong dadu', '100 gram stroberi, potong', '100 gram anggur, belah dua', '100 gram yogurt', 'Madu secukupnya'],
    steps: [
      'Campurkan semua buah dalam mangkuk.',
      'Tambahkan yogurt dan madu, aduk hingga rata.',
      'Sajikan dingin.'
    ],
    tips: 'Gunakan buah musiman untuk rasa yang lebih segar.',
    progress: 0,
  },
  {
    id: '11',
    name: 'Kwetiau Goreng',
    category: 'Makanan Utama',
    duration: 30,
    difficulty: 'Mudah',
    servings: 2,
    calories: 500,
    rating: 4.4,
    ratingCount: 3600,
    image: require('../assets/kwetiau.jpg'),
    ingredients: ['200 gram kwetiau', '100 gram daging ayam, potong dadu', '2 siung bawang putih, cincang', 'Sayuran sesuai selera', 'Kecap manis secukupnya'],
    steps: [
      'Rebus kwetiau hingga empuk, tiriskan.',
      'Tumis bawang putih, tambahkan ayam dan masak hingga matang.',
      'Masukkan sayuran dan kwetiau, aduk rata.',
      'Tambahkan kecap manis, masak selama 5 menit.'
    ],
    tips: 'Sajikan dengan sambal untuk rasa yang lebih pedas.',
    progress: 0,
  },
  {
    id: '12',
    name: 'Ikan Bakar',
    category: 'Makanan Utama',
    duration: 60,
    difficulty: 'Mudah',
    servings: 4,
    calories: 350,
    rating: 4.7,
    ratingCount: 3400,
    image: require('../assets/ikan_bakar.jpg'),
    ingredients: ['1 ekor ikan, bersihkan', '3 sendok makan bumbu ikan bakar', '2 sendok makan air jeruk nipis', 'Daun pisang untuk membungkus'],
    steps: [
      'Bersihkan ikan dan lumuri dengan bumbu dan air jeruk nipis.',
      'Bungkus ikan dengan daun pisang.',
      'Bakar di atas bara api selama 30 menit hingga matang.'
    ],
    tips: 'Bakar dengan arang untuk rasa yang lebih sedap.',
    progress: 0,
  },
];



  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Mau masak apa hari ini?"
        placeholderTextColor="black"
        onChangeText={setSearchText}
        value={searchText}
      />
      <FlatList
        data={filteredRecipes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item}
            onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  searchBar: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    color: '#333',
  },
});

export default RecipeListScreen;
