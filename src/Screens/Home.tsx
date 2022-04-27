import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  getStatusBarHeight,
  ifIphoneX,
  isIphoneX,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

export default function Home() {
  if (isIphoneX()) {
    alert('VOCE ESTÁ USANDO O IPHONE X');
  } else {
    alert('VOCE NÃO ESTÁ USANDO O IPHONE X');
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' backgroundColor='transparent' translucent />
      <Text style={styles.text}> Hello, Icode </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: getStatusBarHeight(true),
    ...ifIphoneX(
      {
        backgroundColor: 'red',
      },
      {
        paddingHorizontal: 50,
      }
    ),
    marginBottom: getBottomSpace(),
  },
  text: {
    color: 'white',
  },
});
