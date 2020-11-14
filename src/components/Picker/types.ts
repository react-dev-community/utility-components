import { ModalProps, ViewStyle, GestureResponderEvent } from 'react-native';
import { TouchableType } from '../../types';

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
}
export interface PickerProps extends PickerThemeOverrideProps {
  HeaderComponent?: JSX.Element;
  FooterComponent?: JSX.Element;
  onPressPickerComponent?: (
    idx: number,
    option: defaultOptionType,
    e: GestureResponderEvent
  ) => void;
  extraPickerComponentProps?: any;
}

export interface PropsFromHook {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  options: defaultOptionType[];
}
