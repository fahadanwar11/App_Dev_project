import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { addToCart } from './Database'; 

const AddToCartPage = () => {
  // State variables for input values
  const [productId, setProductId] = useState('');
  const [userId, setUserId] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState('');

  // Function to handle adding item to cart
  const handleAddToCart = async () => {
    try {
      const cartItemId = await addToCart(productId, userId, size, quantity);
      console.log('Cart Item ID:', cartItemId);
      // Reset input values after successful addition
      setProductId('');
      setUserId('');
      setSize('');
      setQuantity('');
      // Show success message or perform additional actions
    } catch (error) {
      console.log('Error:', error);
      // Show error message or perform error handling
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Product ID"
        value={productId}
        onChangeText={setProductId}
      />
      <TextInput
        style={styles.input}
        placeholder="User ID"
        value={userId}
        onChangeText={setUserId}
      />
      <TextInput
        style={styles.input}
        placeholder="Size"
        value={size}
        onChangeText={setSize}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default AddToCartPage;
