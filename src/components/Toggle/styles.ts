import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    top: 150,
    left: 24,

    width: 70,
    height: 170,
    overflow: 'hidden',

    backgroundColor: theme.colors.red,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    borderTopEndRadius: 30,
    alignItems: 'center',
    paddingVertical: 24
  },
  info: {
    marginTop: 17
  },
  label: {
    fontFamily: theme.fonts.primary400,
    color: theme.colors.white,
    fontSize: 14
  },
  value: {
    fontFamily: theme.fonts.primary700,
    color: theme.colors.white,
    fontSize: 15
  },
});