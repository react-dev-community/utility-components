import { GestureResponderEvent, ModalProps, ViewStyle } from 'react-native';
import usePicker from './usePicker';

export type defaultOptionType = { title: string; value: string };

export interface PickerComponentProps {
  option: defaultOptionType;
  isActive: boolean;
  idx: number;
}

export interface PickerThemeOverrideProps {
  PickerComponent?: React.FC<PickerComponentProps>;
  variant?: string;
  pickerContainerStyle?: ViewStyle;
  rootContainerStyle?: ViewStyle;
  buttonContainerStyle?: ViewStyle;
  bgContainerStyle?: ViewStyle;
  modalProps?: ModalProps;
  overrideTouchable?: boolean;
  sticky?: boolean;
  align?: 'top' | 'right' | 'left' | 'bottom';
  HeaderComponent?: React.FC<any>;
  FooterComponent?: React.FC<any>;
  LabelComponent?: React.FC<any>;
  MessageComponent?: React.FC<{ isValid: boolean }>;
}
export interface PickerProps extends PickerThemeOverrideProps {
  HeaderComponentProps?: object;
  FooterComponentProps?: object;
  LabelComponentProps?: object;
  MessageComponentProps?: object;
  onPressPickerComponent?: (
    idx: number,
    option: defaultOptionType,
    e: GestureResponderEvent
  ) => void;
  extraPickerComponentProps?: any;
}

export type PickerPropsFromHook = ReturnType<typeof usePicker>['pickerProps'];
