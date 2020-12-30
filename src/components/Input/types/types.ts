import { StyleProp, TextInput, TextInputProps, TextStyle } from 'react-native';
import { ContainerStyleProps } from '../../../theme/types';

export interface InputProps extends TextInputProps {
  Label?: React.FC;
  validation?: (val: string | undefined, extraValidationData?: any) => boolean;
  CustomMsg?: React.FC<{ isValid: boolean }>;
  textInputStyle?: StyleProp<TextStyle> | null;
  isValid: boolean;
  setState: React.Dispatch<
    React.SetStateAction<{
      value: string | undefined;
      isValid: boolean | undefined;
    }>
  >;
  inputRef?:
    | string
    | ((instance: TextInput | null) => void)
    | React.RefObject<TextInput>
    | null
    | undefined;
  variant?: string;
  LeftIcon?: React.FC;
  RightIcon?: React.FC;
  OuterContainerStyle?: ContainerStyleProps;
  InnerContainerStyle?: ContainerStyleProps;
  shouldValidate?: boolean;
  extraValidationData?: any;
}
