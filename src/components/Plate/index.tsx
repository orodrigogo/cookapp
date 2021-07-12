import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';
import plateImg from '../../assets/plate.png';

export function Plate() {
  return (
    <Image
      style={styles.plate}
      source={plateImg}
      resizeMode="contain"
    />
  );
}