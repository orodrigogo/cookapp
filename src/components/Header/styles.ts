import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontFamily: theme.fonts.primary700,
    color: theme.colors.brown,
    fontSize: 28,
  },
  subtitle: {
    fontFamily: theme.fonts.primary500,
    color: theme.colors.orange,
    fontSize: 20,
    alignSelf: 'flex-end',
  },
});