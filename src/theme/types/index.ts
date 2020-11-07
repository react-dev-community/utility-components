import { TextStyle, ViewStyle } from 'react-native';

type VariantType<P, T = any> = { [K in keyof T]: P } & { default?: P };

type ButtonStyleProps = any;
type ContainerStyleProps = ViewStyle;
type InputStyleProps = any;

interface PickerProps {
  PickerComponent: React.FC<{
    option: { title: string; value: string };
    isActive: boolean;
  }>;
  button?: ButtonStyleProps;
  modalContainer?: ContainerStyleProps;
  pickerContainerStyle?: ContainerStyleProps;
  backgroundStyle?: ContainerStyleProps;
}

// No generic part for now. Add later after a solid solution is known
export interface Theme<T = any> {
  color?: {
    primary?: string;
    secondary?: string;
  };
  text?: VariantType<TextStyle, T>;
  button?: VariantType<ButtonStyleProps>;
  /**  Will contain all the style related props for button

      *** ButtonStyleProps -> backgroundColor, textColor, iconColor, iconSize, paddingLeft, paddingRight
      *** Collect this style props process them in button and apply them accordingly

      // example.
      -> pictButton: { iconColor: 'red',  textColor: 'green', backgroundColor: 4, borderRadius: 10, paddingLeftRight: 10} */

  containers?: VariantType<ContainerStyleProps>;
  input?: VariantType<InputStyleProps>;
  picker?: VariantType<PickerProps>;
  // All the additional components will appear here
}
