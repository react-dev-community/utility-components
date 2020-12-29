import { StyleProp, TextInput, TextInputProps, TextStyle } from "react-native";
import { ContainerStyleProps } from "../../../theme/types";

export interface InputProps extends TextInputProps {
  Label?: React.FC;
  validation?: (val: string) => boolean;
  CustomMsg?: React.FC;
  textInputStyle?: StyleProp<TextStyle> | null;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isValid: boolean;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
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
}
