import React from 'react';
import { ModalProps, StyleProp, TextStyle, ViewStyle } from 'react-native';

/**
 * Props for setting theme
 *
 */
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

/**
 * Type for custom header/body/footer components
 *
 */
export type CustomAlertComponent<T = {}> = React.FC<T & AlertContextType>;

export interface Alert extends AlertThemeOverrideProps {
  title?: string | null;
  textContent?: string | null;
  buttonLeftText?: string | null;
  buttonLeftPress?: (() => void) | null;
  buttonRightText?: string | null;
  buttonRightPress?: (() => void) | null;
  HeaderComponent?: (props: AlertContextType) => JSX.Element;
  FooterComponent?: (props: AlertContextType) => JSX.Element;
  BodyComponent?: (props: AlertContextType) => JSX.Element;
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
