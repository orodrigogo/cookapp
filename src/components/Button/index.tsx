import React from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../styles/theme';

export function Button() {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={.8}
    >
      <Text style={styles.text}>
        Add to Card
      </Text>

      <Feather
        name="shopping-cart"
        size={24}
        color={theme.colors.white}
      />
    </TouchableOpacity>
  );
}