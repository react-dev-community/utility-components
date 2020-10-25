import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { useTheme } from '../theme';
import { Theme } from './../theme/types';

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
type CallBackType<T> = (props: any, theme: Theme) => NamedStyles<T> | T;

const createStyles = <T extends NamedStyles<T> | NamedStyles<any>>(
  cb: CallBackType<T>
) => (props = {}) => {
  const theme = useTheme() || {};
  return StyleSheet.create(cb(props, theme));
};

export default createStyles;
