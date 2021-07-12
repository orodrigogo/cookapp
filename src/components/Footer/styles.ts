import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  price: {
    fontFamily: theme.fonts.primary700,
    color: theme.colors.brown,
    fontSize: 34
  },
  label: {
    fontFamily: theme.fonts.primary700,
    color: theme.colors.brown,
    fontSize: 17,
  },
  text: {
    fontFamily: theme.fonts.primary400,
    color: theme.colors.gray,
    fontSize: 14,
    lineHeight: 18,
    marginVertical: 15
  }
});