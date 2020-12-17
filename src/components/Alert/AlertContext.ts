import React, { useContext } from 'react';
import { AlertContextType } from './types';

export const AlertContext = React.createContext<AlertContextType | {}>({});

export const useAlert = () => {
  const { alertState, setAlertState, closeModal } = useContext(
    AlertContext
  ) as AlertContextType;
  return { alertState, setAlertState, closeModal };
};
