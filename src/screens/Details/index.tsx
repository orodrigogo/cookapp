import React from 'react';
import { View } from 'react-native';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Toggle } from '../../components/Toggle';
import { Plate } from '../../components/Plate';

import { styles } from './styles';

export function Details() {
  return (
    <View style={styles.container}>
      <Header />
      <Toggle />
      <Plate />
      <Footer />
    </View >
  );
}