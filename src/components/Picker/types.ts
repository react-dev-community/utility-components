import { GestureResponderEvent, ModalProps, ViewStyle } from 'react-native';

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
  bgContainerStyle?: ViewStyle;
  modalProps?: ModalProps;
  overrideTouchable?: boolean;
  sticky?: boolean;
  align?: 'top' | 'right' | 'left' | 'bottom';
  HeaderComponent?: React.FC<any>;
  FooterComponent?: React.FC<any>;
  LabelComponent?: React.FC<any>;
  MessageComponent?: React.FC<any>;
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

export interface PropsFromHook {
  visible: boolean;
  index: number;
  options: defaultOptionType[];
  setVisible: (flag: boolean) => void;
  setIndex: (idx: number) => void;
  setPickerState: React.Dispatch<
    React.SetStateAction<{
      index: number;
      visible: boolean;
    }>
  >;
}
