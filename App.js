import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Jokes from './components/jokes'

export default function App() {
  return (
    <View style={styles.container}>
      <Jokes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
