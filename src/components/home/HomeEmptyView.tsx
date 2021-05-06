import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeEmptyView = () => (
  <View style={styles.container}>
    <Text style={styles.text}>There are no items in the marketplace.</Text>
  </View>
)

export default HomeEmptyView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontFamily: 'Oxygen_700Bold',
    fontSize: 24,
  },
})