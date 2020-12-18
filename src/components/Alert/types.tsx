import React from 'react';

export interface Alert {
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
}

//export type AlertChildrenType<T = {}> = React.FC<T & AlertContextType>;

export interface AlertContextType {
  alertState: Alert;
  setAlertState: React.Dispatch<React.SetStateAction<Alert>>;
  closeModal: () => void;
}