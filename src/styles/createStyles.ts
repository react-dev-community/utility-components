import { StyleSheet } from 'react-native';
import { useTheme } from '../theme';

const createStyles = (cb: any) => (props = {}) => {
  const theme = useTheme() || {};
  return StyleSheet.create(cb(props, theme));
};

export default createStyles;
