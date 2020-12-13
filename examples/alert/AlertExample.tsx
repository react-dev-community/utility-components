import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Txt } from '../../src';
import { useAlert } from '../../src/components/Alert/AlertContext';

const AlertExample = () => {
  const { setAlertState } = useAlert();
  return (
    <TouchableOpacity
      onPress={() =>
        setAlertState((prev) => {
          return {
            ...prev,
            visible: true,
            title: 'Hello',
            textContent: 'This is a sample Alert',
          };
        })
      }
    >
      <Txt>Click me</Txt>
    </TouchableOpacity>
  );
};

export default AlertExample;
