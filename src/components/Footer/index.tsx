import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { Button } from '../Button';

export function Footer() {
  return (
    <View>
      <Text style={styles.label}>
        Detail
      </Text>

      <Text style={styles.text}>
        Get 50% discount on the special and delicious sushi
        and stay connected for further discounts.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          $22
        </Text>

        <Button />
      </View>
    </View>
  );
}