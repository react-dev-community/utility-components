import { TextStyle, ViewStyle } from 'react-native';
import { InputStyleProps } from '../../components/Input/types/types';
import { PickerThemeOverrideProps } from '../../components/Picker/types';

type VariantType<P, T = any> = { [K in keyof T]: P } & { default?: P };

type ButtonStyleProps = any;
export type ContainerStyleProps = ViewStyle;
/*>>>>> We wouldn't need to declare ThemeProps here,
it should be same as that of the Input Component Theme Props */

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
