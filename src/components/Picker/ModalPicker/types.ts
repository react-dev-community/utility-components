import { ModalProps, ViewStyle } from 'react-native';
import { TouchableType } from '../../../types';

export type defaultOptionType = { title: string; value: string };

export interface PickerThemeOverrideProps {
  PickerComponent?: React.FC<{ option: defaultOptionType; isActive: boolean }>;
  pickerContainerStyle?: ViewStyle;
  modalContainerStyle?: ViewStyle;
  backgroundStyle?: ViewStyle;
  modalProps?: ModalProps;
  overrideTouchable?: boolean;
}
export interface ModalPickerProps extends PickerThemeOverrideProps {
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
}
