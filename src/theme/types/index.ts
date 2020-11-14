import { TextStyle, ViewStyle } from 'react-native';
import { PickerThemeOverrideProps } from '../../components/Picker/types';

type VariantType<P, T = any> = { [K in keyof T]: P } & { default?: P };

type ButtonStyleProps = any;
type ContainerStyleProps = ViewStyle;
type InputStyleProps = any;

export interface Theme<T = any> {
  color?: {
    primary?: string;
    secondary?: string;
  };
  text?: VariantType<TextStyle, T>;
  button?: VariantType<ButtonStyleProps>;
  containers?: VariantType<ContainerStyleProps>;
  input?: VariantType<InputStyleProps>;
  picker?: VariantType<Partial<PickerThemeOverrideProps>>;
}
