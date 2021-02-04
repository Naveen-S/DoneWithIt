import { Platform } from 'react-native';
import colors from './colors';

const defaultStyles = {
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: colors.darkGray,
  },
};

export default defaultStyles;
