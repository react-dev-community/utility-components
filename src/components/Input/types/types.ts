import { StyleProp, TextInputProps, TextStyle } from "react-native";
import { ContainerStyleProps } from "../../../theme/types";
import { TextInputRefType } from "./../../../types/index";

export interface LabelComponentProps {
  content?: string;
}

export interface InputStyleProps {
  OuterContainerStyle?: ContainerStyleProps;
  InnerContainerStyle?: ContainerStyleProps;
  textInputStyle?: StyleProp<TextStyle> | null;
  LabelComponent?: React.FC<LabelComponentProps>;
}

type blankInterface = TextInputProps & InputStyleProps;

export interface InputProps extends blankInterface {
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
  shouldValidate?: boolean;
  extraValidationData?: any;
  labelProps?: LabelComponentProps;
}
