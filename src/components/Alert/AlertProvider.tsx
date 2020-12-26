import React, { useState } from 'react';
import { AlertContext } from './AlertContext';
import DefaultAlert from './Alert';
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

  /**
   * Function which sets visible to false to close the modal
   */
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
