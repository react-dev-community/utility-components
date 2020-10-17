// Styles

import { StyleProp, TextStyle } from 'react-native';

export type FlexJustifyType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type FlexDirectionType =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse';

export type TxtSty = StyleProp<TextStyle>;
