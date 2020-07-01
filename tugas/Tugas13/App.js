import React from 'react';
import {StyleSheet, View} from 'react-native';
import LoginScreen from './LoginScreen';
import AboutMeScreen from './AboutMeScreen';

export default function App() {
  return <AboutMeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Rubik-Medium',
  },
});
