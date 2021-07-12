import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.red,
    height: 50,
    width: 200,
    borderRadius: 50,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: theme.colors.white,
    fontSize: 16
  },
});