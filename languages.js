import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function OptionsScreen() {
  const handleOptionSelect = (option) => {
    console.log('Selected option:', option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Languge</Text>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => handleOptionSelect('English')}
      >
        <Text style={styles.optionButtonText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => handleOptionSelect('Urdu')}
      >
        <Text style={styles.optionButtonText}>Urdu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => handleOptionSelect('Spanish')}
      >
        <Text style={styles.optionButtonText}>Spanish</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => handleOptionSelect('Portuguese')}
      >
        <Text style={styles.optionButtonText}>Portuguese</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    padding: 12,
    backgroundColor: '#0f1758',
    borderRadius: 4,
    width: 200,
    marginBottom: 10,
  },
  optionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

export default OptionsScreen;
