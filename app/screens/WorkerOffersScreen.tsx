import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const WorkerOffersScreen = () => {
  const offers = [
    { id: '1', name: 'Jenny Wilson', price: 224, distance: '2.1 km', rating: 4.8, reviews: 8289 },
    { id: '2', name: 'Jenny Wilson', price: 200, distance: '3.1 km', rating: 4.8, reviews: 8289 },
    { id: '3', name: 'Jenny Wilson', price: 324, distance: '4.2 km', rating: 4.8, reviews: 8289 },
  ];

  const renderOffer = ({ item } : any) => (
    <View style={styles.offerContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.details}>
        Rating: {item.rating} | {item.reviews} reviews
      </Text>
      <Text style={styles.price}>${item.price}</Text>
      <Text style={styles.distance}>{item.distance}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.declineButton}>
          <Text style={styles.buttonText}>Decline</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptButton}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={offers}
        keyExtractor={item => item.id}
        renderItem={renderOffer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1C1C2B',
  },
  offerContainer: {
    backgroundColor: '#2C2C4B',
    padding: 20,
    borderRadius: 10,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  details: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6C44',
  },
  distance: {
    fontSize: 16,
    color: '#FF6C44',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  declineButton: {
    backgroundColor: 'transparent',
    borderColor: '#FF6C44',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  acceptButton: {
    backgroundColor: '#FF6C44',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
  },
});

export default WorkerOffersScreen;
