import { ModalProps, ViewStyle } from 'react-native';
import { TouchableType } from '../../types';

export type defaultOptionType = { title: string; value: string };

export interface PickerThemeOverrideProps {
  variant?: string;
  PickerComponent?: React.FC<{
    option: defaultOptionType;
    isActive: boolean;
    idx: number;
  }>;
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
  onPressPickerComponent?: TouchableType;
  extraPickerComponentProps?: any;
}

export interface PropsFromHook {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  options: defaultOptionType[];
  setPositionState: React.Dispatch<React.SetStateAction<boolean>>;
  positionState: boolean;
}
