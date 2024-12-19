import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const CookingProcessScreen = ({ route, navigation }) => {
  const { steps } = route.params;
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = steps.length;
  let direction = null; // Menyimpan arah swipe

  const handleGesture = (event) => {
    if (event.nativeEvent.translationX < -50) {
      direction = 'left'; // Swipe ke kiri
    } else if (event.nativeEvent.translationX > 50) {
      direction = 'right'; // Swipe ke kanan
    }
  };

  const handleGestureEnd = () => {
    if (direction === 'left') {
      // Swipe ke kiri (next)
      if (currentStep < totalSteps - 1) {
        setCurrentStep(currentStep + 1);
      }
    } else if (direction === 'right') {
      // Swipe ke kanan (previous)
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    }
    direction = null; // Reset arah setelah aksi
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${(currentStep + 1) / totalSteps * 100}%` }]} />
      </View>
      <PanGestureHandler onGestureEvent={handleGesture} onEnded={handleGestureEnd}>
        <Animated.View style={styles.stepContainer}>
          <Text style={styles.stepText}>{steps[currentStep]}</Text>
          <Text style={styles.stepNumber}>
            Step {currentStep + 1} of {totalSteps}
          </Text>
        </Animated.View>
      </PanGestureHandler>
      <View style={styles.navigationButtons}>
        {currentStep > 0 && (
          <TouchableOpacity
            onPress={() => setCurrentStep(Math.max(currentStep - 1, 0))}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => {
            if (currentStep === totalSteps - 1) {
              // Arahkan ke RecipeList jika sudah di step terakhir
              navigation.navigate('RecipeList'); // Ganti dengan nama yang sesuai dengan stack navigator Anda
            } else {
              setCurrentStep(Math.min(currentStep + 1, totalSteps - 1));
            }
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{currentStep === totalSteps - 1 ? 'End' : 'Next'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'orange',
    borderRadius: 5,
  },
  stepContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  stepNumber: {
    fontSize: 16,
    color: 'gray',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20, // Jarak dengan area bawah layar
  },
  button: {
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CookingProcessScreen;
