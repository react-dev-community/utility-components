import React from 'react';
import { ModalProps, StyleProp, TextStyle, ViewStyle } from 'react-native';

//export type AlertChildrenType<T = {}> = React.FC<T & AlertContextType>;

export interface AlertThemeOverrideProps {
  overlayContainerStyle?: StyleProp<ViewStyle>;
  alertContainerStyle?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<TextStyle>;
  bodyStyle?: StyleProp<TextStyle>;
  footerContainerStyle?: StyleProp<ViewStyle>;
  footerLeftButtonStyle?: StyleProp<ViewStyle>;
  footerRightButtonStyle?: StyleProp<ViewStyle>;
  footerLeftTextStyle?: StyleProp<TextStyle>;
  footerRightTextStyle?: StyleProp<TextStyle>;
}

export interface Alert extends AlertThemeOverrideProps {
  title?: string | null;
  textContent?: string | null;
  buttonLeftText?: string | null;
  buttonLeftPress?: (() => void) | null;
  buttonRightText?: string | null;
  buttonRightPress?: (() => void) | null;
  HeaderComponent?: () => JSX.Element;
  FooterComponent?: () => JSX.Element;
  BodyComponent?: () => JSX.Element;
  visible: boolean;
  onOutsideClose?: boolean;
  modalProps?: ModalProps;
  variant?: string;
}

export interface AlertContextType {
  alertState: Alert;
  setAlertState: React.Dispatch<React.SetStateAction<Alert>>;
  closeModal: () => void;
}
