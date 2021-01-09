import { StyleProp, TextInputProps, TextStyle } from 'react-native';
import { ContainerStyleProps } from '../../../theme/types';
import { TextInputRefType } from './../../../types/index';

export interface LabelComponentProps {
  content?: string;
}

export interface CustomMsgProps {
  isValid?: boolean;
  content?: string;
}

export interface InputStyleProps {
  OuterContainerStyle?: ContainerStyleProps;
  InnerContainerStyle?: ContainerStyleProps;
  textInputStyle?: StyleProp<TextStyle> | null;
  LabelComponent?: React.FC<LabelComponentProps>;

  CustomMsg?: React.FC<CustomMsgProps>;
}

type blankInterface = TextInputProps & InputStyleProps;

export interface InputProps extends blankInterface {
  validation?: (val: string, extraValidationData?: any) => boolean;

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
  shouldValidate?: boolean;
  extraValidationData?: any;
  LabelProps?: LabelComponentProps;
  CustomMsgProps?: Omit<CustomMsgProps, 'isValid'>;
}
