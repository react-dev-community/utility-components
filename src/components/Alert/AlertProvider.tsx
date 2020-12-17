import React, { useState } from 'react';
import { AlertContext } from './AlertContext';
import DefaultAlert from './DefaultAlert';
import { Alert } from './types';

const AlertProvider: React.FC = ({ children }) => {
  const [alertState, setAlertState] = useState<Alert>({
    title: null,
    textContent: null,
    buttonLeftText: null,
    buttonLeftPress: null,
    buttonRightText: null,
    buttonRightPress: null,
    visible: false,
  });

  const closeModal = () => {
    setAlertState((prev) => {
      return {
        ...prev,
        visible: false,
      };
    });
  };

  return (
    <AlertContext.Provider value={{ alertState, setAlertState, closeModal }}>
      <DefaultAlert />
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
