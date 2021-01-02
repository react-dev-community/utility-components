import { StyleProp, TextInputProps, TextStyle } from 'react-native';
import { ContainerStyleProps } from '../../../theme/types';
import { TextInputRefType } from './../../../types/index';

export interface InputProps extends TextInputProps {
  Label?: React.FC;
  validation?: (val: string, extraValidationData?: any) => boolean;
  CustomMsg?: React.FC<{ isValid: boolean }>;
  textInputStyle?: StyleProp<TextStyle> | null;
  isValid: boolean;
  setState: React.Dispatch<
    React.SetStateAction<{
      value: string | undefined;
      isValid: boolean;
    }>
  >;
  inputRef?: TextInputRefType;
  variant?: string;
  LeftIcon?: React.FC;
  RightIcon?: React.FC;
  OuterContainerStyle?: ContainerStyleProps;
  InnerContainerStyle?: ContainerStyleProps;
  shouldValidate?: boolean;
  extraValidationData?: any;
}
